const initialState = {
  filter: 'SHOW_ALL',
  searchValue: '',
};

const SHOW_COMPLETED = 'SHOW_COMPLETED';
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';

export const sortCompleted = () => ({
  type: SHOW_COMPLETED,
});

export const setSearchValue = (searchValue) => ({
  type: SET_SEARCH_VALUE,
  payload: searchValue,
});

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_COMPLETED: {
      if (state.filter === 'SHOW_ALL') {
        return {
          ...state,
          filter: 'SHOW_COMPLETED',
        };
      }
      return {
        ...state,
        filter: 'SHOW_ALL',
      };
    }
    case SET_SEARCH_VALUE: {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    default:
  }
  return state;
};
