import { useContext } from 'react';
import { SearchContext } from '../utils/SearchContext';


function MoviesList() {
  const { movies, totalResults, isMovieMarked, toggleMarkMovie } = useContext(SearchContext);
  //show only 10 movies at a time
  const topMovies = movies.slice(0, 10);
  const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w92';

  return (
    <>
      <table className="table">
        <thead className='bg-primary text-white'>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Release Date</th>
            <th>Overview</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          {topMovies.map(movie => {
            const marked = isMovieMarked(movie.id);
            return (
              <tr key={movie.id} className={marked ? 'movie-marked' : ''}>
                <td className='p-0 m-0 min-w-40'><img src={`${POSTER_BASE_URL}/${movie.poster_path}`} loading="lazy" style={{ width: '100%', height: 'auto' }} /></td>
                <td>{movie.title}</td>
                <td>{(new Date(movie.release_date)).toDateString()}</td>
                <td>{movie.overview}</td>
                <td>
                  {marked ? 'Unmark' : 'Mark'}
                  <input type="checkbox" className="toggle" checked={marked} onChange={() => toggleMarkMovie(movie.id)} />
         
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {totalResults > 0 && <p className="flex justify-center items-center">Total Results
       
      <div className="badge badge-primary ml-2">{totalResults}</div>
      </p>}

      {totalResults > 0 && <PaginationBar />}
    </>
  )
}

function PaginationBar() {
  const { nextPageFn, previousPageFn, currentPage, totalPages } = useContext(SearchContext);

  return (

    <div className='flex justify-center items-center mt-2'>
      <div className="join">
        <button onClick={previousPageFn} disabled={currentPage === 1} className="join-item btn">«</button>
        <button className="join-item btn">Page {currentPage} of {totalPages}</button>
        <button onClick={nextPageFn} disabled={currentPage === totalPages} className="join-item btn">»</button>
      </div>
      </div>

  )
}

export default MoviesList;



