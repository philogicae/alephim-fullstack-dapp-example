from requests import post
from codetiming import Timer

MODEL_7B = "https://curated.aleph.cloud/vm/a8b6d895cfe757d4bc5db9ba30675b5031fe3189a99a14f13d5210c473220caf/completion"

PARAMS = dict(
    temperature=0.8,
    top_k=40,
    top_p=0.9,
    n_predict=-1,
    repeat_penalty=1.01,
    repeat_last_n=0.01,
    slot_id=-1,
    cache_prompt=False,
    use_default_badwordsids=False,
    stop=[
        "\n<|",
        "\nuser:",
    ],
)

SAFE_PROMPT = lambda prompt: dict(
    prompt=f"<|im_start|>\nsystem:\nYou are a helpful AI assistant hired to answer to users questions. If the question is inappropriate or offensive, you only reply by informing the user you refuse to answer the question. Your answers are concise and formatted using markdown.\n<|im_end|>\n<|im_start|>\nuser:\n{prompt}\n<|im_end|>\n<|im_start|>\nsystem:\n"
)


def call_ai_safely(prompt):
    timer = Timer()
    timer.start()
    try:
        response = post(
            MODEL_7B,
            json=PARAMS | SAFE_PROMPT(prompt),
            timeout=60,
        )
        response.raise_for_status()
        json_response = response.json()
        if "content" in json_response:
            return json_response["content"], timer.stop()
    except:
        pass
    return "Unexpected error", timer.stop()
