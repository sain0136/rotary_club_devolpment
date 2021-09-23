let districts = [
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

let clubs = [
  {
    id: 1,
    name: 'C1'
  },
  {
    id: 2,
    name: 'C2'
  },
  {
    id: 3,
    name: 'C3'
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
  let newDistrict = {
    id: Date.now(),
    name: req.body.name
  }
  districts.push(newDistrict)
  res.send(newDistrict)
})

app.delete('/districts/:id', async (req, res) => {
  districts = districts.filter(district => district.id != req.params.id)
  res.send(districts)
})

app.get('/clubs', (req, res) => {
  res.send(clubs)
})

app.get('/clubs/:id', (req, res) => {
  clubs.forEach(club => {
    if(club.id == req.params.id) {
      res.send(club)
    }
  })
})

app.post('/clubs', (req, res) => {
  console.log(req.body)
  let newClub = {
    id: Date.now(),
    name: req.body.name
  }
  districts.push(newClub)
  res.send(newClub)
})

app.delete('/clubs/:id', async (req, res) => {
  clubs = clubs.filter(club => club.id != req.params.id)
  res.send(clubs)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))