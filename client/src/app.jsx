import { useEffect, useState } from "preact/hooks"
import "./app.css"
import { askServer } from "./utils/connector"

export function App() {
  const [data, setData] = useState({})

  useEffect(async () => {
    const res = await askServer("/", "GET")
    setData(res)
  }, [])

  const getRoot = async () => {
    const res = await askServer("/", "GET")
    setData(res)
  }
  const getTest = async () => {
    const res = await askServer("/api/test", "GET")
    setData(res)
  }
  const getSecret = async () => {
    const res = await askServer("/api/secret", "POST", { pw: "password" })
    setData(res)
  }
  const getWrongPassword = async () => {
    const res = await askServer("/api/secret", "POST", { pw: "not this one" })
    setData(res)
  }

  return (
    <>
      <h1>Hello World!</h1>
      <div>
        <button onClick={() => getRoot()}>Get Root</button>
        <button onClick={() => getTest()}>Get Test</button>
        <button onClick={() => getSecret()}>Get Secret</button>
        <button onClick={() => getWrongPassword()}>
          Get Secret (wrong password)
        </button>
      </div>
      <div>{data.msg}</div>
    </>
  )
}
