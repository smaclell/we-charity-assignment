/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  {
    allMoviesJson {
      edges {
        node {
          id,
          title,
          backdrop_path,
        }
      }
    }
  }
  `);

  result.data.allMoviesJson.edges.forEach(({ node }) => {
    createPage({
      path: `/movies/${node.id}`,
      component: path.resolve(path.join(__dirname, `./src/templates/movie.js`)),
      context: {
        data: node,
      },
    })
  });
}
