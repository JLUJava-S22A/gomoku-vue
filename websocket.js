function test() {
    user_status = {
        "id": "1",
        "name": "Merlyn",
        "token": "123456789",
        "score": 0,
    };
    client_status = {
        "user": user_status,
        "peer": "2",
        "status": "online",
        "session": "",
    };

    var ws = new WebSocket("ws://localhost:8080/");
    ws.onopen = function () {
        ws.send(JSON.stringify(client_status));
    }
    ws.onmessage = function (evt) {
        console.log(evt.data);
    }
}