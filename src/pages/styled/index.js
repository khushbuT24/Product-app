import styled from "styled-components";
import { TextField, Checkbox, FormControlLabel } from "@material-ui/core";

export const StyledTextField = styled(TextField)`
  margin: 10px !important;
`;

export const StyledContainer = styled.div`
  background-color: #fdf8f59c;
  max-width: 500px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-flow: column;
  align-items: center !important;
`;
export const StyledButton = styled.button`
  margin: 10px;
  width: max-content;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;
export const StyledCheckbox = styled(Checkbox)`
  color: #266150 !important;
`;
export const StyledFormControlLabel = styled(FormControlLabel)`
  color: grey;
  width: 100%;
  margin: 10px 0px 10px 33.33% !important;
`;
