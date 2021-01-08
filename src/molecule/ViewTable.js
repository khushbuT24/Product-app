import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { StyledDiv } from "./styled";

const ViewTable = (props) => {
  const { allProducts, onSelect } = props;
  const [prodList, setProductList] = useState([]);
  const columns = [
    { field: "product_name", headerName: "Product Name" },
    {
      field: "product_description",
      headerName: "Product Description"
    },
    { field: "is_active", headerName: "Status" },
    { field: "price", headerName: "Price" },
    { field: "offer_price", headerName: "Offer Price" },
    { field: "offer_start_at", headerName: "Offer Start At" },
    { field: "offer_end_at", headerName: "Offer End At" },
    { field: "created_at", headerName: "Created At" },
    { field: "updated_at", headerName: "Updated At" }
  ];
  const onTableSelect = (e) => {
    onSelect(e);
  };
  useEffect(() => {
    setProductList(allProducts);
  }, [allProducts]);
  return (
    <StyledDiv style={{ height: "400px", width: "70%" }}>
      <DataGrid
        rows={prodList}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onSelectionChange={onTableSelect}
      />
    </StyledDiv>
  );
};

export default ViewTable;
