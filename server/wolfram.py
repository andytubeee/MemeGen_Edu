
import requests

class wolfram_api():
    """Class to easily send api requests to wolfram"""
    @staticmethod
    def ask_short_answer(APP_ID, question: str):
        """
        :param APP_ID: A string that is your app id
        :param question: A string which is the question you would like to ask
        :return: The api's response
        """

        url = "https://api.wolframalpha.com/v1/result"
        parameters = {"i": question, "appid": APP_ID}
        response = requests.get(url, params = parameters)

        return response
if __name__ == '__main__':
    APP_ID = "" #some app id


    #how to make an api call:
    response = wolfram_api.ask_short_answer(APP_ID, "How big is the universe?")
    print(response.text)