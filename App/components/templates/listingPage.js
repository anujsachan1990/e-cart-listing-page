import { PureComponent, Fragment } from "react";
import fetch from "node-fetch";
import ProductList from "../organisms/ProductList";
import Select from "../atoms/SelectBox";
import ServiceURI from "../../global/services";
import Filters from "../molecules/Filters";

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

ListingPage.getInitialProps = async ({ req }) => {
  const res = await fetch(ServiceURI.getProductData);
  const productData = await res.json();
  return {
    productData
  };
};

export default ListingPage;
