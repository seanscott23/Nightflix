import * as APIUtil from "../util/genre_util";

export const Fetch_Genres = "Fetch_Genres";

const receiveGenres = genres => ({
  type: Fetch_Genres,
  genres
})

export const requestGenres = () => dispatch => {
  return (
    APIUtil.fetchGenre().then(genres => dispatch(receiveGenres(genres)))
  )
}