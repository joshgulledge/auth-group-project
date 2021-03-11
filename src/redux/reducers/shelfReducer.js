
const shelfReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SHELF':
      return action.payload;
    case 'UNSET_SHELF':
      return action.payload;
  }
}; // end shelfRreducer

export default shelfReducer;