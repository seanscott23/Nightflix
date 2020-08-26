export const VideoGenre = video => (
    $.ajax({
        method: 'GET',
        url: `/api/videos/${video.id}`
    })
);
