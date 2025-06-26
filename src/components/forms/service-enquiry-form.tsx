
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { submitServiceEnquiryForm } from "@/actions/service-enquiry-actions";
import { serviceEnquirySchema, type ServiceEnquiryFormValues } from "@/lib/schemas/service-enquiry";

export function ServiceEnquiryForm({ serviceName }: { serviceName: string }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ServiceEnquiryFormValues>({
    resolver: zodResolver(serviceEnquirySchema),
    defaultValues: {
      name: "",
      mobile: "",
      subject: `Enquiry about ${serviceName}`,
      message: "",
    },
  });

  useEffect(() => {
    form.setValue("subject", `Enquiry about ${serviceName}`);
  }, [serviceName, form]);

  async function onSubmit(values: ServiceEnquiryFormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitServiceEnquiryForm(values);
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        form.reset();
        form.setValue("subject", `Enquiry about ${serviceName}`);
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile No.</FormLabel>
                <div className="flex items-center">
                   <div className="flex h-10 items-center justify-center gap-2 rounded-l-md border border-r-0 border-input bg-input px-3">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15" className="h-4 w-6 flex-shrink-0"><path fill="#f93" d="M0 0h21v5H0z"/><path fill="#fff" d="M0 5h21v5H0z"/><path fill="#128807" d="M0 10h21v5H0z"/><g transform="translate(10.5 7.5)"><circle r="2" fill="#000080"/><circle r="1.75" fill="#fff"/><path fill="#000080" d="M0-1.75a.175.175 0 0 0 0 3.5.175.175 0 0 0 0-3.5zm0 .175a1.575 1.575 0 1 1 0 3.15 1.575 1.575 0 0 1 0-3.15z"/><g id="d"><g id="c"><g id="b"><g id="a"><path d="M0-1.75-.054.175.108 0z" transform="rotate(7.5)"/><path d="M0-1.75-.108.175.216 0z" transform="rotate(15)"/></g><use xlinkHref="#a" transform="rotate(15)"/></g><use xlinkHref="#b" transform="rotate(30)"/></g><use xlinkHref="#c" transform="rotate(60)"/></g><use xlinkHref="#d" transform="rotate(120)"/><use xlinkHref="#d" transform="rotate(240)"/></g></svg>
                     <span className="text-sm font-medium text-foreground">+91</span>
                   </div>
                   <FormControl>
                    <Input placeholder="Enter 10-digit mobile no." className="rounded-l-none" {...field} />
                   </FormControl>
                </div>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Subject field is hidden */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us more about your needs..."
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full sm:w-auto text-lg px-8 py-3" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
}
