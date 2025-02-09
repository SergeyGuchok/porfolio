"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendFeedback(code: string) {
  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL as string,
      to: [process.env.RESEND_TO_EMAIL as string],
      subject: "Message from Portfolio page",
      react: code,
    });

    if (error) {
      return { error };
    }

    return { success: true };
  } catch (error) {
    return { error };
  }
}
