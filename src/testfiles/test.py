import json

with open('../data.json') as f:
    data = json.load(f)
characters = [i for i in data['part_dict']['char']]
statAttributes= ['acc', 'hda', 'hdg', 'hdw', 'hdy', 'mtb', 'spg', 'spr', 'spy', 'wgt']
for i in characters:
    print(i['name'] + ':')
    for j in statAttributes:
        print(i[j])

# {'acc': 2, 'group': 'groupcharmario', 'hda': 4, 'hdg': 4, 'hdw': 4, 'hdy': 4, 'id': 'charmario', 'isd': 0, 'mtb': 2, 'name': 'Mario', 'spg': 6, 'spr': 6, 'spw': 6, 'spy': 6, 'ttm': 2, 'ttr': 4, 'type': 'char', 'wgt': 6}
