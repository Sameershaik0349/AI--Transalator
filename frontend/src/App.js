import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [language, setLanguage] = useState("hi");
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [detectedLang, setDetectedLang] = useState("");

  const translate = async () => {
    if (!text.trim()) return;

    try {
      setLoading(true);

      const res = await axios.post("http://127.0.0.1:8000/translate", {
        text: text,
        dest_lang: language
      });

      setTranslated(res.data.translated_text);
      setDetectedLang(res.data.detected_language || "");
    } catch (error) {
      alert("Translation failed. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  const swapLanguage = () => {
    setText(translated);
    setTranslated(text);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="card">
        <div className="top-bar">
          <h1>🌍 AI Translator</h1>
          <button
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>

        <textarea
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="controls">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="hi">Hindi</option>
            <option value="te">Telugu</option>
            <option value="ta">Tamil</option>
            <option value="fr">French</option>
            <option value="ar">Arabic</option>
          </select>

          <button className="swap-btn" onClick={swapLanguage}>
            🔄 Swap
          </button>
        </div>

        <button className="translate-btn" onClick={translate}>
          Translate
        </button>

        <div className="output">
          {loading ? (
            <div className="spinner"></div>
          ) : (
            <>
              {detectedLang && (
                <p className="detected">
                  🌐 Detected Language: {detectedLang}
                </p>
              )}
              <p>{translated}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
