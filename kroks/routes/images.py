from typing import Dict, Optional
from fastapi import APIRouter, Header, Body 
from ..controllers.audio import generate_speech_from_text, save_audio
from ..controllers.images import get_image_description
from fastapi.responses import RedirectResponse



router = APIRouter()


@router.post('/image', response_model=Dict[str, str])
async def describe_image(file: bytes = Body(), content_type_aux: Optional[str] = Header(...), region: Optional[str] = Header(...)):
    return await get_image_description(file, content_type_aux, region)

@router.post('/audio-image')
async def audio_image(file: bytes = Body(), content_type_aux: Optional[str] = Header(...), region: Optional[str] = Header(...)):
    text = await get_image_description(file, content_type_aux, region)
    audio = await generate_speech_from_text(text.get('data'), region)
    file_name = await save_audio(audio)
    return RedirectResponse(f'http://localhost:8000/static/mp3/{file_name}')
