
"use server";

import { serviceEnquirySchema, type ServiceEnquiryFormValues } from "@/lib/schemas/service-enquiry";

// Server action
export async function submitServiceEnquiryForm(data: ServiceEnquiryFormValues): Promise<{ success: boolean; message: string }> {
  // In a real application, you would send this data to your backend, email service, or database.
  console.log("Service enquiry form submitted:", data);
  
  // Validate data
  const validatedData = serviceEnquirySchema.safeParse(data);
  if (!validatedData.success) {
    return { success: false, message: "Invalid data received." };
  }

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true, message: "Your enquiry has been sent successfully! We'll get back to you soon." };
}
