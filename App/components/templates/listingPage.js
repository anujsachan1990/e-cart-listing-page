import { PureComponent, Fragment } from "react";
import fetch from "node-fetch";
import ProductList from "../organisms/ProductList";
import Select from "../atoms/SelectBox";
import ServiceURI from "../../global/services";
import Filters from "../molecules/Filters";

/** 
  * @desc ListingPage component can be used to display a product List. This component is connected with Styled component
  *  to add inline styles.This component renders server side. 
  *  @productData : list of product returend from API
  *  @filterData :  filtered List items after applying the size filers;
*/

class ListingPage extends PureComponent {
  state = {
    productData: [],
    filterData: []
  };

  componentWillMount() {
    this.setState({
      productData: this.props.productData
    });
  }

  filterProductsFromSize(size) {
    let filterData = this.state.productData.filter(
      item => item.size.indexOf(size) > -1
    );
    this.setState({
      filterData
    });
  }

  render() {
    const { productData, filterData } = this.state;
    return (
      <Fragment>
        <Filters filterProducts={this.filterProductsFromSize.bind(this)} />
        <ProductList items={filterData.length ? filterData : productData} />
      </Fragment>
    );
  }
}

/** 
  * @desc ListingPage.getInitialProps: this method helps to pass the data to child components so that
  * product List component can render on server side.
*/

ListingPage.getInitialProps = async ({ req }) => {
  const res = await fetch(ServiceURI.getProductData);
  const productData = await res.json();
  return {
    productData
  };
};

export default ListingPage;
