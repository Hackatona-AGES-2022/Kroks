from fastapi import FastAPI
from . import images
from . import audio

def create_app():
    app = FastAPI()
    app.include_router(images.router)
    app.include_router(audio.router)
    return app
    
