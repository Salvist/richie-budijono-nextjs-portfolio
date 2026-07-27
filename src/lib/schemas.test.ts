import { describe, expect, it } from "vitest";
import { inquirySchema } from "./schemas";

const validInquiry = {
  name: "Ada Founder",
  email: "ada@example.com",
  company: "Useful Product",
  projectType: "new-product",
  platform: "both",
  stage: "idea",
  budget: "10k-25k",
  timeline: "one-to-three-months",
  summary:
    "I am building a workflow product for a small operations team and need help defining and delivering the first release.",
  submissionId: "submission-1",
  website: "",
};

describe("inquirySchema", () => {
  it("accepts a complete project brief", () => {
    expect(inquirySchema.safeParse(validInquiry).success).toBe(true);
  });

  it("rejects invalid email, missing selections, and a short summary", () => {
    const result = inquirySchema.safeParse({
      ...validInquiry,
      email: "not-an-email",
      projectType: "",
      summary: "Too short",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      expect(errors.email).toBeDefined();
      expect(errors.projectType).toBeDefined();
      expect(errors.summary).toBeDefined();
    }
  });

  it("accepts a honeypot value so the server action can reject it silently", () => {
    expect(
      inquirySchema.safeParse({ ...validInquiry, website: "spam.example" })
        .success,
    ).toBe(true);
  });
});
