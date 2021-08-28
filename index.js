const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('スライドサーバ起動中！'))

app.listen(port, () => console.log(`スライドサーバを起動します ${port}!`))