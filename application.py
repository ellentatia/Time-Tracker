from flask import Flask, render_template


application = Flask(_name_)


@application.route('/')
def main():
    return render_template('index.html')
