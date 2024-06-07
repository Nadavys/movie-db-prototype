import { useContext } from 'react';
import { SearchContext } from '../utils/SearchContext';
import SearchInputForm from './SearchInputForm';
import MoviesList from './MoviesList';

function App() {
  const { totalResults, searchTerm } = useContext(SearchContext);

  return (
    <div className="container mx-auto mb-10">

      <h1
        className="text-4xl font-bold text-center mt-10 mb-5"
      >Movies Search</h1>

      <SearchInputForm />
      <hr className='m-5' />
      {totalResults > 0 && <MoviesList />}
      {totalResults === 0 && searchTerm && <div>No results found</div>}
    </div>
  )
}

export default App





