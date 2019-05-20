import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/movie.scss';
const Page = ({
  pageContext: {
    data: {
      id,
      overview,
      poster_path,
      rating,
      runtime,
      title,
      year,
    },
  },
}) => (
  <Layout title="Movie Details" className="movie">
    <SEO title={title} />
    <h2>{title}</h2>
    <div class="wrapper">
      <section class="details">
        <div class="info">
          <p class="year">{year}</p>
          <p class="runtime">{runtime}</p>
          <p class="rating">{rating}/10</p>
          <button>
            mark as favourite
          </button>
        </div>
        <img alt={title} src={`http://image.tmdb.org/t/p/w154/${poster_path}`} />
        <p class="overview">{overview}</p>
      </section>
      <section class="trailers">
        <h3>Trailers:</h3>
      </section>
    </div>
  </Layout>
);

export default Page;
