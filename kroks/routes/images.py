from re import I
from fastapi import APIRouter, Body

from ..controllers.images import get_image_description


router = APIRouter()


@router.post('/image')
def describe_image(file: bytes = Body()):
    return get_image_description(file)
