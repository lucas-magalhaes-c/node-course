const fs = require('fs')

let dataJSON = fs.readFileSync('1-json.json').toString()

console.log("Before:", dataJSON)

let data = JSON.parse(dataJSON)

data.name = "Lucas"
data.age = 24

let newDataJSON = JSON.stringify(data, null, 4)

console.log("After:", newDataJSON)


fs.writeFileSync('1-json.json', newDataJSON)
