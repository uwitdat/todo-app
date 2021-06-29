const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to spain'
    },
    {
        title: 'Habits to work on',
        body: 'get jacked'
    },
    {
        title: 'office mods',
        body: 'add new lights and chairs'
    },
]

const sortNotes = (notes) => {
    notes.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)

console.log(notes)



// const findNotes = (array, query) => {
//     return array.filter((note, idx) => {
//         const isTitleMatch = note.title.toLowerCase().includes(query)
//         const isBodyMatch = note.body.toLowerCase().includes(query)
//         return isTitleMatch || isBodyMatch;
//     })
// }


// console.log(findNotes(notes, 'work'))


// const findNote = (array, objTitle) => {
//     return array.find(note => {
//         return note.title.toLowerCase() === objTitle.toLowerCase();
//     })
// }

// const note = findNote(notes, 'office mods')
// console.log(note)

// const findNote = (array, objTitle) => {
//     const index = array.findIndex(note => {
//         return note.title.toLowerCase() === objTitle.toLowerCase();
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'office mods')
// console.log(note)

// //INDEX OF
// const index = notes.findIndex((note, idx) => {
//     console.log(note)
//     return note.title === 'Habits to work on'
// })

// console.log(index)




// notes.push('Note 4')

// //removes last item
// removedNote = notes.pop()

// //removes first item
// console.log(notes.shift())

// //first arg: index, second arg: how many to delete
// console.log(notes.splice(1, 1))

//replaces array item
// notes.splice(1, 1, 'this is the new second item')
// console.log(notes)


//chaning value at index pos 2
// notes[2] = 'HELLO!'

// console.log(notes)


//.forEach LOOP
// notes.forEach((note, idx) => {
//     console.log(`${idx + 1}: ${note}`)
// })

//FOR LOOP
// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(`${count + 1}. ${notes[count]}`)
// }

