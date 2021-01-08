const INITIAL_STATE = {
  productList: []
};

function RootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return { ...state, productList: action.payload };
    }
    case "REMOVE_PRODUCT": {
      return { ...state, productList: action.payload };
    }
    case "All_PRODUCT_LIST": {
      return { ...state, productList: action.payload };
    }
    default:
      return state;
  }
}
export default RootReducer;
