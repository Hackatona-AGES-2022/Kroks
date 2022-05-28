from typing import Dict, Optional
from fastapi import APIRouter, Header, Body 

from ..controllers.images import get_image_description


router = APIRouter()


@router.post('/image', response_model=Dict[str, str])
async def describe_image(file: bytes = Body(), content_type_aux: Optional[str] = Header(...), region: Optional[str] = Header(...)):
    a = await get_image_description(file, content_type_aux, region)
    print(a)
    return a
