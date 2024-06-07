import { searchMovies } from './utils/api'
import React, { useState, useEffect } from 'react';
import { SearchContext } from './utils/SearchContext';

function SearchProvider({ children }) {
    const [searchResults, setSearchResults] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [markedMovies, setMarkedMovies] = useState(new Set([]));

    let movies = searchResults.results || [];
    const totalResults = searchResults.total_results || 0;
    const totalPages = searchResults.total_pages || 0;

    async function fetchData() {
        const data = await searchMovies(searchTerm, 1);
        setSearchResults(data);
        //new term, reset page count
        setCurrentPage(1);
    }

    useEffect(() => {
        if (searchTerm) {
            fetchData();
        } else {
            setSearchResults({})
        }
    }, [searchTerm]);

    //useeffect to fetch data when page changes
    useEffect(() => {
        if (searchTerm) {
            searchMovies(searchTerm, currentPage).then(data => {
                setSearchResults(data);
            });
        }
    }, [currentPage]);

    //handle pagination
    function nextPageFn() {
        setCurrentPage(currentPage + 1);
    }
    function previousPageFn() {
        setCurrentPage(currentPage - 1);
    }

    //marking movies
    function toggleMarkMovie(id) {
        if (markedMovies.has(id)) {
            markedMovies.delete(id);
        } else {
            markedMovies.add(id);
        }
        setMarkedMovies(new Set(markedMovies));
    }

    function isMovieMarked (id) {
        return markedMovies.has(id);
    }

    return (
        <SearchContext.Provider
            value={{ searchResults, movies, setSearchTerm, searchTerm,  
                currentPage, totalResults, totalPages,
                nextPageFn, previousPageFn, 
                toggleMarkMovie, isMovieMarked
             }}
        >
            {children}
        </SearchContext.Provider>
    );
}

export default SearchProvider;