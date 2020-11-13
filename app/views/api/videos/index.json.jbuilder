@videos.each do |video|
    json.set! video.id do 
        json.id   video.id
        json.title video.title
        json.video_type video.video_type
        json.genre video.genre
        json.videoUrl url_for(video.video)
    end
end
