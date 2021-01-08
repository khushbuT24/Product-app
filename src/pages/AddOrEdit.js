import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, useLocation } from "react-router-dom";
import { AddProduct } from "../redux/actions";
import {
  StyledTextField,
  StyledContainer,
  StyledButton,
  StyledCheckbox,
  StyledFormControlLabel
} from "./styled";

function AddOrEdit(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  let productList = {};
  productList = useSelector((state) => state.productList);
  const [formData, setFormData] = useState({});
  const [isEdit] = useState(location.pathname === "/product:edit");
  const [loadData, setLoadData] = useState(false);

  const handleSubmit = (e) => {
    let list = [];
    list = [...productList];
    if (!isEdit) {
      formData.created_at = Date().toLocaleString();
      formData.id = "pro-" + productList.length;
      list.push(formData);
      dispatch(AddProduct(list));
    } else {
      const productId = location.state.selectedProductId;
      list.filter((l) => l.id !== productId);
      formData.updated_at = Date().toLocaleString();
      list.push(formData);
      dispatch(AddProduct(list));
    }
    props.history.push("/");
    //make api call to add the product
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    let formD = {};
    formD = formData;
    if (name === "is_active") {
      formD[name] = e.target.checked ? "active" : "Not Active";
    } else {
      formD[name] = value;
    }
    setFormData(formD);
  };
  useEffect(() => {
    setLoadData(false);
    if (isEdit) {
      if (location?.state) {
        const productId = location?.state?.selectedProductId;
        let jjj = {};
        jjj = productList;
        const proData = jjj.filter((dd) => dd.id === productId);
        setFormData(proData[0]);
        setLoadData(true);
      }
    } else {
      setFormData({});
      setLoadData(true);
    }
  }, [location]);
  return (
    <>
      {loadData ? (
        <>
          <h2>{isEdit ? "Edit Product" : "Add Product"}</h2>
          <StyledContainer>
            <form id="add-form" onSubmit={handleSubmit} onChange={handleChange}>
              <StyledTextField
                label="Product Name"
                required
                defaultValue={formData.product_name}
                name="product_name"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <StyledTextField
                label="Product Description"
                required
                name="product_description"
                defaultValue={formData.product_description}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <StyledTextField
                label="Price"
                required
                name="price"
                defaultValue={formData.price}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <StyledTextField
                label="Offer Price"
                name="offer_price"
                defaultValue={formData.offer_price}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <StyledTextField
                label="Offer Starts at"
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                name="offer_start_at"
                defaultValue={formData.offer_start_at}
              />
              <StyledTextField
                label="Offer Ends at"
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                name="offer_end_at"
                defaultValue={formData.offer_end_at}
              />
              <StyledFormControlLabel
                label="Active"
                control={
                  <StyledCheckbox
                    onChange={handleChange}
                    defaultChecked={formData.is_active}
                    name="is_active"
                  />
                }
              />
              <StyledButton type="submit">
                {isEdit ? "Edit Product" : " Add Product"}
              </StyledButton>
            </form>
          </StyledContainer>
        </>
      ) : null}
    </>
  );
}

export default withRouter(AddOrEdit);
