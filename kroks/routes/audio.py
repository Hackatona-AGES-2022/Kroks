from fastapi import APIRouter, File

router = APIRouter()

@router.post('/audio')
def transcribe_audio(file: bytes = File()):
    pass
