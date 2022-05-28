from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import Field, BaseModel
from bson.objectid import ObjectId


client = AsyncIOMotorClient('mongodb+srv://jojo:batata@testmongo.0q7d6.mongodb.net/?retryWrites=true&w=majority')
db = client.statistics


async def insert_tag(tag: str, region: str):
    await db.tags.insert_one({"name": tag, "region": region})


async def insert_speech(speech: str, region: str):
    await db.speeches.insert_one({"name": speech, "region": region})


async def insert_text(text: str, region: str):
    await db.texts.insert_one({"name": text, "region": region})


async def get_tags():
    return await db.tags.find().to_list(1000)


async def get_speeches():
    return await db.speeches.find().to_list(1000)


async def get_texts():
    return await db.texts.find().to_list(1000)


class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")


class RespMongo(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str = Field(...)
    region: str = Field(...)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
