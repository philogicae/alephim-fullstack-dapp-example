from fastapi import APIRouter
from libertai import call_ai_safely
from pydantic import BaseModel, Field
from time import time

router = APIRouter()


class Completion(BaseModel):
    prompt: str = Field(..., description="User prompt")


@router.get("/hello", tags=["hello"])
async def hello():
    return "Hello world!"


@router.get("/user/{username}", tags=["user"])
async def read_user(username: str):
    return {"username": username, "timestamp": time()}


@router.post("/completion", tags=["completion"])
async def completion(request: Completion):
    text, time = call_ai_safely(request.prompt)
    return {"text": text, "time": f"{time:.2f}s"}
