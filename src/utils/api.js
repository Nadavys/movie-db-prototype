

const API_TOKEN = import.meta.env.VITE_API_TOKEN
if (!API_TOKEN) {
    alert('API_TOKEN is not defined. Please define it in .env file')
}


const MOVIE_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'
const headers = {
    'Authorization': `Bearer ${API_TOKEN}`
}


export const searchMovies = async (query, page=1, language='en-US') => {
    if (!query) {
        return []
    }
    const params = new URLSearchParams({
        query,
        page,
        language
    });


    const url = `${MOVIE_SEARCH_URL}?${params.toString()}`;
    const result = await fetch(url, { headers });
    const data = await result.json();
    //todo: handle errors
    
    return data;

}


export default {
}






