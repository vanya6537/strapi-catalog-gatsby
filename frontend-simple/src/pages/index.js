import React from "react"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import PageHeading from "~/components/styled/page-heading"
import ProductList from "../components/product-list"

const IndexPage = ({ data: { allStrapiProduct }, location: { search } }) => {
  const queryParams = new URLSearchParams(search)
  // Save tableId
  const tableId = queryParams.get("tableId")
  window.localStorage.setItem("tableId", tableId)

  const loadedProducts = allStrapiProduct.edges
  const categoryList = loadedProducts.reduce((accum, { node }) => {
    const categoryName = node.category.name
    return {
      ...accum,
      [categoryName]: accum[categoryName]
        ? [...accum[categoryName], node]
        : [node],
    }
  }, {})
  const seo = { title: "Categories" }
  return (
    <Layout tableId={tableId}>
      <SEO seo={seo} />
      {/*<pre>{JSON.stringify(loadedProducts, null, 2)}</pre>*/}
      {/*<pre>{JSON.stringify(categoryList, null, 2)}</pre>*/}

      <PageHeading>Меню для столика №{queryParams.get("tableId")}</PageHeading>
      <ProductList categoryList={categoryList} />
    </Layout>
  )
}

export const query = graphql`
  query ProductsQuery {
    allStrapiProduct {
      edges {
        node {
          title
          price
          id
          slug
          category {
            name
          }
        }
      }
    }
  }
`

export default IndexPage
