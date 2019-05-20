import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import Layout from '../components/layout';
import SEO from '../components/seo';
import Movies from '../components/movies';

const IndexPage = () => (
  <Layout title="Pop Movies">
    <SEO title='Home' />
    <StaticQuery
      query={graphql`
        query MovieQuery {
          dataJson {
            results {
              id
              title
              poster_path
            }
          }
        }
      `}
      render={data => (
        <>
          <Movies movies={data.dataJson.results} />
        </>
      )}
    />
  </Layout>
)

export default IndexPage
