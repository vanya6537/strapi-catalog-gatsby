import React from "react"
import PropTypes from "prop-types"

import { formatPrice } from "~/helpers/currency-formatter"
// import GlobalContext from "../context/GlobalContext"

const ProductList = ({ categoryList, gridCols }) => {
  return (
    <>
      {/*<pre>{JSON.stringify(Object.entries(categoryList), null, 2)}</pre>*/}
      {Object.entries(categoryList).map(([categoryName, products]) => {
        return (
          <>
            <h3>{categoryName}</h3>
            <ul>
              {products.map(product => (
                <li className="px-4 py-6">
                  <p>{product.title}</p>
                  <p className="text-xs self-end">
                    {product.price && formatPrice(product.price)}
                  </p>
                </li>
              ))}
            </ul>
          </>
        )
      })}
    </>
  )
}

ProductList.propTypes = {
  products: PropTypes.array,
  gridCols: PropTypes.string,
}

ProductList.defaultProps = {
  gridCols: "grid-cols-1 md:grid-cols-3",
}

export default ProductList
