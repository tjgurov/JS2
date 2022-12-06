"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


// const movie = prompt('Один из последних просмотренных фильмов?', '');
// const rate = prompt('На сколько оцените его?', '');
// personalMovieDB.movies[movie] = rate;

// movie = prompt('Один из последних просмотренных фильмов?', '');
// rate = prompt('На сколько оцените его?', '');
// personalMovieDB.movies[movie] = rate;

console.log(personalMovieDB);


let responses = 0;

while (responses < 2) {
  const movie = prompt('Один из последних просмотренных фильмов?', '');
  const rate = prompt('На сколько оцените его?', '');
  if ( movie.length == 0 || movie.length > 50 ||  movie == null || rate == null || rate.length == 0) {
    continue;
  }
  responses++;
  personalMovieDB.movies[movie] = rate;
}

if (numberOfFilms < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms <= 30) {
  alert('Вы классический зритель');
} else if (numberOfFilms > 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}



