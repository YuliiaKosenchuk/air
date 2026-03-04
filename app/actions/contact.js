"use server";

import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" }),
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" }),
  company: z.string().optional(),
});

export async function sendContact(prevState, formData) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const rawData = {
      email: formData.get("email"),
      name: formData.get("name"),
      message: formData.get("message"),
      company: formData.get("company"),
    };

    const validatedFields = schema.safeParse(rawData);
    if (!validatedFields.success) {
      const fieldErrors = validatedFields.error.format();
      return {
        success: false,
        errors: {
          email: fieldErrors.email?._errors,
          name: fieldErrors.name?._errors,
          message: fieldErrors.message?._errors,
        },
        timestamp: Date.now(),
      };
    }

    const data = validatedFields.data;
    if (!data.message || !data.name) {
      return {
        success: false,
        error: "Fields cannot be empty",
        timestamp: Date.now(),
      };
    }
    
    if (data.company) return { success: true, timestamp: Date.now() };

    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      subject: "New Website Message",
      html: `
        <h3>New message</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p>${data.message}</p>
      `,
    });

    return { success: true, timestamp: Date.now() };
  } catch {
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
      timestamp: Date.now(),
    };
  }
}
