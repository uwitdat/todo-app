// Read exisiting notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}


// Save a note
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}


//Remove a note 
const removeNote = (id) => {
    const noteIndex = notes.findIndex(note => {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDom = (note) => {
    const noteEl = document.createElement('p')
    const button = document.createElement('button')

    button.textContent = 'x'
    button.addEventListener('click', (e) => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    if (note.title.length > 0) {
        noteEl.textContent = note.title
    } else {
        noteEl.textContent = 'Unnamed Note'
    }

    noteEl.prepend(button)

    return noteEl;
}


// Render application notes
const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(note => {
        const noteEl = generateNoteDom(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}
