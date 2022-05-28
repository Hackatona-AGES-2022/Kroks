import requests

from ..settings import SETTINGS


def generate_text_from_speech(file: bytes):
    res = requests.post(
        SETTINGS.speech_to_text_url,
        data=file,
        headers={
            "Ocp-Apim-Subscription-Key": SETTINGS.speech_key,
            "Content-Type": "audio/wav"
        }
    )

    print(res.json())

    return res.json()



def generate_speech_from_text(text: str):
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

    print(res.json())

    return res.json()
