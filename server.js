const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/debug", async (req, res) => {
  const { code, language } = req.body;

  const prompt = `
You are a senior software engineer.
Debug the following ${language} code.
1. Explain the issue clearly.
2. Provide corrected version.

Code:
${code}
`;

  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "mistral",
      prompt: prompt,
      stream: false,
    });

    res.json({ result: response.data.response });
  } catch (error) {
    res.status(500).json({ error: "AI failed" });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
