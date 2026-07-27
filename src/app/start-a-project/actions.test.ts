import { beforeEach, describe, expect, it, vi } from "vitest";

const { send } = vi.hoisted(() => ({ send: vi.fn() }));

vi.mock("resend", () => ({
  Resend: class {
    emails = { send };
  },
}));

import { submitInquiry, type InquiryState } from "./actions";

const initialInquiryState: InquiryState = {
  status: "idle",
  message: "",
};

function makeFormData(submissionId: string) {
  const data = new FormData();
  data.set("name", "Ada Founder");
  data.set("email", "ada@example.com");
  data.set("company", "Useful Product");
  data.set("projectType", "new-product");
  data.set("platform", "both");
  data.set("stage", "idea");
  data.set("budget", "10k-25k");
  data.set("timeline", "one-to-three-months");
  data.set(
    "summary",
    "I am building a workflow product for a small operations team and need help defining and delivering the first release.",
  );
  data.set("submissionId", submissionId);
  data.set("website", "");
  return data;
}

describe("submitInquiry", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.RESEND_API_KEY = "test-key";
    process.env.RESEND_FROM_EMAIL = "Richie <projects@example.com>";
    process.env.CONTACT_EMAIL = "richie@example.com";
  });

  it("returns accessible validation errors without sending", async () => {
    const data = makeFormData("validation");
    data.set("email", "invalid");

    const result = await submitInquiry(initialInquiryState, data);

    expect(result.status).toBe("error");
    expect(result.errors?.email).toBeDefined();
    expect(send).not.toHaveBeenCalled();
  });

  it("silently rejects a filled honeypot without sending", async () => {
    const data = makeFormData("honeypot");
    data.set("website", "https://spam.example");

    const result = await submitInquiry(initialInquiryState, data);

    expect(result.status).toBe("success");
    expect(send).not.toHaveBeenCalled();
  });

  it("sends a valid inquiry and prevents a duplicate send", async () => {
    send.mockResolvedValue({ data: { id: "message-1" }, error: null });

    const first = await submitInquiry(
      initialInquiryState,
      makeFormData("duplicate"),
    );
    const second = await submitInquiry(
      initialInquiryState,
      makeFormData("duplicate"),
    );

    expect(first.status).toBe("success");
    expect(second.status).toBe("success");
    expect(send).toHaveBeenCalledTimes(1);
  });

  it("preserves values when the email provider fails", async () => {
    send.mockResolvedValue({
      data: null,
      error: { message: "Provider unavailable" },
    });

    const result = await submitInquiry(
      initialInquiryState,
      makeFormData("provider-failure"),
    );

    expect(result.status).toBe("error");
    expect(result.values?.email).toBe("ada@example.com");
  });
});
