import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/analyze-image", async (req, res) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ error: "No image provided" });
    }

    const base64Image = image.split(",")[1];

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `
Return ONLY valid JSON.

Detect ONLY visible food in the image.

Format:
{
  "detectedFoods": [
    { "name": "food name", "confidence": 0.0 }
  ]
}

Rules:
- Do NOT guess hidden foods
- Only what is visible
- If unsure, omit item
              `,
            },
            {
              type: "input_image",
              image_url: `data:image/png;base64,${base64Image}`,
            },
          ],
        },
      ],
    });

    const text = response.output_text;

    console.log("RAW AI OUTPUT:", text);

    let parsed;

    try {
      parsed = JSON.parse(text);
    } catch (err) {
      console.log("JSON PARSE FAILED:", text);
      return res.status(500).json({
        error: "Model did not return valid JSON",
        raw: text,
      });
    }

    return res.json(parsed);
  } catch (err) {
    console.error("BACKEND ERROR:", err);

    return res.status(500).json({
      error: "Vision API failed",
      details: err.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});