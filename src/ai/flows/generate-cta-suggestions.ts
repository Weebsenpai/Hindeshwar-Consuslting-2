'use server';

/**
 * @fileOverview AI agent that generates call-to-action suggestions for different sections of a page.
 *
 * - generateCtaSuggestions - A function that generates CTA suggestions.
 * - GenerateCtaSuggestionsInput - The input type for the generateCtaSuggestions function.
 * - GenerateCtaSuggestionsOutput - The return type for the generateCtaSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCtaSuggestionsInputSchema = z.object({
  pageSectionDescription: z
    .string()
    .describe('The description of the page section for which CTA suggestions are needed.'),
});
export type GenerateCtaSuggestionsInput = z.infer<typeof GenerateCtaSuggestionsInputSchema>;

const GenerateCtaSuggestionsOutputSchema = z.object({
  ctaSuggestions: z
    .array(z.string())
    .describe('An array of call-to-action suggestions for the given page section.'),
});
export type GenerateCtaSuggestionsOutput = z.infer<typeof GenerateCtaSuggestionsOutputSchema>;

export async function generateCtaSuggestions(
  input: GenerateCtaSuggestionsInput
): Promise<GenerateCtaSuggestionsOutput> {
  return generateCtaSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCtaSuggestionsPrompt',
  input: {schema: GenerateCtaSuggestionsInputSchema},
  output: {schema: GenerateCtaSuggestionsOutputSchema},
  prompt: `You are an expert marketing assistant specializing in generating calls to action for web pages.

You will use the description of the page section to generate a list of compelling CTA suggestions.

Description of the page section: {{{pageSectionDescription}}}

Generate 3 different suggestions. Vary the tone and length of the suggestions.

Output in JSON format.
`,
});

const generateCtaSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateCtaSuggestionsFlow',
    inputSchema: GenerateCtaSuggestionsInputSchema,
    outputSchema: GenerateCtaSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
