const fs = require('fs')

const book = {
    title: 'Ego is the Enemy of the Sun',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book, null, 4)
console.log(bookJSON)


const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)

fs.writeFileSync('1-json.json', bookJSON)


const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer.toString())


const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data)

