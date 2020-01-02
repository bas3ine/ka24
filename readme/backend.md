## How to request

#### Get Question Topic
HTTP Request Methods:GET

Path
```
http://{URL}:{port}/showquestion
```

Request
```JSON


```

Response
```JSON
{
    "questionName":"only 3333",
    "user":{

    }
}

```

#### Add Question
HTTP Request Methods:POST

Path
```
http://{URL}:{port}/addquestion
```

Request
```JSON
{
    "ch1":"2",
    "ch2":"9",
    "ch3":"6",
    "ch4":"7",
    "answer":24,
    "question_list_id":1
}

```

Response
```JSON
{
    "message": "Add Question Success"
}

```