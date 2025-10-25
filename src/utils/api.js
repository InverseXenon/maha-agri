export const callGeminiApi = async (userMessage, history) => {
  const chatHistory = history.map(msg => ({
    role: msg.sender === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }]
  }));
  chatHistory.push({ role: 'user', parts: [{ text: userMessage }] });

  const payload = {
    contents: chatHistory,
    systemInstruction: {
      parts: [{ text: SYSTEM_INSTRUCTION }]
    },
  };

  const maxRetries = 5;
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await fetch(`${API_URL}?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        if (response.status === 429 || response.status >= 500 && attempt < maxRetries - 1) {
          const delay = Math.pow(2, attempt) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response right now. Please try again.";
      return text;
    } catch (error) {
      console.error("Gemini API call failed:", error);
      if (attempt === maxRetries - 1) {
        return "I'm having trouble connecting to the advisory system. Please check your network or try again later.";
      }
    }
  }
};
