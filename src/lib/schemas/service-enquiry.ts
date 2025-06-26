
import { z } from "zod";

export const serviceEnquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50, "Name must be at most 50 characters."),
  mobile: z.string().regex(/^\d{10}$/, "Please enter a valid 10-digit mobile number."),
  subject: z.string(), // This will be hidden and pre-filled
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be at most 500 characters."),
});

export type ServiceEnquiryFormValues = z.infer<typeof serviceEnquirySchema>;
