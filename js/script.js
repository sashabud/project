"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?","");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?","");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





function rememberMyFilms() {
        for (let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

/* rememberMyFilms(); */


function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >=30 && personalMovieDB.count < 60) {
        console.log('Вы Киноман!');
    } else if (personalMovieDB.count >=60 && personalMovieDB.count < 110) {
        console.log('Вы Киноманьяк!');
    }
    else if (personalMovieDB.count >=110) {
        console.log('Мне кажется или вы пиздите!?))');
    } else {
        console.log("Епрст ты шо вписал Вася!!!");
    }

}

/* detectPersonalLevel(); */

function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }

}

showMyDB(personalMovieDB.privat);

 function writeYorGenres() {
     for (let i = 1; i <=3; i++) {
         personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
       
     }
 }

writeYorGenres();