import { css } from "styled-components";
import ThemeColors from "../../../styles/theme/colors";
import ThemeFonts from "../../../styles/typography";
export default css`
	border: 1px solid ${ThemeColors.lightGray};
	list-style: none;
	display: flex;
	flex: 1 1 300px;
	margin-left: -1px;
	margin-top: -1px;
	flex-wrap: wrap;
	padding: 30px 10px;
	padding-top: 20px;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 0;
	
	.sale-tag{
		background-color: ${ThemeColors.red};
		color: ${ThemeColors.white};
		padding: 16px 21px;
		display: inline-block;
	}
	
	.exclusive-tag{
		background-color:${ThemeColors.green};
		color: ${ThemeColors.white};
		padding: 16px 35px;
		display: inline-block;
	}

	.product-description{
		display: flex;
		justify-content: space-between;
		margin-top: 30px;
		align-items: baseline;
	}
	.product-name{
		font-size: ${ThemeFonts.productName}
		max-width: 170px;
		font-weight: bold;
	}
	.product-price {
		font-size: ${ThemeFonts.productPrice}
		font-weight: bold;
	}
}`;
