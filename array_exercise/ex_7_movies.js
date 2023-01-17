console.clear();
const movies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.7},
    { title: 'c', year: 2018, rating: 3},
    { title: 'd', year: 2017, rating: 4.5},
];

let result = getMovies(movies);
console.log(result);

function getMovies(movies) {
    let list = movies
        .filter( movie => movie.year == 2018 && movie.rating > 4)
        .sort((a, b) => a.rating - b.rating)
        .reverse()
        .map(obj => obj.title);
    return list;
}