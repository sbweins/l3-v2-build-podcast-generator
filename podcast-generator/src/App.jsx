import React, { useState } from 'react';
import TranscriptInput from './components/TranscriptInput';
import FileUpload from './components/FileUpload';
import './App.css';

const App = () => {
  const [transcript, setTranscript] = useState('');
  const [audioFile, setAudioFile] = useState(null);

  const handleTranscriptChange = (newTranscript) => {
    setTranscript(newTranscript);
  };

  const handleFileChange = (newFile) => {
    setAudioFile(newFile);
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <header className="text-center my-4">
        <h1>Podcast Generator</h1>
      </header>
      <main className="w-100">
        <TranscriptInput onTranscriptChange={handleTranscriptChange} />
        <br></br>
        <FileUpload onFileChange={handleFileChange} />
        
      </main>
      <footer className="text-center my-4">
        <p>&copy; 2023 Podcast Generator</p>
      </footer>
    </div>
  );
};

export default App;
