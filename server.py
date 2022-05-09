import time
import random
from flask import Flask, request, jsonify

app = Flask(__name__)

users = []
for i in range(5):
  users.append({"id": i, "name": "Username %s" % i})

@app.route('/', methods=['GET'])
def upload():
  if request.method == 'GET':
    time.sleep(random.randint(2, 7))
    secrectkey = request.args.get('secrectkey')
    return jsonify({"data": users, "secrectkey": secrectkey})

if __name__ == '__main__':
  app.run(host='192.168.0.46')