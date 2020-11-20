
json.set! video.id do 
    json.title video.title
    json.id   video.id
    json.video_type video.video_type
    json.genre video.genre
    json.videoUrl url_for(video.video)
    json.photoUrl url_for(video.photo)
end