Here's the user flow broken down into two main paths:

Audio Upload Path:
Upload Audio from user's device -> Click Generate -> Loading Spinner appears (optional) -> Backend endpoint processes audio -> Backend lifts text from audio -> Backend sends text from audio and NLP prompt to Gemini Api -> Script generated -> Script saved to file -> Script sent to frontend -> Podcast interface appears & Script displayed below player -> User clicks Play -> AI voice or voices begin speaking -> User can stop player and adjust speed -> User can stop at any time 

Transcript Path:
Copy transcript from source -> Paste/Type Transcript -> Click Generate -> Loading Spinner appears (optional) -> Backend endpoint processes text -> Backend lifts text from transcript -> Backend sends text from transcript and NLP prompt to Gemini Api -> Script generated -> Script saved to file -> Script sent to frontend -> Podcast interface appears & Script displayed below player -> User clicks Play -> Intro music plays -> Two AI voices begin speaking -> User can stop player and adjust speed -> User can stop at any time -> Script displayed below player

Error Flows:
1. Wrong File Type:
Select Non-Audio File -> Alert "Please select an audio file" -> Return to file selection

2. Empty Submission:
Click Generate with no input -> Alert "Please provide an audio file or transcript" -> Return to input

3. Processing Error:
Input Provided -> Click Generate -> Backend Error -> Alert "Failed to generate podcast" -> Return to input state

4. Audio Playback Error:
Click Play -> Intro Music Fails -> Fallback directly to voice synthesis -> Continue with podcast

Each step in the successful flows provides visual feedback:
Input State -> Processing State (Loading) -> Success State (Player + Script) -> Playback State (Playing/Stopped)

The interface maintains three primary states:
1. Input Selection (File/Transcript toggle)
2. Processing (Loading spinner)
3. Playback (Player controls + Generated script)

[Back to Spec](spec.md)
[Back to Home](README.md)