# WE Charity Assignment

This is a simple demo using the [Movie Database](https://www.themoviedb.org/settings/api). The site contains two pages, one a simple tile of movies and then a details page.

Built using React/Gatsby as a static site.

## Developing

```
yarn install
yarn develop
```

The running the site is at http://localhost:8000

You can also review all the site data with http://localhost:8000/___graphql

## TODO:

While I had fun building the site I did not budget my time as effectively as I would have liked. I got stuck trying to vertically center the trailer links/icon without using flexbox. I also took longer than I would have liked reviewing the files and writing this readme.

Given more time I would have done the following:

* Reviewed the site for accessibility issues (I have done the basics, but feel like I could do more)
* Done more responsiveness testing (I tested all the chrome presets)
* Confirmed whether CSS/JS polyfills are correct (none added)
* Moved the inline CSS to files (mostly in the movies list)
* Reviewed the site performance and bundle sizes
* Added page transitions for some extra pop
* Create a simple GraphQL server on top of the provided api

## Data

Instead of fetching the data at runtime I opted to download it all ahead of time. This meant the site is blazingly fast. I realize now this violates one of the basic requirements you had given.

Had I opted to fetch data when the page first loads, I would have either used [Apollo Client](https://www.apollographql.com/docs/tutorial/client.html) with a [graphql proxy](https://www.apollographql.com/docs/tutorial/data-source) to the actual backend or fetch with redux or fetch from an outer container containing the data.

My redux structure would have looked something like:

```
{
  // I would use an infinite scroll to get more data using the current page and the total count
  pages: {
    total: 992,
    current: 1,
    loading: true || false,
    movies: [1, 2, 3], // With the individual movies
  },
  movies: {
    [id]: {
      // All of the movie data would go here
    }
  }
}
```

This is the rough script I used to download the data (minus my api key):

```bash
mkdir -p data/movies
curl -o data/index.json https://api.themoviedb.org/3/movie/popular?api_key\=<<API_KEY>>
curl -o data/movies/299534.json https://api.themoviedb.org/3/movie/299534?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/447404.json https://api.themoviedb.org/3/movie/447404?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/458156.json https://api.themoviedb.org/3/movie/458156?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/543103.json https://api.themoviedb.org/3/movie/543103?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/299537.json https://api.themoviedb.org/3/movie/299537?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/456740.json https://api.themoviedb.org/3/movie/456740?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/280960.json https://api.themoviedb.org/3/movie/280960?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/531309.json https://api.themoviedb.org/3/movie/531309?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/449562.json https://api.themoviedb.org/3/movie/449562?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/287947.json https://api.themoviedb.org/3/movie/287947?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/438650.json https://api.themoviedb.org/3/movie/438650?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/299536.json https://api.themoviedb.org/3/movie/299536?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/245891.json https://api.themoviedb.org/3/movie/245891?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/576393.json https://api.themoviedb.org/3/movie/576393?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/166428.json https://api.themoviedb.org/3/movie/166428?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/157433.json https://api.themoviedb.org/3/movie/157433?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/537915.json https://api.themoviedb.org/3/movie/537915?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/450465.json https://api.themoviedb.org/3/movie/450465?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/284054.json https://api.themoviedb.org/3/movie/284054?api_key=<<API_KEY>>&append_to_response=videos
curl -o data/movies/375588.json https://api.themoviedb.org/3/movie/375588?api_key=<<API_KEY>>&append_to_response=videos
```

## Licences

This demo uses a variety of open source tools including:

* Gastby
* Font Awesome
