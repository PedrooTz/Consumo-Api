export async function getFilmes () {
    const url = 'http://10.107.134.40:8080/v2/acmefilmes/filmes'
    const response = await fetch (url)
    const data = await response.json()
    return data.filme

}

export async function getFilme(id) {
    const url = `http://10.107.134.40:8080/v2/acmefilmes/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filme[0]

}