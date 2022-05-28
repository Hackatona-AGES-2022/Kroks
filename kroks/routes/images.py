from fastapi import APIRouter, File

router = APIRouter()

@router.post('/images')
def describe_images(file: bytes = File()):
    return {'description': 'a group of zebras and a giraffe standing on a dirt road'}

@router.post('/image')
def describe_image(file: bytes = File()):
    pass
