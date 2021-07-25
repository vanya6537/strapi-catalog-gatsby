import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Image from "~/components/image"
import Card from "~/components/styled/card"

const CategoryList = ({ categories }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <pre>{JSON.stringify(categories)}</pre>
    {categories.map(({ node }) => {
      return (
          <p className="px-4 py-6">{node.name}</p>
      )
    })}
  </div>
)

CategoryList.propTypes = {
  categories: PropTypes.array,
}

export default CategoryList
