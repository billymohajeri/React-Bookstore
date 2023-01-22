const CHECK_STATUS = 'categories/CHECK_STATUS';

const INITIAL_STATE = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
