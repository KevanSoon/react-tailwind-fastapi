import React, { useState } from 'react'
import Introduction from './Introduction'
import TextArea from './TextArea'
import Chatbox from './Chatbox';
import Loading from './Loading';
import TypingDiv from './TypingDiv';





const Chatbot = () => {
    //state to control which component to display
    const [showNewComponent, setShowNewComponent] = useState(false);
    const [showResult, setResult] = useState(false);
    const [textInput, setTextInput] = useState('');
    const [response, setResponse] = useState("");
    
    const handleButtonClick = async (text: string) => {
        //set the input text and toggle the componenet visibility
        setTextInput(text);
        setShowNewComponent(true);
        setResult(false)

        try {
            const res = await fetch('http://localhost:8000/process_text', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({text}),
            });
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setResult(true);
            setResponse(data.result);
        } catch (error) {
            setResult(true);
            console.error('Error',error);
            setResponse('An error occurred while contacting the server');
        } 
    }

    return   <div className="flex flex-col items-center justify-center h-screen w-full">
        <div className="w-full max-w-[700px] overflow-y-auto p-4">
            {showNewComponent && <Chatbox text={textInput}></Chatbox>}
            {showNewComponent && showResult && <TypingDiv text={response} typingSpeed={20} />}
            {showNewComponent && !showResult && <Loading></Loading>}
        </div>
        {!showNewComponent && <Introduction></Introduction>}
        <TextArea onButtonClick={handleButtonClick}></TextArea>
    </div>
}

export default Chatbot
