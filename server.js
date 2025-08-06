// npm install @google/generative-ai dotenv
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function summarizeEmail(emailText) {
  const prompt = `Summarize this email concisely:\n${emailText}`;

  const result = await model.generateContent(prompt);
  const summary = result.response.text();

  console.log("Summary:", summary);
}

// Example email
summarizeEmail("Dear Team, Our quarterly meeting is scheduled for next Monday at 10 AM...");


// import dotenv from "dotenv";
// import OpenAI from "openai";

// dotenv.config();
// const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// async function summarizeEmail(emailText) {
//   const response = await client.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [
//       { role: "system", content: "You are an assistant that summarizes emails concisely." },
//       { role: "user", content: `Summarize this email:\n${emailText}` }
//     ]
//   });
//   console.log("Summary:", response.choices[0].message.content);
// }

// summarizeEmail("Dear Team, Our quarterly meeting is scheduled for next Monday at 10 AM...");
