import React, { useState } from 'react';

const TranscriptInput = () => {
  const [transcript, setTranscript] = useState('');

  const handleTranscriptChange = (event) => {
    setTranscript(event.target.value);
  };

  return (
    <div>
      <label htmlFor="transcript">Podcast Transcript:</label><br></br>
      <textarea
        id="transcript"
        value={transcript}
        onChange={handleTranscriptChange}
        rows={10}
        cols={50}
      />
    </div>
  );
};

export default TranscriptInput;
