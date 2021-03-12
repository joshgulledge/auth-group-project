import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

function ShelfForm() {
  const dispatch = useDispatch();
  const [newImg, setNewImg] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const addItem = (event) => {
    event.preventDefault();
      dispatch({
        type: 'POST_SHELF',
        payload: {
          newImg, 
          newDescription,
        },
      })
  }

  return(

      <form onSubmit={addItem}>
        <label htmlFor="imageURL">
          <input
            name="imageURL"
            type="text"
            placeholder="URL goes here"
            value={newImg}
            onChange={(event) => setNewImg(event.target.value)}
          />
        </label>
        <label htmlFor="description">
          <input
          name="description"
          type="textarea"
          placeholder="Description goes here"
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
          />
        </label>
        <button 
          type="submit"
          onClick={() => addItem}>
        Add Item!</button>        
      </form>
  )
}

export default ShelfForm;