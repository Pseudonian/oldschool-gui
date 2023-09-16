from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

WATSON_URL = "https://api.us-south.assistant.watson.cloud.ibm.com/instances/382e3d60-0eef-4432-8c47-5eb5eafc7a1d"
WATSON_API_KEY = "c82alfTM5WCRTUisLl9defUkjZRiUwMen57txkT8e-au"

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/message', methods=['POST'])
def handle_message():
    user_message = request.json.get('message', '')
    
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {WATSON_API_KEY}'
    }
    
    data = {
        'input': {
            'message_type': 'text',
            'text': user_message
        }
    }
    
    response = requests.post(WATSON_URL, headers=headers, json=data)
    
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'Failed to get response from Watson Assistant'}), 500
    
if __name__ == "__main__":
    app.run(port=5000)
