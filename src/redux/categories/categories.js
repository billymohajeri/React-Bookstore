const CHECK_STATUS = 'categories/CHECK_STATUS';

const INITIAL_STATE = [];

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default categoriesReducer;
