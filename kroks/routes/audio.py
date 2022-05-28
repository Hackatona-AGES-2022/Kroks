from typing import Optional
from fastapi import APIRouter, Body, File, Header, UploadFile, Form
from fastapi.responses import FileResponse, RedirectResponse
from pydantic import BaseModel
import random
import pathlib

from ..controllers.audio import generate_text_from_speech, generate_speech_from_text, save_audio


router = APIRouter()


class Input(BaseModel):
    file: bytes
    region: str


@router.post('/speech-to-text')
async def speech_to_text(file: bytes = Body(), region: Optional[str] = Header(None)):
    return await generate_text_from_speech(file, region)


@router.get('/text-to-speech')
async def text_to_speech(text: str, region: Optional[str] = Header(None)):
    audio = await generate_speech_from_text(text, region)
    file_name = save_audio(audio)
    return RedirectResponse(f'http://localhost:8000/static/mp3/{file_name}')
