from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware

from . import images
from . import audio
from . import statistics


def create_app():
    app = FastAPI()

    app.add_middleware(CORSMiddleware, 
        allow_origins=['*'],
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*'],
    )

    app.include_router(images.router)
    app.include_router(audio.router)
    app.include_router(statistics.router)
    app.mount("/static", StaticFiles(directory="static"), name="static")
    
    return app
