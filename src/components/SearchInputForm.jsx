import { useState, useEffect, useRef, useContext } from 'react';
import { debounce } from '../utils/functions';
import { SearchContext } from '../utils/SearchContext';

function SearchInputForm() {
  const { setSearchTerm } = useContext(SearchContext);

  const [inputValue, setInputValue] = useState('');
  // must use useRef to keep the same instance of the debounced function. otherwise, it will be recreated on each render
  const debouncedSearchTerm = useRef(debounce(nextValue => setSearchTerm(nextValue), 500)).current;

  useEffect(() => {
    debouncedSearchTerm(inputValue);
  }, [inputValue]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (

    <form>
      <label className="input input-bordered flex items-center gap-2 bg-primary text-white p-4" htmlFor='search'>
        <div className="label">
          <span className="">Search for movie</span>
        </div>

        <input type="text" value={inputValue} onChange={handleInput} placeholder='Type search term...' className="grow"
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      </label>

    </form>
  )

}

export default SearchInputForm;

