import requests
from random import randint
from typing import List, Dict


class imgflip_api():

    @staticmethod
    def filter_meme_list(meme_list: List, attribute: str, amount: int) -> List[Dict]:
        new_meme_list = []
        for meme_obj in meme_list:
            if meme_obj[attribute] == amount:
                new_meme_list.append(meme_obj)

        return new_meme_list

    @staticmethod
    def get_random_meme(attribute_to_filter_by="box_count", amount=2) -> Dict:
        """
        # meme_id is optional. If nothing is specified, the function will just get a random id
        meme_response = requests.get("https://api.imgflip.com/get_memes")
        json_memes = meme_response.json()
        if not json_memes["success"]:
            # Either their server is down, or there's a problem with ours. Let's hope for the former
            return {}
        meme_list = json_memes["data"]["memes"]
        """

        #instead of just picking a random id, it now picks from a list of specially curated meme ids
        meme_list = ['181913649', '438680', '188390779', '4087833', '102156234', '252600902', '148909805',
                     '178591752', '91538330', '101470', '27813981', '89370399', '123999232', '21735', '101288',
                     '84341851', '14371066', '91545132', '61585', '4173692', '8279814', '163573', '1367068',
                     '101511', '61580', '16464531', '444501', '142921050', '89655', '71428573', '132769734',
                     '101716', '61533', '183518946', '21604248', '309672119',

                     #exception cases where you need to swap answer and question:
                     '217743513', '222403160', '119139145', '216951317']

        meme_list = imgflip_api.filter_meme_list(
            meme_list, attribute_to_filter_by, amount)  # only gets memes with 2 boxes

        # picking a random meme object
        random_meme_object = meme_list[randint(0, len(meme_list) - 1)]
        return random_meme_object

    @staticmethod
    def generate_meme_url(question, answer, username, password, meme_id=None):

        # username, password = "", ""

        if meme_id is None:
            # No meme id was specified, generate a random one for the user (This will almost always be the case)
            random_meme_object = imgflip_api.get_random_meme()
            if random_meme_object == {}:
                return ""  # maybe a better thing to return here might be an error message
            # setting the meme_id to the randomly generated meme
            meme_id = random_meme_object["id"]

        exception_cases = {'217743513', '222403160', '119139145', '216951317'}
        if meme_id in exception_cases:
            question, answer = answer, question
        parameters = {
            "username": username,
            "password": password,
            "template_id": meme_id,
            "text0": question,  # fills the first box for the meme
            "text1": answer,  # fills the second box for the meme

        }

        meme_response = requests.post(
            "https://api.imgflip.com/caption_image", params=parameters).json()

        parameters.pop("text1")
        unanswered_meme_response = requests.post(
            "https://api.imgflip.com/caption_image", params=parameters).json()

        if not meme_response["success"] and unanswered_meme_response["success"]:
            # again, there either was an issue on their end or on our end
            return ""

        return (meme_response["data"]["url"], unanswered_meme_response["data"]["url"])


if __name__ == '__main__':
    pass
