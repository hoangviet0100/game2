// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    arrQuestion: cc.Sprite[] = []

    @property(cc.Sprite)
    arrAnswer: cc.Sprite[] = []

    Data = {
        "data": {
            "lessonId": "057e88c1-af50-46e9-9ea1-a3020db98139",
            "lessonName": "test bai hoc",
            "gameSetting": null,
            "items": [
                {
                    "name": "item new",
                    "description": null,
                    "status": 1,
                    "createdDate": "2022-05-06T17:43:00.903221",
                    "updatedDate": "2022-05-09T02:45:20.684252",
                    "itemGroupId": "00000000-0000-0000-0000-000000000000",
                    "jsonData": {
                        "IdItem": "bd82eb39-a5e4-40ca-8651-fbfc724f4045",
                        "Title": "Nối các đáp án đúng với nhau",
                        "question": [
                            {
                                "Image": "./img/bg_answer1.png",
                                "Index": 0,
                            },

                            {
                                "Image": "./img/bg_answer2.png",
                                "Index": 0,
                            },

                        
                        ],
                        "answer": [
                            {
                                "Image": "./img/bg_q1.png",
                                "Sound": "",
                                "IsCorrect": false
                            },
                            {
                                "Image": "./img/bg_q2.png",
                                "Sound": "",
                                "IsCorrect": true
                            },
                            {
                                "Image": "./img/bg_q3.png",
                                "Sound": "",
                                "IsCorrect": false
                            },
                            {
                                "Image": "./img/bg_q4.png",
                                "Sound": "",
                                "IsCorrect": false
                            }
                        ]
                    },
                    "properties": null,
                    "gameId": "3b19a28a-1675-4aee-8977-b544ddc8eb15",
                    "id": "d9a4a42c-c62f-4dd8-a552-6b7a6c7794c4"
                },
            ]
        },
        "success": true,
        "message": null
    }

    // LIFE-CYCLE CALLBACKS:

     onLoad () {}

    start () {

    }
    // update (dt) {}
}
