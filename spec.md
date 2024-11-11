# PodcastAI Creator Technical Specification
Version 1.0

## Core Technical Requirements

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
```javascript
// Core dependencies
"react": "^18.0.0"
"react-dom": "^18.0.0"

// Optional styling frameworks
- Any CSS framework of choice
- CSS modules support
```

#### Backend
```javascript
// Core dependencies
"express": "^4.18.0"
"@google/generative-ai": "latest"
"multer": "^1.4.5-lts.1"
"cors": "^2.8.5"
"dotenv": "^16.0.0"

// Audio processing (if using Express)
"ffmpeg-static": "^5.0.0"
"fluent-ffmpeg": "^2.1.2"
```

## File Structure
```
project/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── AudioControls.jsx
│   │   │   └── PodcastPlayer.jsx
│   │   ├── hooks/
│   │   │   └── useAudioPlayback.js
│   │   ├── utils/
│   │   │   └── audioHelpers.js
│   │   └── App.jsx
│   └── public/
│       └── audio/
│           └── pod.m4a
└── server/
    ├── routes/
    │   └── podcastRoutes.js
    ├── utils/
    │   ├── audioProcessing.js
    │   └── promptGenerator.js
    ├── middleware/
    │   └── errorHandler.js
    └── app.js
```

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
- Two-person dialogue structure
- Consistent speaker identification
- Time duration guidance
- Content enhancement requirements

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
- File upload with drag-and-drop support
- Textarea for transcript input

### Playback Interface
- Play/Stop button
- Speed control slider (0.5x - 2.0x)
- Visual script display
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
- Server-side error middleware
- Graceful fallbacks
- User-friendly error messages
- File cleanup on error

## Additional Considerations
- Cross-browser compatibility
- Performance optimization
- Memory management
- File cleanup
- Security best practices
- Rate limiting consideration
- Error logging