import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const faqData = `
Q: What is your return policy?
A: You can return items within 30 days of purchase.

Q: Do you offer international shipping?
A: Yes, we ship globally.
`;

async function answerQuestion(question) {
  const prompt = `You are an FAQ assistant. Answer questions based only on the provided FAQs.\n\nFAQs:\n${faqData}\nQuestion: ${question}`;
  const result = await model.generateContent(prompt);
  console.log("Answer:", result.response.text());
}

answerQuestion("What is your return policy?");
