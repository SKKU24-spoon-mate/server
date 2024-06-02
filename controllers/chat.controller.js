const Chat = require('../models/chat.model');


exports.getMessage = async(req, res) => {
    try{
        const id = req.params.id;

        const chats_from = await Chat.find({"to":id});
        const chats_to = await Chat.find({"from":id});
        
        const chat_all = chats_from.concat(chats_to).sort((a,b) => {
            return new Date(a.createdAt) - new Date(b.createdAt);
        });
        res.status(200).json(chat_all);

    }catch(error) {
        res.status(404).json({message: "Invalid user name"});
    }
};

exports.addMessage = async(req, res) => {
    try{
        const new_message = await Chat.create(req.body);
        res.status(200).json(new_message);

    }catch(error) {
        res.status(500).json({message: "Internal server error"});
    }
};


