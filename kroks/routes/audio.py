from fastapi import APIRouter, Body
from fastapi.responses import FileResponse

from ..controllers.audio import generate_text_from_speech, generate_speech_from_text


router = APIRouter()


@router.post('/speech-to-text')
def speech_to_text(file: bytes = Body()):
    return generate_text_from_speech(file)


@router.post('/text-to-speech')
def text_to_speech(text: str = Body()):
    return FileResponse(generate_speech_from_text(text))
