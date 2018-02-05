let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body;

        messages.push({id, text, time});
        id++;
        res.status(200).send(messages);
    },

    read: (req, res) => {
        res.status(200).send(messages);
    },

    update: (req, res) => {
        const updateID = req.params.id;
        const { text } = req.body;
        const messageIndex = messages.findIndex(message => messages.id == req.params.id);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: message.text,
            time: message.time
        };
        res.status(200).send(messages);
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        messageIndex = messages.findIndex(message => message.id == deleteID);

        messages.splice(messageIndex, 1);

        res.status(200).send(messages);
    }
};