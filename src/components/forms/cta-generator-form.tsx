"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { generateCtaSuggestions, type GenerateCtaSuggestionsInput, type GenerateCtaSuggestionsOutput } from "@/ai/flows/generate-cta-suggestions";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Wand2 } from "lucide-react";

const formSchema = z.object({
  pageSectionDescription: z.string().min(10, "Description must be at least 10 characters.").max(500, "Description can be at most 500 characters."),
});

type CtaGeneratorFormValues = z.infer<typeof formSchema>;

export function CtaGeneratorForm() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<CtaGeneratorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pageSectionDescription: "",
    },
  });

  async function onSubmit(values: CtaGeneratorFormValues) {
    setIsLoading(true);
    setSuggestions([]);
    try {
      const input: GenerateCtaSuggestionsInput = {
        pageSectionDescription: values.pageSectionDescription,
      };
      const result: GenerateCtaSuggestionsOutput = await generateCtaSuggestions(input);
      if (result.ctaSuggestions && result.ctaSuggestions.length > 0) {
        setSuggestions(result.ctaSuggestions);
        toast({
          title: "Suggestions Generated!",
          description: "Here are your AI-powered CTA suggestions.",
        });
      } else {
        toast({
          title: "No Suggestions",
          description: "The AI couldn't generate suggestions for this input. Try rephrasing.",
          variant: "default",
        });
      }
    } catch (error) {
      console.error("Error generating CTA suggestions:", error);
      toast({
        title: "Error",
        description: "Failed to generate suggestions. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card className="shadow-xl bg-background border-border">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-foreground flex items-center">
            <Wand2 className="mr-2 h-6 w-6 text-primary" />
            Generate CTA Suggestions
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Describe a section of your webpage, and our AI will suggest compelling calls to action.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="pageSectionDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Page Section Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A hero section for a new SAAS product that helps teams collaborate better."
                        className="min-h-[120px] !text-white bg-input border-border focus:border-primary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="text-lg px-6 py-3 rounded-lg">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate CTAs"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="text-center py-8">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
          <p className="mt-2 text-muted-foreground">Generating your creative CTAs...</p>
        </div>
      )}

      {!isLoading && suggestions.length > 0 && (
        <Card className="shadow-xl bg-background border-border">
          <CardHeader>
            <CardTitle className="font-headline text-xl text-foreground">Suggested CTAs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="p-4 border border-border rounded-md bg-secondary text-secondary-foreground">
                  <p className="text-sm sm:text-base">{suggestion}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
