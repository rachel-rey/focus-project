import axios from 'axios';
import { useState } from 'react'

export function VoiceInput({onTaskSubmit}: {onTaskSubmit: (text: string) => void}){
     const [listening, setIsListening] = useState(false);
     const [transcript, setTranscript] = useState('');

     const startListening = () => {
          const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
          const SpeechRecognitionEvent = (window as any).SpeechRecognitionEvent || (window as any).webkitSpeechRecognitionEvent;
          if (!SpeechRecognition) {
               alert('Speech Recognition not supported');
          return;
    }
   
          const recognition = new SpeechRecognition();
          recognition.continuous = false;
          recognition.lang = "en-US";
          recognition.interimResults = false;
          recognition.maxAlternatives = 1;

          recognition.start();
          setIsListening(true);
          recognition.onresult = (event: SpeechRecognitionEvent) => {
               const text = Array.from(event.results)
               .map((result) => result[0].transcript)
               .join('');
               setTranscript(text);
          };
          recognition.onend = () => setIsListening(false);
          console.log("Finished listening");
     }

     return(
          <div className=' rounded-lg shadow'>
          <input
               type='text'
               value={transcript}
               placeholder='Type a task or Speak Task'
               className='p-1 border border-emerald-900 rounded mb-2'
               />
          <button
               onClick={startListening} 
               className="p-1 bg-emerald-900 hover:bg-emerald-950 text-white rounded"
          >
               Speak Task
          </button>
          </div>
     )
}