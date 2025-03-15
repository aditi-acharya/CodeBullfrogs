from flask import Flask, send_from_directory
import os

app = Flask(__name__)

@app.route('/version.txt')
def get_version():
    return send_from_directory(os.getcwd(), 'version.txt')

@app.route('/downloads/status.json')
def get_status():
    return send_from_directory(os.getcwd(), 'downloads/status.json')

if __name__ == '__main__':
    app.run(debug=True)
