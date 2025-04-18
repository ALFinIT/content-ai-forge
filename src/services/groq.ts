
interface GenerateContentParams {
  title: string;
  description: string;
  topic?: string;
}

export const generateContent = async ({ title, description, topic }: GenerateContentParams): Promise<string> => {
  const apiKey = localStorage.getItem("groq_api_key");
  
  if (!apiKey) {
    throw new Error("Please set your Groq API key in settings first");
  }

  const prompt = `Create a detailed blog post with the following specifications:
Title: ${title}
Description: ${description}
${topic ? `Topic: ${topic}` : ''}

Please include:
1. An engaging introduction
2. Multiple sections with clear subheadings
3. A compelling conclusion

Format the response in Markdown format with proper headings (#, ##) and formatting.`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mixtral-8x7b-32768",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 4000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to generate content");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};
