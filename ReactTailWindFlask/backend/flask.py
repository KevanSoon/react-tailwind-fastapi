from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/api/chart-data')
def get_data():
    data = [
        {"name": "Jan", "Returning": 275, "New": 41},
        {"name": "Feb", "Returning": 620, "New": 96},
        {"name": "Mar", "Returning": 202, "New": 192},
        {"name": "Apr", "Returning": 500, "New": 50},
        {"name": "May", "Returning": 355, "New": 500},
        {"name": "Jun", "Returning": 875, "New": 200},
        {"name": "Jul", "Returning": 700, "New": 205},
    ]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
