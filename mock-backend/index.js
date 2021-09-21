const districts = [
  {
    id: 1,
    name: 'D1'
  },
  {
    id: 2,
    name: 'D2'
  },
  {
    id: 3,
    name: 'D3'
  }
]

const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/districts', (req, res) => {
  res.send(districts)
})

app.get('/districts/:id', (req, res) => {
  districts.forEach(district => {
    if(district.id == req.params.id) {
      res.send(district)
    }
  })
})

app.post('/districts', (req, res) => {
  console.log(req.body)
  let newDistrict = {
    id: Date.now(),
    name: req.body.name
  }
  districts.push(newDistrict)
  res.send(newDistrict)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))