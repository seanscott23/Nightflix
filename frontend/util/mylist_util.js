export const fetchLists = () => {
 return $.ajax({
    method: "GET",
    url: `/api/mylist`,
  });
};

export const addListItem = (video_id) => {
  return  $.ajax({
      method: "POST",
      url: `/api/mylist`,
      data: {mylist: {video_id}}
    });
}