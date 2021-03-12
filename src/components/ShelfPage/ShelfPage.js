import { useSelector } from 'react-redux';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';

function ShelfPage() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // make call to saga
  //   dispatch({
  //     type: 'CALL_SHELF'
  //   })
  // }, [])

  const books = useSelector(store => store.shelfReducer);

  const handleDelete = (e) => {
    console.log('delete me');
    axios.delete(`/api/shelf/${e.target.id}`)
      .then((res) => {
        console.log('book deleted');
        dispatch({
          type: 'CALL_SHELF'
        })
      })
      .catch((err) => {
        console.log('failed to delete book', err)
      })
  };
  
  return (
    <div className="container">
      <h2>Shelf</h2>
      <ul>
        {books.map(book => {
          return (
            <li key={book.id}>
              <p>{book.description}</p>
              <img src={book.image_url} width='100px' />
              <button id={book.id} onClick={handleDelete}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;
