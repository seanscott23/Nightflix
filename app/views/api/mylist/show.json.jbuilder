json.set! @mylist.video_id do 
    json.title @mylist.video.title
    json.videoUrl url_for(@mylist.video.video)
end