export const fetchGenre = () => {
  $.ajax({
    method: 'GET',
    url: `/api/genres`
  })
}