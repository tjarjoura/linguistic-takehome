import json
FILE_SIZE = 1024 * 99 # 99KB

body = 'A' * FILE_SIZE
data = {
        "query": f"mutation {{ addDocument(userId:2, body:\"{body}\", title:\"big file\") {{title}}  }}"
}

print(json.dumps(data))
