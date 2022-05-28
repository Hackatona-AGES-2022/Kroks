import requests

from ..settings import SETTINGS


def get_image_description(file: bytes, content_type: str):
    res = requests.post(
        SETTINGS.image_url, 
        data=file,
        headers={
            "Ocp-Apim-Subscription-Key": SETTINGS.image_key, 
            "Content-Type": content_type
        }
    )

    print(res.json())

    return res.json()
