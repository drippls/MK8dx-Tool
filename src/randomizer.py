from random import randint
import json

class KartStructure():

    def __init__(self):
        # Need this for glitch.com, but doesn't work on localhost
        # with open('./src/data.json') as f:
        # Need this to run the flask server on my computer
        with open('data.json') as f:
            data = json.load(f)
        self.character = [i['name'] for i in data['part_dict']['char']]
        self.body = [i['name'] for i in data['part_dict']['body']]
        self.glider = [i['name'] for i in data['part_dict']['glider']]
        self.tire = [i['name'] for i in data['part_dict']['tire']]
        self.setup = []
        self.kartcode = None

    def generate_setup(self):
        char = self.character[randint(0, len(self.character) - 1)]
        body = self.body[randint(0, len(self.body) - 1)]
        glider = self.glider[randint(0, len(self.glider) - 1)]
        tire = self.tire[randint(0, len(self.tire) - 1)]
        self.setup = [char, body, glider, tire]
        return self.setup

    def generate_code(self):
        character = str(self.character.index(self.setup[0]))
        body = str(self.body.index(self.setup[1]))
        glider = str(self.glider.index(self.setup[2]))
        tire = str(self.tire.index(self.setup[3]))
        self.kartcode = '.'.join([character, body, glider, tire])
        return self.kartcode

# example = KartStructure()
# setup = example.generate_setup()
# code = example.generate_code()
