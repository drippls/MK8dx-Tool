from flask import Flask, render_template, url_for, redirect, request
from randomizer import KartStructure


app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/random')
def random():
    return render_template('random.html')

@app.route('/random_build', methods=['POST'])
def random_build():
    setup = KartStructure()
    names = setup.generate_setup()
    code = setup.generate_code()
    return render_template('random.html', character=names[0], kart=names[1], tires=names[2], glider=names[3], code=code)

@app.route('/builder')
def builder():
    return render_template('builder.html')

@app.route('/stats')
def stats():
    return render_template('stats.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)
