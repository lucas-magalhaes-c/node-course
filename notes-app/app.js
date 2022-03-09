// const utils = require('./utils.js')

import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as notes from './notes.js'
// const notes = import('./notes.js')


// console.log(process.argv)

// Create and parse yargs commands
yargs(hideBin(process.argv))
    .command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            console.log(`Trying to add '${argv.title}'...`)
            notes.addNote(argv.title, argv.body)
        }
    })
    .command({
        command: 'remove',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            console.log(`Trying to remove '${argv.title}'...`)
            notes.removeNote(argv.title)
        }
    })
    .command({
        command: 'read',
        describe: 'Read a note',
        handler: function (argv) {
            console.log('Reading a note!')
        }
    })
    .command({
        command: 'list',
        describe: 'List the notes',
        handler: function (argv) {
            console.log('Listing the notes!')
        }
    })
    .parse()
