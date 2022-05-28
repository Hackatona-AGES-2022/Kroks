import json
import requests
from urllib.request import Request 
from urllib import request 
import random
import pathlib

from ..settings import SETTINGS

mp3_root = pathlib.Path(__file__).parents[2] /'static'/'mp3'


async def generate_text_from_speech(file: bytes, region: str):
    req = Request(SETTINGS.speech_to_text_url, file, {"Ocp-Apim-Subscription-Key": SETTINGS.speech_key, 'Content-Type': 'audio/wav'})
    res = request.urlopen(req)
    return json.loads(res.read().decode()).get("DisplayText")


async def generate_speech_from_text(text: str, region: str):
    input_data = f"""
    <speak version='1.0' xml:lang='pt-BR'>
        <voice xml:lang='pt-BR' xml:gender='Female' name='pt-BR-FranciscaNeural'>
            {text}
        </voice>
    </speak>
    """

    res = requests.post(
        SETTINGS.text_to_speech_url,
        data=input_data,
        headers={
            "Ocp-Apim-Subscription-Key": SETTINGS.speech_key,
            "X-Microsoft-OutputFormat": "audio-16khz-128kbitrate-mono-mp3",
            "Content-Type": "application/ssml+xml"
        }
    )
    open('frit.mp3', 'wb').write(res.content)

    return res.content

async def save_audio(audio):
    file_name = f'file_{random.random()}.mp3'
    with open(mp3_root/file_name, 'wb') as f:
        f.write(audio)
    return file_name
