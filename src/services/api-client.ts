import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8208dd09f5cf4910a768da17d2e4dd01'
    }
})