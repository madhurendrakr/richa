import React, { useEffect, useState } from "react";
import { messages_data } from "../data/messages_demo";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  useEffect(() => {
    setMessages(messages_data);
  }, messages_data);

  const addMessage = (message) => {
    console.log(new Date().getMilliseconds);
    const temp = {
      id: new Date().getTime(),
      sender: "Alice",
      message: message,
      timestamp: new Date().getTime(),
    };
    setMessages([...messages, temp]);
    setInputMessage("");
  };
  return (
    <>
      <div className="mx-auto content-center flex relative h-[40rem] w-[25rem] flex-col  bg-red-300 rounded-md">
        <div className="ml-2">
          {messages.map((message) => (
            <div key={message.id} className="flex justify-start my-2">
              <div className="rounded-lg p-2 bg-gray-200 max-w-md">
                <div className="text-xs text-gray-600 mt-1 font-bold">
                  {message.sender}
                </div>
                <p className="text-sm ">{message.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" w-[25rem] flex absolute bottom-0 items-center py-2 px-4 bg-gray-100 rounded-xl">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full px-3 py-2 mr-2 bg-gray-200 rounded-xl focus:outline-none "
          />
          <button
            onClick={() => addMessage(inputMessage)}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatScreen;
