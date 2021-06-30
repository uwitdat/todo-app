const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const removeBtn = document.querySelector('#remove-note')
const dateEl = document.querySelector('#last-edited')

const noteID = location.hash.substring(1)

let notes = getSavedNotes()

let note = notes.find(note => {
    return note.id === noteID
})

if (!note) {
    location.assign('/index.html')
}

titleEl.value = note.title;
bodyEl.value = note.body;
dateEl.textContent = generateLastEdited(note.createdAt)


titleEl.addEventListener('input', (e) => {
    note.title = e.target.value;
    note.updatedAt = moment().valueOf()
    dateEl.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyEl.addEventListener('input', (e) => {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf()
    dateEl.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeBtn.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(note => {
            return note.id === noteID
        })

        if (!note) {
            location.assign('/index.html')
        }

        titleEl.value = note.title;
        bodyEl.value = note.body;
        dateEl.textContent = generateLastEdited(note.updatedAt)
    }
})