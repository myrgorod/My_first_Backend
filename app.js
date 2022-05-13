const express = require('express')
const app = express()
const port = 8080
const basicAuth = require('express-basic-auth')
const songs = [
    'Ad-Lib Blues',
    'After You\'ve Gone',
    'Air For English Horn',
    'Alice Blue Gown',
    'All My Tomorrows',
    'All of Me',
    'All of You',
    'All the Things You Are',
    'All the Way',
    'All the Way Home',
    'All This and Heaven Too',
    'Any Time at All',
    'April Played the Fiddle',
    'Aren\'t You Glad You\'re You?',
    'Autumn Leaves',
    'The Beautiful Strangers',
    'The Best of Everything',
    'Blue Lace',
    'Bonita',
    'Brown'
]


app.get('/', (req, res) => {
    
    var random_song = songs[Math.floor(Math.random()*songs.length)];   
    
    res.send(random_song)
  })

  
app.get('/birth_date', (req, res) => {
  res.send('December 12, 1915')
})


app.get('/birth_city', (req, res) => {
    res.send(' Hoboken, New Jersey,')
  })



app.get('/wives', (req, res) => {
    res.send('Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx')
  })

  app.get('/picture', (req, res) => {
    res.redirect('https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg')
  })

  app.get('/public', (req, res) => {
    res.send('Everybody can see this page')
  })


  app.use(basicAuth({
    users: { 'admin': 'admin' },
    challenge: true,
    unauthorizedResponse: function() {return "Not authorized "}
}))

app.get('/protected', (req, res) => {
    res.send('Welcome, authenticated client!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})