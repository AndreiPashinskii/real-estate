import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '9026868d11mshfd11169d8590665p1e95acjsn0e3bab004a2e',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data;
}