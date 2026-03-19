```javascript
const API = "http://163.176.222.114:8081";
const TOKEN = "6962869d452ff246990161cd178e2c29";

function createUser() {
    fetch(API, {
        method: "POST",
        body: JSON.stringify({
            action: "add_user",
            user: document.getElementById("user").value,
            pass: document.getElementById("pass").value,
            limit: parseInt(document.getElementById("limit").value),
            token: TOKEN
        })
    })
    .then(res => res.text())
    .then(data => alert(data));
}

function getOnline() {
    fetch(API, {
        method: "POST",
        body: JSON.stringify({
            action: "online",
            token: TOKEN
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("online").innerText = data.online;
    });
}

function listUsers() {
    fetch(API, {
        method: "POST",
        body: JSON.stringify({
            action: "list_users",
            token: TOKEN
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("users").innerText = data.users;
    });
}

function deleteUser() {
    fetch(API, {
        method: "POST",
        body: JSON.stringify({
            action: "del_user",
            user: document.getElementById("deluser").value,
            token: TOKEN
        })
    })
    .then(res => res.text())
    .then(data => alert(data));
}
```
