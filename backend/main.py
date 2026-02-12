from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from deep_translator import GoogleTranslator

# Create FastAPI app
app = FastAPI()

# Enable CORS (VERY IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request Model
class TranslateRequest(BaseModel):
    text: str
    dest_lang: str


@app.get("/")
def home():
    return {"message": "AI Translator Running"}


@app.post("/translate")
async def translate_text(data: TranslateRequest):
    try:
        if not data.text.strip():
            raise HTTPException(status_code=400, detail="Text cannot be empty")

        # Auto-detect language
        translator = GoogleTranslator(source="auto", target=data.dest_lang)

        translated = translator.translate(data.text)

        # deep-translator automatically detects source when source="auto"
        detected_language = translator.source

        return {
            "original_text": data.text,
            "translated_text": translated,
            "detected_language": detected_language
        }

    except Exception as e:
        print("FULL ERROR:", str(e))
        raise HTTPException(status_code=500, detail=str(e))
