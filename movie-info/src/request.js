
const api = '6e1ab1cb41b30882be3f910fb7aeee1a';

export const requests = {
    popular: `/popular?api_key=${api}&language=en-US`,
    top_rated: `/top_rated?api_key=${api}&language=en-US`,
    upcoming: `/upcoming?api_key=${api}&language=en-US`,
    getAction: `/discover/movie?api_key=${api}&language=en-US&with_genres=28`,
    getDrama: `/discover/movie?api_key=${api}&language=en-US&with_genres=18`,
    getComedy: `/discover/movie?api_key=${api}&language=en-US&with_genres=35`,
    getFamily: `/discover/movie?api_key=${api}&language=en-US&with_genres=10751`,
}