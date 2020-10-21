json.set! video.id do 
    json.title video.title
    json.videoUrl url_for(video.video)
end