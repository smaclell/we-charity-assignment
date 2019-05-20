import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Trailers from '../components/trailers';
import '../styles/movie.scss';
const Page = ({
  pageContext: {
    data: { id, overview, poster_path, rating, runtime, title, videos, year },
  },
}) => (
  <Layout title="Movie Details" className="movie" hasBack>
    <SEO title={title} />
    <h2>{title}</h2>
    <div className="wrapper">
      <section className="details">
        <div className="info">
          <p className="year">{year}</p>
          <p className="runtime">{runtime} min</p>
          <p className="rating">{rating}/10</p>
          <button>mark as favourite</button>
        </div>
        <img
          alt={title}
          src={`http://image.tmdb.org/t/p/w154/${poster_path}`}
        />
        <p className="overview">{overview}</p>
      </section>
      <section className="trailers">
        <h3>Trailers:</h3>
        <Trailers trailers={videos} />
      </section>
    </div>
  </Layout>
);

export default Page;
