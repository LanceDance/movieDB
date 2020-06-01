import { picture, imgUrl } from "./pictures";

// find out the name of the movie
export function findName(result) {
let moviename = ''
    if (result.title) {
        moviename = result.title
    }
    else {
       moviename = result.name
    }
    return moviename
}

//find out what kind of genre is only 4 genres for now (movie, tv, family, documentary)
export function FindGenre(result) {
    let genre = ''

    if (result.genre_ids.includes(99)) {
        genre = 'documentary'
    }
    else if (result.genre_ids.includes(10751)) {
        genre = 'family'
    }
    else {
        genre = result.media_type
    }
    return genre
}

//find poster if not use picture
export function FindPoster(result) {
    let poster = ''
    if (result.poster_path === null) {
        poster = picture
    }
    else {
        poster = imgUrl+result.poster_path
    }
    return poster
}