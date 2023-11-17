const express = require("express")
const cors = require("cors")

const app = express()
const router = express.Router()

router.get("/", (req, res) => {
  res.json({ msg: "Hello World" })
})

router.get("/api/test", (req, res) => {
  res.json({
    msg: "Hello",
    data: {
      name: "Some Name",
      email: "mail@nice.ch",
    },
  })
})

router.post("/api/secret", checkLogin, (req, res) => {
  res.json({
    msg: "Very secure",
    data: {
      secret: "Top Secret",
    },
  })
})

function checkLogin(req, res, next) {
  console.log(req.body)
  if (req.body.pw === "password") {
    return next()
  }

  res.json({
    msg: "Not allowed",
    err: "Wrong password",
  })
}

app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/", router)

app.listen(3000, () => console.log("listening on port 3000"))
