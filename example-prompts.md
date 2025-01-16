# Example Prompts for AI-Assisted Development

This guide provides example prompts for each session of the PodcastAI Creator project. Remember to be specific, provide context, and iterate on responses.

## Session 1 - Planning Prompts

### Architecture Understanding
- "Can you explain the key components needed for a web application that converts text to speech using Web Speech API? Please break down the frontend and backend requirements."
- "What are the main considerations when designing a React component hierarchy for an audio player application?"
- "How should I structure my Express.js backend to handle both file uploads and text processing?"

### Knowledge Assessment
- "Can you explain how the Web Speech API works in browsers? Please include basic code examples."
- "What are the key React hooks I'll need for managing audio state and file uploads?"
- "How does audio processing work in the browser? What are the limitations I should be aware of?"

### Project Planning
- "Based on this project scope [paste scope], what potential technical challenges should I prepare for?"
- "What's a logical component breakdown for a podcast player interface in React?"
- "Can you help me create a checklist of development environment requirements for this project?"

## Session 2 - Frontend Setup Prompts

### React Components
- "Can you help me create a basic file upload component in React that accepts audio files?"
- "How should I structure a form component that handles both text input and file uploads?"
- "What's the best way to implement a toggle between transcript input and file upload modes?"

### State Management
- "What's the best way to manage audio file state in React? Should I use useState or useRef?"
- "Can you help me implement basic error handling for file uploads in React?"
- "How should I structure my state to handle both the input and generated podcast data?"

## Session 3 - Backend Development Prompts

### Express Setup
- "Can you help me set up basic Express routes for handling file uploads and transcript processing?"
- "What middleware should I implement for handling audio file uploads?"
- "How should I structure my error handling middleware in Express?"

### Gemini Integration
- "Can you help me write a function to process text input using the Gemini API?"
- "What's the best way to structure prompts for Gemini to generate podcast-style content?"
- "How should I handle rate limiting and errors from the Gemini API?"

## Session 4 - Text-to-Speech Prompts

### Web Speech API
- "Can you show me how to implement basic text-to-speech using Web Speech API?"
- "What's the best way to handle different voices and speech settings?"
- "How can I implement pause and resume functionality with Web Speech API?"

### Audio Controls
- "How do I create a custom audio player interface in React?"
- "What's the best way to implement playback speed control?"
- "Can you help me implement a progress indicator for speech synthesis?"

## Session 5 - Integration Prompts

### API Communication
- "What's the best way to handle API calls between my React frontend and Express backend?"
- "How should I structure my API responses for both success and error cases?"
- "Can you help me implement loading states while waiting for API responses?"

### Data Flow
- "What's the best way to manage state between the file upload and podcast generation process?"
- "How should I handle the flow of data from input to processed podcast output?"
- "Can you help me implement proper error boundaries for the generation process?"

## Session 6 - Enhancement Prompts

### Player Improvements
- "How can I improve the audio player interface to be more user-friendly?"
- "What accessibility considerations should I implement in my audio player?"
- "Can you help me add keyboard controls to the audio player?"

### Error Handling
- "What are common error scenarios I should handle in my application?"
- "How can I implement user-friendly error messages?"
- "Can you help me create a robust error handling system?"

## Session 7 - Testing Prompts

### Testing Strategies
- "What are the key test cases I should consider for my podcast generator?"
- "How can I test the Web Speech API implementation?"
- "What edge cases should I test in my file upload system?"

### Debugging
- "I'm getting [specific error]. Can you help me debug this issue?"
- "How can I improve the performance of [specific feature]?"
- "What tools can I use to debug audio playback issues?"

## Tips for Effective Prompting

1. Be Specific
   - Include relevant code snippets
   - Describe the context
   - Explain what you've tried

2. Iterative Refinement
   - Start with broad concepts
   - Ask follow-up questions
   - Request clarification on unclear points

3. Error Resolution
   - Include error messages
   - Describe expected vs actual behavior
   - Share relevant code context

4. Learning Focus
   - Ask for explanations of concepts
   - Request best practices
   - Ask about alternative approaches

Remember: Claude is most helpful when you:
- Provide clear context
- Share specific requirements
- Include relevant code snippets
- Ask for explanations, not just solutions
- Follow up on unclear points