const API_KEY = process.env.REACT_APP_API_KEY;

const movieRequests = [
  {
    id: 1,
    linkId: "movieTrending",
    genre: "Trending this week",
    url: `/trending/all/week?api_key=${API_KEY}&with_original_language`,
  },
  {
    id: 2,
    linkId: "movieTopRated",
    genre: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    id: 3,
    linkId: "movieAction",
    genre: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    id: 4,
    linkId: "movieAdventure",
    genre: "Adventure",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  },
  {
    id: 5,
    linkId: "movieAnimation",
    genre: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  {
    id: 6,
    linkId: "movieComedy",
    genre: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    id: 7,
    linkId: "movieCrime",
    genre: "Crime",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  },
  {
    id: 8,
    linkId: "movieDocumentary",
    genre: "Documentary",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  {
    id: 9,
    linkId: "movieDrama",
    genre: "Drama",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  },
  {
    id: 10,
    linkId: "movieFamily",
    genre: "Family",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  },
  {
    id: 11,
    linkId: "movieFantasy",
    genre: "Fantasy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  },
  {
    id: 12,
    linkId: "movieHistory",
    genre: "History",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  },
  {
    id: 13,
    linkId: "movieHorror",
    genre: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    id: 14,
    linkId: "movieMusic",
    genre: "Music",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  },
  {
    id: 15,
    linkId: "movieMystery",
    genre: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  {
    id: 16,
    linkId: "movieRomance",
    genre: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    id: 17,
    linkId: "movieSciFi",
    genre: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },

  {
    id: 18,
    linkId: "movieTvMovie",
    genre: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
  {
    id: 19,
    linkId: "movieThriller",
    genre: "Thriller",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  },
  {
    id: 20,
    linkId: "movieWar",
    genre: "War",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  },
  {
    id: 21,
    linkId: "movieWestern",
    genre: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
];

export default movieRequests;
