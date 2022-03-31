import { data, FilmType } from "./data"

//1. Собрать в массив все жанры фильмов (без повторения)
const zadacha1 = (movies: FilmType[]): string[] => {
  const genres = movies.flatMap((item) => item.genre);
  return [...new Set(genres)];
}
//console.log(zadacha1(data));

//2.Собрать в массив всех актеров всех фильмов (без повторения)

const zadacha2 = (movies: FilmType[]): string[] => {
  const actor = movies.flatMap((item) => item.actors);
  return [...new Set(actor)];
}
//console.log(zadacha2(data));


//3. Отсортировать фильмы по рейтингу по убыванию
const zadacha3 = (movies: FilmType[]): FilmType[] => {
  return [...movies].sort((a, b) => b.imdbRating - a.imdbRating);
}
//console.log(zadacha3(data));

//4. Создать новый массив, где объекты фильмов будут состоятьиз следующих полей:
//d, title, released, plot
type FilmNewType = {
  id: number;
  title: string;
  released: string;
  plot: string;
}

const zadacha4 = (movies: FilmType[]): FilmNewType[] => {
  return movies.map((item) => ({
    id: item.id,
    title: item.title,
    released: item.released,
    plot: item.plot,
  }));
}
//console.log(zadacha4(data));

//5. Создать функцию, которая бы принимала массив фильмов и число. А результатом этой функции должен быть
//отфильтрованный массив, с фильмами где число равно году выхода фильма.

const zadacha5 = (movies: FilmType[], year: number): FilmType[] => {
  return movies.filter((item) => item.year === year);
}
//console.log(zadacha5(data, 2021));

//6. Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть новый
// отфильтрованный массив, с фильмами, где строка входит в название фильма

/*const zadacha6 = (movies: FilmType[], name: string): FilmType[] => {
  return movies.filter((item) => item.title === name);
}
console.log(zadacha6(data, 'Harry Potter and the Deathly Hallows: Part 2'));*/

const zadacha6 = (movies: FilmType[], filmtitle: string): FilmType[] => {
  return movies.filter((item) => item.title.toLowerCase().includes(filmtitle.toLowerCase()));
}
//console.log(zadacha6(data, ' the Deathly'));

// 7. Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть
//отфильтрованный массив, с фильмами где строка входит в название фильма или в его сюжет.

const zadacha7 = (movies: FilmType[], text: string): FilmType[] => {
  return movies.filter((item) => item.title.toLowerCase().includes(text.toLowerCase()) ||
    item.plot.toLowerCase().includes(text.toLowerCase()));
}
console.log(zadacha7(data, ' Skywalker'));
