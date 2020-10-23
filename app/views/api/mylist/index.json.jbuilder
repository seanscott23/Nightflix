@mylist.each do |like|
    json.set! like.id do 
        json.id   like.video.id
        json.title like.video.title
        json.genre like.video.genre
        json.videoUrl url_for(like.video.video)
    end
end
