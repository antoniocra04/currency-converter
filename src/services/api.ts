import axios from 'axios'

const client = axios.create({
    baseURL: 'https://api.exchangerate.host',
})

export const convert = async (from: string, to: string, amount: string) => {
    return client.get(`convert?from=${from}&to=${to}&amount=${amount}`)
}
