# I don't know what the working directory will be when running this, so I might as well try all of them
try:
    from server.api_calls.imgflip_api import imgflip_api
    from server.api_calls.wolfram_api import wolfram_api
except:
    try:
        from api_calls.imgflip_api import imgflip_api
        from api_calls.wolfram_api import wolfram_api
    except:
        from imgflip_api import imgflip_api
        from wolfram_api import wolfram_api


def generate_meme_from_question(question: str, answer: str = "") -> str:
    """
    :param question: The question you would like to ask wolfram alpha
    :param answer (OPTIONAL): The answer to the question you have asked. You can leave the answer empty if you want wolfram alpha to answer the question
    :return: the url for the meme generated
    """

    if answer == "":
        answer = wolfram_api.ask_short_answer("", question)

    return imgflip_api.generate_meme_url(question=question,
                                         answer=answer)
