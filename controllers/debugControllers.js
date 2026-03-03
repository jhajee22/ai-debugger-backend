const { generateDebugResponse } = require("../services/aiService");

const debugCode = async (req, res) => {
  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ error: "Code and language required" });
  }

  try {
    const result = await generateDebugResponse(code, language);
    res.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI processing failed" });
  }
};

module.exports = { debugCode };
