from typing import Optional
from fastapi import APIRouter, Body, File, Header, UploadFile, Form
from fastapi.responses import FileResponse
from pydantic import BaseModel

from ..controllers.audio import generate_text_from_speech, generate_speech_from_text


router = APIRouter()


class Input(BaseModel):
    file: bytes
    region: str


@router.post('/speech-to-text')
async def speech_to_text(file: bytes = Body(), region: Optional[str] = Header(None)):
    return await generate_text_from_speech(file, region)


@router.post('/text-to-speech')
async def text_to_speech(file: UploadFile = Form(), region: Optional[str] = Header(None)):
    return FileResponse(await generate_speech_from_text(file, region))
