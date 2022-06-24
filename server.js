const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const tea = {
    'oolong':{
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': true ,
        'type': 'black',
        'origin': 'China',
        'flavor': 'Delicious',
    },
    'unknown':{
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffinated': 0 ,
        'type': 0,
        'origin': 0,
        'flavor': 0,
    },
    'matcha':{
        'waterTemp':700,
        'steepTimeSeconds': 10,
        'caffinated': true ,
        'type': 'green',
        'origin': 'The dirt',
        'flavor': 'Earthy',
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if (tea[teaName]){
        response.json(tea[teaName])
    }
    else{
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})