# PodcastAI Creator Technical Specification
Version 1.0

## Core Technical Requirements


### Video Examples of Podcast Creation by Team Members

- [Basic Example](https://drive.google.com/file/d/1PDMKCN6fN9kXRiJNHU7NPRcgtx8suFOr/view?usp=sharing) - Tier 1
- [Advanced Example](https://drive.google.com/file/d/1hTsY5rQC324xqHq92Mky4g-_EdYPSHWL/view?usp=sharing) - Tier 2 (when you click `Play Podcast` the podcast voices must generate with ElevenLabs API, so give it time to load )

## User Flow

If you want to see the user flow for this project to envision your building process or understand the user experience, please refer to the [user-flow.md](user-flow.md) file.

### Frontend (React)

- Single Page Application using React (18.0+)
- Required hooks: useState, useRef, useEffect
- Clean component architecture
- Client-side file validation for audio uploads
- Audio playback controls:
  - Play/Stop functionality
  - Speed control (0.5x to 2.0x)
  - Progress tracking
- Audio file format validation
- Responsive design supporting both mobile and desktop views
- Loading states and error handling
- Voice synthesis using Web Speech API:
  - Multiple voice selection
  - Rate control
  - Pitch adjustment

### Backend (Express/Python)

- RESTful API architecture
- Two primary POST routes:
  - `/api/generate-podcast`: Audio file processing
  - `/api/generate-from-transcript`: Text processing
- Error handling middleware
- CORS configuration
- Static file serving
- Environment variable management
- File compression and processing

### Required Libraries

#### Frontend
- React
- React-dom
- Any CSS framework of choice
- CSS modules support


#### Backend Packages
- express
- google-generative-ai
- multer (optional)
- cors
- dotenv
- ffmpeg-static (optional)
- fluent-ffmpeg (optional)


## API Endpoints

### 1. Generate Podcast from Audio
```javascript
POST /api/generate-podcast
Content-Type: multipart/form-data

Request:
- audio: File (audio/*)

Response:
{
  success: boolean,
  scriptUrl: string,
  script: string,
  segments: [
    {
      speaker: string,
      text: string
    }
  ]
}
```

### 2. Generate from Transcript
```javascript
POST /api/generate-from-transcript
Content-Type: application/json

Request:
{
  transcript: string
}

Response:
{
  success: boolean,
  script: string,
  segments: [
    {
      speaker: string,
      text: string
    }
  ]
}
```

## AI Integration

### Gemini AI Configuration
```javascript
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    temperature: 0.5,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 5500,
  }
});
```

### Prompt Engineering
- Strategic prompting with clear format requirements
- One or two-person dialogue structure
- Consistent speaker identification
- Time duration guidance
- Content enhancement requirements
- Example output for generated script

## Audio Processing

### Compression Settings
```javascript
const compressionOptions = {
  sampleRate: 16000,
  bitRate: '96k',
  channels: 1,
  codec: 'libmp3lame'
}
```

### Directory Management
- Auto-creation of required directories:
  - uploads/
  - generated/
  - compressed/

## UI Requirements

### Input Methods
- Toggle between audio upload and transcript input
- File upload support
- Textarea for transcript input
- Script display area for generated podcast script

### Playback Interface
- Play/Stop button
- Speed control slider (0.5x - 2.0x)
- Speaker identification
- Loading indicator during generation

### Styling Requirements
- Responsive design (mobile-first)
- Clear visual hierarchy
- Interactive elements feedback
- Loading states
- Error state handling

## Error Handling
- Client-side validation
- Server-side error handling
- Graceful fallbacks
- User-friendly error messages
- File cleanup on error

## Optional Additions

If you want to see the optional additions that programmers could implement, please refer to the [optional-additions.md](optional-additions.md) file.

## Resources
- [React Web Speech to Text Player Demo](https://github.com/jdrichards-pursuit/text-to-speech-demo-react)
- [Google Gemini API - Audio ](https://ai.google.dev/gemini-api/docs/audio?lang=node)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Multer](https://github.com/expressjs/multer) - file uploads
- [Ffmpeg Static](https://www.npmjs.com/package/ffmpeg-static) - audio compression
- [Fluent Ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg) - audio compression
- [Prompt Engineering Guide](https://www.promptingguide.ai/)


[Back to Home](README.md)
[User Flow](user-flow.md)
