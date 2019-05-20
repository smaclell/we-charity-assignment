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
          poster_path,
          overview,
          vote_average,
          runtime,
          release_date,
        }
      }
    }
  }
  `);

  result.data.allMoviesJson.edges.forEach(({ node }) => {
    // Normally I would do something a bit more resilient here
    const year = node.release_date.split('-')[0];
    const data = {
      ...node,
      year,
      rating: node.vote_average,
    };

    createPage({
      path: `/movies/${node.id}`,
      component: path.resolve(path.join(__dirname, `./src/templates/movie.js`)),
      context: {
        data,
      },
    })
  });
}
