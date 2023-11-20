export async function askServer(route, method, body = {}) {
    // return new Promise(() => mock(route))
    const baseUrl = "http://localhost:3000"
    const data = {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      credentials: "include",
      mode: "cors",
      method: method,
    }
  
    if (method === "POST") {
      data.body = JSON.stringify(body)
    }
    const response = await fetch(baseUrl + route, data)
    return response.json()
  }


function mock(route) {
    if (route === 'api/test') {
        return {msg: "Hello Local"}
    }
}