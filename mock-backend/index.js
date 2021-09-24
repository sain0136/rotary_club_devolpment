let districts = [
  {
    id: 1,
    name: 'D1',
    clubs: [
      {
        id: 1,
        name: 'D1C1'
      },
      {
        id: 2,
        name: 'D1C2'
      },
    ],
    users: [
      {
        id: 1,
        name: 'Districto',
        username: 'dapo',
        password: 'dapo88'
      }
    ]
  },
  
  {
    id: 2,
    name: 'D2',
    clubs: [
      {
        id: 3,
        name: 'D2C1'
      },
    ]
  },
  {
    id: 3,
    name: 'D3',
    clubs: []
  }
]

let districtAdmins = [
  {
    id: 1,
    districtId: 1,
    name: 'Districto',
    username: 'dapo',
    password: 'dapo88'
  }
]

const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

/**DISTRICTS *//

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
    name: req.body.name,
    clubs: []
  }
  districts.push(newDistrict)
  res.send(newDistrict)
})

app.delete('/districts/:id', async (req, res) => {
  districts = districts.filter(district => district.id != req.params.id)
  res.send(districts)
})

/**CLUBS *//
 
//Get club by district id
app.get('/districts/:id/clubs', (req, res) => {
  res.send(districts.filter(district => district.id == req.params.id)[0].clubs)
})

app.get('/districts/:id/clubs/:id', (req, res) => {
  let clubs = districts.filter(district => district.id == req.params.id)[0].clubs
  clubs.forEach(club => {
    if(club.id == req.params.id) {
      res.send(club)
    }
  })
})

app.post('/districts/:id/clubs', (req, res) => {
  let newClub = {
    id: Date.now(),
    name: req.body.name
  }
  districts.filter(district => district.id == req.params.id)[0].clubs.push(newClub)
  res.send(newClub)
})

app.delete('/districts/:id/clubs/:id', async (req, res) => {
  districts.filter(district => district.id == req.params.id)[0].clubs = 
  districts.filter(district => district.id == req.params.id)[0].clubs.filter(club => club.id != req.params.id)
  res.send(clubs)
})

/**USERS *//
 
//Get club by district id
app.get('/districts/:id/users', (req, res) => {
  res.send(districts.filter(district => district.id == req.params.id)[0].users)
})

app.get('/districts/:id/users/:id', (req, res) => {
  let users = districts.filter(district => district.id == req.params.id)[0].users
  users.forEach(user => {
    if(user.id == req.params.id) {
      res.send(user)
    }
  })
})

app.post('/districts/:id/users', (req, res) => {
  let newUser = {
    id: Date.now(),
    name: req.body.name,
    username: req.body.name,
    password: req.body.password
  }
  districts.filter(district => district.id == req.params.id)[0].users.push(newUser)
  res.send(newUser)
})

app.delete('/districts/:id/users/:id', async (req, res) => {
  districts.filter(district => district.id == req.params.id)[0].users = 
  districts.filter(district => district.id == req.params.id)[0].users.filter(user => user.id != req.params.id)
  res.send(users)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))