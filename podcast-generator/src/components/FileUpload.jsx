import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <label htmlFor="file">Upload Podcast Audio:</label><br></br>
      <input
        type="file"
        id="file"
        onChange={handleFileChange}
      />
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
};

export default FileUpload;
