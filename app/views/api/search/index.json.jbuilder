@videos.each do |video|
    json.set! video.id do 
        json.id   video.id
        json.title video.title
        json.genre video.genre
        json.videoUrl url_for(video.video)
        json.photoUrl url_for(video.photo)
    end
end
