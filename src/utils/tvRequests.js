const API_KEY = process.env.REACT_APP_API_KEY;

const tvRequests = [
  {
    id: 1,
    linkId: "tvActionAdventure",
    genre: "Action & Adventure",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  },
  {
    id: 2,
    linkId: "tvAnimationTv",
    genre: "Animation",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  },
  {
    id: 3,
    linkId: "tvComedy",
    genre: "Comedy",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  },
  {
    id: 4,
    linkId: "tvCrime",
    genre: "Crime",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  },
  {
    id: 5,
    linkId: "tvDocumentary",
    genre: "Documentary",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  },
  {
    id: 6,
    linkId: "tvDrama",
    genre: "Drama",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  },
  {
    id: 7,
    linkId: "tvFamily",
    genre: "Family",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
  },
  {
    id: 8,
    linkId: "tvKids",
    genre: "Kids",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
  },
  {
    id: 9,
    linkId: "tvMystery",
    genre: "Mystery",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  },
  {
    id: 10,
    linkId: "tvNews",
    genre: "News",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10763`,
  },
  {
    id: 11,
    linkId: "tvReality",
    genre: "Reality",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
  },
  {
    id: 12,
    linkId: "tvSciFi",
    genre: "Sci-Fi & Fantasy",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  },
  {
    id: 13,
    linkId: "tvSoap",
    genre: "Soap",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10766`,
  },
  {
    id: 14,
    linkId: "tvTalk",
    genre: "Talk",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10767`,
  },
  {
    id: 15,
    linkId: "tvWarPolitics",
    genre: "War & Politics",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
  },
  {
    id: 16,
    linkId: "tvWestern",
    genre: "Western",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
  },
];

export default tvRequests;
