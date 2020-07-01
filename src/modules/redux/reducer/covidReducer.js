const initialState = {
  loading: false,
  data: {
    confirmed: "",
    recovered: "",
    deaths: "",
  },
};

const covidReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "AWAITING_DATA":
      return {
        ...state,
        loading: true,
      };
    case "REJECTED_DATA":
      return {
        ...state,
        loading: false,
      };
    case "SUCCESS_DATA":
      return {
        ...state,
        loading: false,
        data: payload,
      };
    default:
      return state;
  }
};

export default covidReducer;
