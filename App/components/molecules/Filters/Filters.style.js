import { css } from "styled-components";
import ThemeColors from "../../../styles/theme/colors";

export default css`
  background-color: ${ThemeColors.lightBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  margin: 25px 18px 10px 16px;
  h2 {
    margin: 0;
  }
  .size-filter select {
    width: 170px;
    font-size: 14px;
  }
`;
