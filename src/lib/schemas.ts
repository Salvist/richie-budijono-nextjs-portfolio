import { z } from "zod";

const required = (label: string) =>
  z.string().trim().min(1, `${label} is required.`);

export const inquirySchema = z.object({
  name: required("Name")
    .min(2, "Please enter your full name.")
    .max(80, "Keep your name under 80 characters."),
  email: required("Email").email("Enter a valid email address."),
  company: z.string().trim().max(120).optional(),
  projectType: z.enum(
    ["new-product", "existing-product", "internal-tool", "consultation"],
    { message: "Choose the type of project." },
  ),
  platform: z.enum(["web", "mobile", "both", "not-sure"], {
    message: "Choose a platform.",
  }),
  stage: z.enum(["idea", "prototype", "live"], {
    message: "Choose the current stage.",
  }),
  budget: z.enum(["5k-10k", "10k-25k", "25k-plus", "not-sure"], {
    message: "Choose a budget range.",
  }),
  timeline: z.enum(["asap", "one-month", "one-to-three-months", "exploring"], {
    message: "Choose a desired start.",
  }),
  summary: required("Project summary")
    .min(30, "Share at least a few sentences about the project.")
    .max(4000, "Keep the summary under 4,000 characters."),
  submissionId: required("Submission identifier"),
  website: z.string().max(200).optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
