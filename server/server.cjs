const express = require('express')
const cors = require("cors")

const app = express()
const router = express.Router()

router.get('/', (req, res) => {
    res.json({msg: "Hello World"})
})

router.get("/api/test", (req, res) => {
    res.json({ msg: "Hello", data: {
      name: "Some Name",
      email: "mail@nice.ch"
    } })
  })

app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/", router)

app.listen(3000,() => console.log('listening on port 3000'))