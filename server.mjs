import express from 'express'
import Sqlito from 'sqlito'

const app = express()
const sqlito = new Sqlito('content/posts', ['title', 'excerpt', 'tags'])

app.get('/tag/:tag', (req, res) => {
  const { tag } = req.params
  const entries = sqlito.allFromTag(tag)
  res.json(entries)
})

app.get('/search/:term', (req, res) => {
  const { term } = req.params
  const entries = sqlito.allWithText(term)
  res.json(entries)
})

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}/`)
})
