import reducer from "./budgetReducer";
import axios from "axios";

const initialState = {
  email: null,
  firstName: null,
  lasName: null
};

const REQUEST_USER_DATA = "REQUEST_USER_DATA";

export const requestUserData = () => {
  let data = axios
    .get("/auth/user-data")
    .then(res => res.data)
    .catch(err => console.log(err));

  //   console.log(data);

  let action = {
    type: REQUEST_USER_DATA,
    payload: data
  };
  return action;
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USER_DATA + "_FULFILLED":
      console.log(action.payload.user);
      const { email, firstName, lastName } = action.payload.user;

      return { email, firstName, lastName };

    default:
      return state;
  }
}
