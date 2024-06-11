import { createChatBotMessage } from "react-chatbot-kit";
const botName = 'Test bot';
export const config = {
    initialMessages: [createChatBotMessage(`Hey there! I'm ${botName}`)],
    botName: botName,
};
