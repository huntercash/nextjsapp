import React from "react";

const ProductPage = (props) => {
  const { slug } = props.params;
  const { sortOrder } = props.searchParams;

  return (
    <div>
      ProductPage {slug}, {sortOrder}
    </div>
  );
};

export default ProductPage;
