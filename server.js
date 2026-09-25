import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const foodDB = [
  { name: "jollof rice", calories: 520 },
  { name: "egusi soup", calories: 410 },
  { name: "pounded yam", calories: 330 },
  { name: "suya", calories: 290 },
  { name: "moi moi", calories: 220 },
  { name: "akara", calories: 280 },
  { name: "shawarma", calories: 650 },
  { name: "indomie", calories: 380 },
];

app.post("/analyze-food", upload.single("image"), async (req, res) => {
  try {
    const imageBuffer = fs.readFileSync(req.file.path);
    const base64Image = imageBuffer.toString("base64");

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text:
                "Identify Nigerian food in this image. Return JSON: {food, confidence}",
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`,
              },
            },
          ],
        },
      ],
    });

    const aiResult = JSON.parse(response.choices[0].message.content);

    const match = foodDB.find((f) =>
      aiResult.food.toLowerCase().includes(f.name)
    );

    const result = match
      ? {
          food: match.name,
          calories: match.calories,
          confidence: aiResult.confidence,
        }
      : {
          food: aiResult.food,
          calories: "Unknown",
          confidence: aiResult.confidence,
        };

    fs.unlinkSync(req.file.path);

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "failed" });
  }
});

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);