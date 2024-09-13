"use client";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "@/lib/schemas";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

type Inputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <section className="relative isolate mt-4">
      <div className="relative">
        <form
          onSubmit={handleSubmit(processForm)}
          noValidate
          className="grid grid-cols-1 gap-4"
        >
          <div>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            {errors.name?.message && <p className=""> {errors.name.message}</p>}
          </div>
          <div>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className=""> {errors.email.message}</p>
            )}
          </div>
          <div>
            <Textarea rows={4} placeholder="Message" {...register("message")} />
            {errors.message?.message && (
              <p className=""> {errors.message.message}</p>
            )}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full disabeld:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Send message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
