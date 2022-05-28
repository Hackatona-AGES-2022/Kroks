from fastapi import UploadFile
import requests

from .statistics import insert_tag, insert_text
from ..settings import SETTINGS


async def get_image_description(file: bytes, content_type: str, region: str):
    res = requests.post(
        SETTINGS.image_url, 
        data=file,
        headers={
            "Ocp-Apim-Subscription-Key": SETTINGS.image_key, 
            "Content-Type": content_type
        }
    )
    description = res.json().get("description")
    
    tags = description.get('tags')
    for tag in tags:
        await insert_tag(tag, region)

    text = description.get('captions')[0].get('text')
    await insert_text(text, region)

    return {'data': text}
