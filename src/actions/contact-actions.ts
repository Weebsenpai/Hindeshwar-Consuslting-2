"use server";

import { formSchema, type ContactFormValues } from "@/lib/schemas/contact";

// Server action
export async function submitContactForm(data: ContactFormValues): Promise<{ success: boolean; message: string }> {
  // In a real application, you would send this data to your backend, email service, or database.
  console.log("Contact form submitted:", data);
  
  // Validate data - though Zod does this on the client, it's good practice to validate on server too
  const validatedData = formSchema.safeParse(data);
  if (!validatedData.success) {
    return { success: false, message: "Invalid data received." };
  }

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // You can customize the success or error messages here
  return { success: true, message: "Your message has been sent successfully! We'll get back to you soon." };
  // Example error:
  // return { success: false, message: "Failed to send message. Please try again later." };
}
