import { userActionTypes } from "../constants/usersAction.types";

const initialState = { blogs: [] };

const blogReducer = (state = initialState, action) => {
  console.log("received action", action);
  switch (action.type) {
    case userActionTypes.LOAD_BLOGS:
      return { ...state, blogs: action.payload.blogs };

    default:
      return { ...state };
  }
};

export default blogReducer;
