import { useEffect, useState } from 'preact/hooks'
import './app.css'

export function App() {
  const [data, setData] = useState(0)

  useEffect(() => {
    fetch('http://localhost:3000/', {
      method: "GET"
    }).then((res) => res.json())
    .then((data) => console.log(data))
  }, []
  )

  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}
