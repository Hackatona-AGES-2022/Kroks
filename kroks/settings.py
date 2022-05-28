from pydantic import BaseSettings


class Settings(BaseSettings):
    image_url: str
    text_to_speech_url: str
    speech_to_text_url: str
    image_key: str
    speech_key: str

    class Config:
        env_file = ".env"


SETTINGS = Settings()
