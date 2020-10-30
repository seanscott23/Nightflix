export const fetchList = (user_id) => {
 return $.ajax({
    method: "GET",
    url: `/api/users/${user_id}/mylist`
  });
};

export const addListItem = (video_id, user_id) => {
  return  $.ajax({
      method: "POST",
      url: `/api/users/${user_id}/mylist`,
      data: {mylist: {video_id, user_id}}
    });
}

export const removeListItem = (video_id, user_id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${user_id}/mylist/${video_id}`,
    data: {mylist: {video_id, user_id}}
  })
}