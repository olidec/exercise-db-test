import { useEffect, useState } from "preact/hooks"
import "./app.css"

async function askServer(route, method, data = {}) {
  const baseUrl = "http://localhost:3000"
  const response = await fetch(baseUrl + route, { ...data, method: method })
  return response.json()
}

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
    console.log(res)
    setData(res)
  }

  return (
    <>
      <h1>Hello World!</h1>
      <div>
        <button onClick={() => getRoot()}>Get Root</button>
        <button onClick={() => getTest()}>Get Test</button>
      </div>
      <div>{data.msg}</div>
    </>
  )
}
