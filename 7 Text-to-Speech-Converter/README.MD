
# 🗣️ Text-to-Speech Converter

This is a simple JavaScript-based **Text-to-Speech Converter** that utilizes the Web Speech API. Users can enter text and have it read aloud, with controls for pausing, resuming, stopping, and adjusting the speech speed.

## 🚀 Features

* ✅ Convert typed text to speech
* ⏸ Pause and ▶ Resume speech playback
* 🛑 Stop and clear the speech instantly
* ⚙ Change speaking rate: **Slowly**, **Moderate**, or **Quickly**

## 🧠 Technologies Used

* HTML5
* CSS3 *(for styling)*
* JavaScript (Vanilla)
* Web Speech API (`SpeechSynthesisUtterance`)

## 📁 Project Structure

```plaintext
index.html       -> Main structure and layout
style.css        -> UI styling (optional)
script.js        -> All speech functionality and interactivity
```

## 💡 How It Works

1. **Enter Text**: Type into the provided textarea.
2. **Convert to Speech**: Click the "Convert to Speech" button to start the speech.
3. **Pause/Resume**: Toggle between pausing and resuming with the same button.
4. **Stop**: Use the "Stop" button to cancel the speech and clear the text.
5. **Adjust Speed**: Use the dropdown to choose how fast the text is spoken.

## ⚙️ Key JavaScript Functions

* `speechSynthesis.speak(utterance)` – Starts speaking the text.
* `speechSynthesis.pause()` – Pauses ongoing speech.
* `speechSynthesis.resume()` – Resumes paused speech.
* `speechSynthesis.cancel()` – Stops and resets speech.
* `utterance.rate` – Controls how fast the speech is delivered.

## ⚠ Known Limitation

* When you change the speed using the dropdown, it sets a new speech rate, but it does **not apply it** to the currently speaking text unless you restart the speech manually. Consider integrating speed changes directly into the main speech flow for dynamic adjustment.

## 📌 Future Improvements

* Add voice selection from available system voices
* Improve UI/UX with better styling
* Add support for saving and reusing speech settings

## 📄 License

This project is open-source and free to use.


