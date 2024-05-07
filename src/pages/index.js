import ChatBotContainer from 'src/Components/ChatBotContainer/ChatBotContainer';

export default function Home() {
    return (
        <div className="rounded-top justify-content-center ">
            {/*
                <div className="p-2 px-3 rounded-top bg-dark ">
                    <p className="text-white mb-0 content-center">Chatbot</p>
                </div>
    */}
            <ChatBotContainer />
        </div>
    );
}
