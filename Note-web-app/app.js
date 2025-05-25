const noteInput = document.getElementById('noteInput');
const saveBtn = document.getElementById('saveBtn');
const newNoteBtn = document.getElementById('newNoteBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const savedNotesContainer = document.getElementById('savedNotesContainer');

// set and initialized notes 

let notes = JSON.parse(localStorage.getItem('note')) || [];
updateDisplay()

//New Note
function newNote() { noteInput.value = '' };

//Clear All Note
function clearAllNotes() {
    localStorage.removeItem('note');
    notes = [];
    updateDisplay()
}

// Save Note 
function saveNote() {
    const text = noteInput.value.trim();
    if (text === '') { return };
    notes.push(text);
    localStorage.setItem('note', JSON.stringify(notes));
    newNote()
    updateDisplay()
} 
//displayed all saved note 
function updateDisplay() {
    if (notes.length === 0) {
        savedNotesContainer.innerHTML = '<p>No notes saved yet.</p>';
    } else {
        savedNotesContainer.innerHTML = notes
            .map((note, index) => `<p><strong>Note :${index + 1} </strong> ${note}</p>`)
            .join('')
    }
}
saveBtn.addEventListener('click', saveNote);
newNoteBtn.addEventListener('click', newNote);
clearAllBtn.addEventListener('click', clearAllNotes);