import * as fs from 'fs'
import chalk from 'chalk'

export const getNotes = function () {
    return "Your notes..."
}

export const addNote = function (title, body) {
    const notes = loadNotes()

    // Filter returns element when condition is true
    const duplicateNotes = notes.filter(note => {
        return note.title === title
    })

    if(duplicateNotes.length > 0) {
        console.error(chalk.bgRed("Failed to add note: title already taken."))
        return
    }
    
    notes.push({
        title: title, 
        body: body
    })

    saveNotes(notes)
    console.log(chalk.bgGreen.black(`'${title}' added!`))
}


export const removeNote = function (title) {
    const notes = loadNotes()

    const notesToKeep = notes.filter(note => {
        return note.title !== title
    })

    if(notes.length === 0 || notesToKeep.length === notes.length) {
        console.log(chalk.bgRed(`There is no note called '${title}' to be removed.`))
    }
    else {
        saveNotes(notesToKeep)
        console.log(chalk.bgGreen.black(`'${title}' removed!`))
    }
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)    
    } catch (error) {
        return []
    }
}

const saveNotes = function (notes) {
    fs.writeFileSync("notes.json", JSON.stringify(notes, null, 4))
}