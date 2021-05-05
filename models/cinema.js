const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfFilmsTitles = function (films) {

//films.map - on the films object, call the map function
// map function takes another function as an argument - (film) => film.title)
  return films.map((film) => film.title);
 
}
// Cinema.prototype.filmTitles = function () {
//   return this.films.map((film) => {
//     return film.title;
//   });
// };

Cinema.prototype.findFilmByTitle = function (title){
  return this.films.filter((film) => film.title === title);
};

Cinema.prototype.filterFilmByGenre = function (genre){
  return this.films.filter((film) => film.genre === genre);
};

Cinema.prototype.filterFilmByYear = function (year){
  return this.films.filter((film) => film.year === year);
};

Cinema.prototype.checkLength = function (length){
  return this.films.filter((film) => film.length >= length);
};

Cinema.prototype.calculateRunTotal = function () {
  return this.films.reduce((runningTotal, film) => {
   return runningTotal += film.length
  }, 0)
  
};

module.exports = Cinema;
