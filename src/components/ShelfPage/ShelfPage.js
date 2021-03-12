import { useSelector } from 'react-redux';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

function ShelfPage() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // make call to saga
  //   dispatch({
  //     type: 'CALL_SHELF'
  //   })
  // }, [])

  const books = useSelector(store => store.shelfReducer);

  console.log(books);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ul>
        {books.map(book => {
          return (
            <li key="book.id">
              <p>{book.description}</p>
              <img src={book.image_url} width='100px' />
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;
