from fastapi import APIRouter
from typing import List

from ..controllers.statistics import get_speeches, get_tags, get_texts, RespMongo


router = APIRouter()


@router.get('/speeches', response_model=List[RespMongo])
async def get_speeches_route():
    return await get_speeches()


@router.get('/tags', response_model=List[RespMongo])
async def get_tags_route():
    return await get_tags()


@router.get('/texts', response_model=List[RespMongo])
async def get_texts_route():
    return await get_texts()
