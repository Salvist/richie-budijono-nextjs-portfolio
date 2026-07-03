import { z } from "zod";

export const contactServiceOptions = [
  "MVP / idea-to-launch",
  "Web app development",
  "Mobile app development",
  "AI integrations",
  "Something else",
] as const;

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .min(2, { message: "Must be at least 2 characters." })
    .max(100, { message: "Must be at most 100 characters." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Invalid email."),
  service: z.enum(contactServiceOptions, {
    errorMap: () => ({ message: "Please pick what you need." }),
  }),
  budget: z.string().max(100).optional(),
  message: z
    .string()
    .min(1, { message: "Message is required." })
    .min(20, { message: "Tell me a little more — at least 20 characters." })
    .max(5000, { message: "Must be at most 5000 characters." }),
  // Honeypot: humans never see or fill this field. Validation accepts any
  // value so the API can silently discard bot submissions instead of erroring.
  company: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;
