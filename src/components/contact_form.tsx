"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  ContactFormSchema,
  ContactFormValues,
  contactServiceOptions,
} from "@/lib/schemas";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      budget: "",
      message: "",
      company: "",
    },
  });

  const processForm: SubmitHandler<ContactFormValues> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        toast.error(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      toast.success("Message sent! I'll get back to you within a day or two.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(processForm)} noValidate className="grid grid-cols-1 gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            className="mt-1.5"
            {...register("name")}
          />
          {errors.name?.message && <p className="form-error">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="mt-1.5"
            {...register("email")}
          />
          {errors.email?.message && <p className="form-error">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="form-label">
            What do you need?
          </label>
          <select
            id="service"
            className="mt-1.5 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            defaultValue=""
            {...register("service")}
          >
            <option value="" disabled>
              Pick one
            </option>
            {contactServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service?.message && <p className="form-error">{errors.service.message}</p>}
        </div>
        <div>
          <label htmlFor="budget" className="form-label">
            Budget or timeline{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <Input
            id="budget"
            type="text"
            placeholder="e.g. $5–10k, launch by spring"
            className="mt-1.5"
            {...register("budget")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          Your idea or project
        </label>
        <Textarea
          id="message"
          rows={6}
          placeholder="What are you trying to build? Who is it for? Where are you stuck?"
          className="mt-1.5"
          {...register("message")}
        />
        {errors.message?.message && <p className="form-error">{errors.message.message}</p>}
      </div>

      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px]">
        <label htmlFor="company">Company</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <button type="submit" disabled={isSubmitting} className="button button-primary disabled:opacity-50">
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
