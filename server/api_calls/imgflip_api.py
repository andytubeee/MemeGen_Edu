

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
    def get_random_meme(attribute_to_filter_by = "box_count", amount = 2) -> Dict:
        # meme_id is optional. If nothing is specified, the function will just get a random id
        meme_response = requests.get("https://api.imgflip.com/get_memes")
        json_memes = meme_response.json()
        if not json_memes["success"]:
            # Either their server is down, or there's a problem with ours. Let's hope for the former
            return {}

        meme_list = json_memes["data"]["memes"]
        meme_list = imgflip_api.filter_meme_list(meme_list, attribute_to_filter_by, amount)  # only gets memes with 2 boxes

        random_meme_object = meme_list[randint(0, len(meme_list))]  # picking a random meme object
        return random_meme_object
    @staticmethod
    def generate_meme_template(text, meme_id = None):

        username, password = "", ""

        if meme_id is None:

            random_meme_object = imgflip_api.get_random_meme()
            if random_meme_object == {}:
                return "" # maybe a better thing to return here might be an error message

            meme_id = random_meme_object["id"]
            return random_meme_object
        parameters = {
            "username": username,
            "password": password,

        }

if __name__ == '__main__':
    print(imgflip_api.generate_meme_template("asdf"))