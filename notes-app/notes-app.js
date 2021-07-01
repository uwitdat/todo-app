let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#btn-create').addEventListener('click', (e) => {
    const id = uuidv4()
    createdAt = moment().valueOf()


    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: createdAt,
        updatedAt: createdAt,
    })
    saveNotes(notes)
    console.log(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)

    }
})




//MOMENT EXAMPLES

// // const now = moment()

// // now.subtract(5, 'year').subtract(20, 'days')

// // console.log(now.format('MMMM Do, YYYY'))
// // console.log(now.fromNow())

// // const nowTimestamp = now.valueOf()

// // console.log(moment(nowTimestamp).toString())

// birthday = moment()

// birthday.subtract(28, 'year').subtract(12, 'days',).subtract(3, 'months').toString()
// res = birthday.format('MMMM D, YYYY')

// console.log(res)