export const AddProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product
  };
};
export const RemoveProduct = (product) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: product
  };
};
export const SetAllProductList = (product) => {
  return {
    type: "All_PRODUCT_LIST",
    payload: product
  };
};
