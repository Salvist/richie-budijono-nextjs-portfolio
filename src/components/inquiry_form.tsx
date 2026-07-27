"use client";

import {
  submitInquiry,
  type InquiryState,
} from "@/app/start-a-project/actions";
import type { InquiryInput } from "@/lib/schemas";
import { useActionState, useEffect, useId, useRef } from "react";

type FieldName = keyof InquiryInput;

const initialInquiryState: InquiryState = {
  status: "idle",
  message: "",
};

function FieldError({
  state,
  name,
}: {
  state: InquiryState;
  name: FieldName;
}) {
  const error = state.errors?.[name]?.[0];
  if (!error) return null;

  return (
    <p id={`${name}-error`} className="mt-2 text-sm font-semibold text-destructive">
      {error}
    </p>
  );
}

const selectOptions = {
  projectType: [
    ["", "Choose a project type"],
    ["new-product", "New product"],
    ["existing-product", "Existing product"],
    ["internal-tool", "Internal tool or automation"],
    ["consultation", "Product or technical consultation"],
  ],
  platform: [
    ["", "Choose a platform"],
    ["web", "Web"],
    ["mobile", "Mobile"],
    ["both", "Web and mobile"],
    ["not-sure", "Not sure yet"],
  ],
  stage: [
    ["", "Choose the current stage"],
    ["idea", "Idea"],
    ["prototype", "Prototype"],
    ["live", "Live product"],
  ],
  budget: [
    ["", "Choose a budget range"],
    ["5k-10k", "$5k–$10k"],
    ["10k-25k", "$10k–$25k"],
    ["25k-plus", "$25k+"],
    ["not-sure", "Not sure yet"],
  ],
  timeline: [
    ["", "Choose a desired start"],
    ["asap", "As soon as possible"],
    ["one-month", "Within one month"],
    ["one-to-three-months", "One to three months"],
    ["exploring", "Exploring for later"],
  ],
} as const;

export default function InquiryForm() {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialInquiryState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const submissionId = useId();

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  const describedBy = (name: FieldName) =>
    state.errors?.[name] ? `${name}-error` : undefined;

  return (
    <form
      ref={formRef}
      action={formAction}
      className="surface grid gap-6 p-6 sm:p-9"
      noValidate
    >
      <input type="hidden" name="submissionId" value={submissionId} />
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-bold">
            Name <span aria-hidden>*</span>
          </label>
          <input
            className="field"
            id="name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={describedBy("name")}
            defaultValue={state.values?.name}
          />
          <FieldError state={state} name="name" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-bold">
            Email <span aria-hidden>*</span>
          </label>
          <input
            className="field"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={describedBy("email")}
            defaultValue={state.values?.email}
          />
          <FieldError state={state} name="email" />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="text-sm font-bold">
          Company <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input
          className="field"
          id="company"
          name="company"
          autoComplete="organization"
          defaultValue={state.values?.company}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {(
          [
            ["projectType", "Project type"],
            ["platform", "Platform"],
            ["stage", "Current stage"],
            ["budget", "Budget"],
            ["timeline", "Desired start"],
          ] as const
        ).map(([name, fieldLabel]) => (
          <div key={name} className={name === "timeline" ? "sm:col-span-2" : ""}>
            <label htmlFor={name} className="text-sm font-bold">
              {fieldLabel} <span aria-hidden>*</span>
            </label>
            <select
              className="field"
              id={name}
              name={name}
              required
              aria-invalid={Boolean(state.errors?.[name])}
              aria-describedby={describedBy(name)}
              defaultValue={state.values?.[name] ?? ""}
            >
              {selectOptions[name].map(([value, optionLabel]) => (
                <option key={value || "empty"} value={value} disabled={!value}>
                  {optionLabel}
                </option>
              ))}
            </select>
            <FieldError state={state} name={name} />
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="summary" className="text-sm font-bold">
          Tell me about the project <span aria-hidden>*</span>
        </label>
        <p className="mt-1 text-sm text-muted-foreground">
          What are you trying to build, who is it for, and what is making it hard?
        </p>
        <textarea
          className="field min-h-40 resize-y"
          id="summary"
          name="summary"
          required
          maxLength={4000}
          aria-invalid={Boolean(state.errors?.summary)}
          aria-describedby={describedBy("summary")}
          defaultValue={state.values?.summary}
        />
        <FieldError state={state} name="summary" />
      </div>

      {state.message && (
        <div
          role={state.status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`rounded-2xl border p-4 text-sm font-semibold ${
            state.status === "success"
              ? "border-green-500/40 bg-green-500/10 text-green-800 dark:text-green-300"
              : "border-destructive/40 bg-destructive/10 text-destructive"
          }`}
        >
          {state.message}
          {state.status === "error" && !state.errors && (
            <>
              {" "}
              <a className="underline" href="mailto:richiechandra47@gmail.com">
                Email me directly.
              </a>
            </>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={pending || state.status === "success"}
        className="button-primary justify-center disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending
          ? "Sending your brief…"
          : state.status === "success"
            ? "Brief received"
            : "Send project brief"}
      </button>
      <p className="text-center text-xs leading-5 text-muted-foreground">
        Your answers are used only to respond to this inquiry and are not stored
        in a website database.
      </p>
    </form>
  );
}
