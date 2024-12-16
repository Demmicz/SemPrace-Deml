let titles_shows = document.querySelector(".top-picks__titles--TVshows");
let images_shows = Array.from(titles_shows.querySelectorAll("img"));
let index_shows = 0;

let titles_movies = document.querySelector(".top-picks__titles--movies");
let images_movies = Array.from(titles_movies.querySelectorAll("img"));
let index_movies = 0;

let titles_videogames = document.querySelector(".top-picks__titles--videogames");
let images_videogames = Array.from(titles_videogames.querySelectorAll("img"));
let index_videogames = 0;



document.querySelector(".top-picks--TVshows__right").addEventListener("click", () => {
    let clone = images_shows[index_shows].cloneNode(true);
    titles_shows.appendChild(clone);
    const image_width = images_shows[index_shows].clientWidth + 30;
    titles_shows.scrollLeft += image_width;

    if ((index_shows + 1) == images_shows.length) {
        index_shows = 0;
    } else {
        index_shows++;
    }
});
document.querySelector(".top-picks--TVshows__left").addEventListener("click", () => {
    if (titles_shows.scrollLeft != 0) {
        const image_width = images_shows[index_shows - 1].clientWidth + 30;
        titles_shows.scrollLeft -= image_width;


        if (index_shows == 0) {
            index_shows = images_shows.length - 1;
        } else {
            index_shows--;
        }
    }
});



console.log(titles_movies);


document.querySelector(".top-pics--movies__right").addEventListener("click", () => {
    let clone = images_movies[index_movies].cloneNode(true);
    titles_movies.appendChild(clone);
    const image_width = images_movies[index_movies].clientWidth + 30;
    titles_movies.scrollLeft += image_width;

    if ((index_movies + 1) == images_movies.length) {
        index_movies = 0;
    } else {
        index_movies++;
    }
});
document.querySelector(".top-pics--movies__left").addEventListener("click", () => {
    if (titles_movies.scrollLeft != 0) {
        const image_width = images_movies[index_movies - 1].clientWidth + 30;
        titles_movies.scrollLeft -= image_width;


        if (index_movies == 0) {
            index_movies = images_movies.length - 1;
        } else {
            index_movies--;
        }
    }
    console.log(index_movies);
});


document.querySelector(".top-picks--videogames__right").addEventListener("click", () => {
    let clone = images_videogames[index_videogames].cloneNode(true);
    titles_videogames.appendChild(clone);
    const image_width = images_videogames[index_videogames].clientWidth + 30;
    titles_videogames.scrollLeft += image_width;

    if ((index_videogames + 1) == images_videogames.length) {
        index_videogames = 0;
    } else {
        index_videogames++;
    }
});
document.querySelector(".top-picks--videogames__left").addEventListener("click", () => {
    if (titles_videogames.scrollLeft != 0) {
        const image_width = images_videogames[index_videogames - 1].clientWidth + 30;
        titles_videogames.scrollLeft -= image_width;


        if (index_videogames == 0) {
            index_videogames = images_videogames.length - 1;
        } else {
            index_videogames--;
        }
    }
});