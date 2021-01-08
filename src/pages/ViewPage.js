import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import ViewTable from "../molecule/ViewTable";
import { RemoveProduct, SetAllProductList } from "../redux/actions";
// import data from "../dataset/products";
import { StyledButton } from "./styled";

function ViewPage(props) {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.productList);
  const [productList, setProductList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    //call api to get all product the list
    // window.fetch('url', {
    //   method: 'GET'
    // }).then(res => {
    //   SetAllProductList(res.body);
    // })
    SetAllProductList([]);
  }, []);
  useEffect(() => {
    setProductList(allProducts);
  }, [allProducts]);
  const onSelect = (items) => {
    setSelectedItems(items.rowIds);
  };
  const deleteProduct = () => {
    let newProList = [];
    newProList = allProducts.filter(
      (data) => selectedItems.indexOf(data.id) === -1
    );
    dispatch(RemoveProduct(newProList));
    setProductList(newProList);
  };
  const addProduct = () => {
    props.history.push("/product:add", {});
  };
  const editProduct = () => {
    props.history.push("/product:edit", {
      selectedProductId: selectedItems[0]
    });
  };
  return (
    <div>
      <h1>Products List</h1>
      <StyledButton onClick={addProduct}>Add Product</StyledButton>
      <StyledButton onClick={editProduct} disabled={selectedItems.length !== 1}>
        Edit Product
      </StyledButton>
      <StyledButton onClick={deleteProduct}>Remove Product</StyledButton>
      <ViewTable allProducts={productList} onSelect={onSelect} />
    </div>
  );
}

export default withRouter(ViewPage);
