import { CHANGE_LANGUAGE } from "../../types";

const INTIAL_STATE = {
  language: "english",
};

function languagesReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { language: action.payload };

    default:
      return state;
  }
}

export default languagesReducer;
