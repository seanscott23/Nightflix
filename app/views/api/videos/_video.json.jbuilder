
json.set! video.id do 
    json.title video.title
    json.videoUrl url_for(video.video)
    json.photoUrl url_for(video.photo)
end