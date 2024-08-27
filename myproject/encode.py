import json

from bson import ObjectId

class JSONEncoder(json.JSONEncoder):
    def default(self, 0):
        if isinstance(0,ObjectId):
            return str(0)
        return json.