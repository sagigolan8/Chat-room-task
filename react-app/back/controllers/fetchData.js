const { EventEmitter } = require("events");

const emitter = new EventEmitter();
const MESSAGES = []
const USERS = []
exports.fetchData = (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
    });
    const { username } = req.params;
    USERS.push(username)

    const returnUsers = () => {
        res.write(`data:${JSON.stringify({ USERS, MESSAGES })}\n\n`);
    };
    const loginMessage = () => {
        MESSAGES.push({ message: `${username} has entered the chat`, time: Date(Date.now()).slice(0, 24), username: 'System' })
    }
    emitter.on("message", function () {
        res.write(`data:${JSON.stringify({ MESSAGES, USERS })}\n\n`);
    });

    emitter.addListener("logout", returnUsers);

    const a = () => {
        returnUsers();
        loginMessage();
        emitter.removeListener('login', a)
    }

    emitter.on(`login`, a);

    emitter.emit(`login`);

    emitter.emit("message");


    req.on("close", function () {
        MESSAGES.push({ message: `${username} has left the chat`, time: Date(Date.now()).slice(0, 24), username: 'System' })
        USERS.splice(USERS.indexOf(username), 1)
        emitter.emit("logout");
    });
};

exports.addMessage = (message, username) => {
    MESSAGES.push({ message, time: Date(Date.now()).slice(0, 24), username })
    emitter.emit("message");
}
