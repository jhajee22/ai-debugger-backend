const axios = require("axios");

const generateDebugResponse = async (code, language) => {
  const prompt = `
You are a senior software engineer.

Task:
1. Identify the bug in the ${language} code.
2. Explain clearly what is wrong.
3. Provide corrected version of the code.

Code:
${code}
`;

  const response = await axios.post("http://localhost:11434/api/generate", {
    model: "mistral",
    prompt: prompt,
    stream: false,
  });

  return response.data.response;
};

module.exports = { generateDebugResponse };
