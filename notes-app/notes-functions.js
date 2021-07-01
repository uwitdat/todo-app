const processData = () => {
    data = '12323123'
}




// Read exisiting notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (err) {
        return []
    }
}

// Save a note
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Remove a note 
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDom = (note) => {
    const noteEl = document.createElement('a')
    noteEl.style.display = 'block';
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
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.prepend(button)

    return noteEl;
}

//Sort notes
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
}

// Render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(note => {
        const noteEl = generateNoteDom(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}


//generate lastedited message
const generateLastEdited = (timestamp) => {
    return `last edited: ${moment(timestamp).fromNow()}`
}