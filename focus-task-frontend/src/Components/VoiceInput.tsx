import { useState } from 'react'

export function VoiceInput({onTaskSubmit}: {onTaskSubmit: (text: string) => void}){
     const [transcript, setTranscript] = useState('');

     const startListening = () => {
          const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
          if (!SpeechRecognition) {
               alert('Speech Recognition not supported');
               return;
          }

          const recognition = new SpeechRecognition();
          recognition.continuous = false;
          recognition.lang = "en-US";
          recognition.interimResults = false;
          recognition.maxAlternatives = 1;

          recognition.onresult = (event: SpeechRecognitionEvent) => {
               const text = Array.from(event.results)
                    .map((result) => result[0].transcript)
                    .join('');
               setTranscript(text);
          };
          recognition.start();
     }

     return(
          <div className=' rounded-lg shadow'>
               <input
                    type='text'
                    value={transcript}
                    onChange={(event) => setTranscript(event.target.value)}
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
