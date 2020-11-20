# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Video.destroy_all
User.destroy_all

User.create!(username: 'Watcher', password: 'Watcher')





demo_video1 = Video.create!(title: 'The Hundred Foot Journey', genre: "Romance, Drama", video_type: "movie")
video1 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/100_foot_journey.mp4')
demo_video1.video.attach(io: video1, filename: '100_foot_journey.mp4')
photo1 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/hundredfootjourney.jpg')
demo_video1.photo.attach(io: photo1, filename: '100_foot_journey.jpg')

demo_video2 = Video.create!(title: '50 First Dates', genre: "Romance, Comedy", video_type: "movie")
video2 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/50_first_dates.mp4')
demo_video2.video.attach(io: video2, filename: '50_first_dates.mp4')
photo2 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/50firstdates.jpg')
demo_video2.photo.attach(io: photo2, filename: '50-first-dates.jpg')

demo_video3 = Video.create!(title: 'Alita Battle Angel', genre: "Action, Science Fiction", video_type: "movie")
video3 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Alita_battle_angel.mp4')
demo_video3.video.attach(io: video3, filename: 'Alita_battle_angel.mp4')
photo3 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Alita.jpeg')
demo_video3.photo.attach(io: photo3, filename: 'alita.jpg')

demo_video4 = Video.create!(title: 'Arrival', genre: "Science Fiction", video_type: "movie")
video4 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Arrival.mp4')
demo_video4.video.attach(io: video4, filename: 'Arrival.mp4')
photo4 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/arrival.jpg')
demo_video4.photo.attach(io: photo4, filename: 'arrival.jpg')

demo_video5 = Video.create!(title: 'Forrest Gump', genre: "Comedy, Drama", video_type: "movie")
video5 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Forrest_gump.mp4')
demo_video5.video.attach(io: video5, filename: 'Forrest_gump.mp4')
photo5 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/forrestgump.jpg')
demo_video5.photo.attach(io: photo5, filename: 'forrestgump.jpg')

demo_video6 = Video.create!(title: 'Good Will Hunting', genre: "Drama, Romance", video_type: "movie")
video6 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Good_will_hunting.mp4')
demo_video6.video.attach(io: video6, filename: 'Good_will_hunting.mp4')
photo6 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/goodwillhunting.jpg')
demo_video6.photo.attach(io: photo6, filename: 'goodwillhunting.jpg')

demo_video7 = Video.create!(title: 'Hook', genre: "Romance, Fantasy, Action", video_type: "movie")
video7 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Hook.mp4')
demo_video7.video.attach(io: video7, filename: 'Hook.mp4')
photo7 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/hook.jpg')
demo_video7.photo.attach(io: photo7, filename: 'hook.jpg')

demo_video8 = Video.create!(title: 'Interstellar', genre: "Science Fiction, Adventure", video_type: "movie")
video8 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Interstellar.mp4')
demo_video8.video.attach(io: video8, filename: 'Interstellar.mp4')
photo8 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/interstellar.jpg')
demo_video8.photo.attach(io: photo8, filename: 'interstellar.jpg')

demo_video9 = Video.create!(title: 'Irishman', genre: "Crime, Drama", video_type: "movie")
video9 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Irishman.mp4')
demo_video9.video.attach(io: video9, filename: 'Irishman.mp4')
photo9 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/irishman.jpg')
demo_video9.photo.attach(io: photo9, filename: 'irishman.jpg')

demo_video10 = Video.create!(title: 'Limitless', genre: "Action", video_type: "movie")
video10 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Limitless.mp4')
demo_video10.video.attach(io: video10, filename: 'Limitless.mp4')
photo10 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/limitless.jpg')
demo_video10.photo.attach(io: photo10, filename: 'limitless.jpg')

demo_video11 = Video.create!(title: 'Matrix', genre: "Action, Science Fiction", video_type: "movie")
video11 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Matrix.mp4')
demo_video11.video.attach(io: video11, filename: 'Matrix.mp4')
photo11 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/matrix.jpg')
demo_video11.photo.attach(io: photo11, filename: 'matrix.jpg')

demo_video12 = Video.create!(title: 'The Dark Knight', genre: "Action, Adventure", video_type: "movie")
video12 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/The_dark_knight.mp4')
demo_video12.video.attach(io: video12, filename: 'The_dark_knight.mp4')
photo12 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/darkKnight.jpg')
demo_video12.photo.attach(io: photo12, filename: 'darkknight.jpg')

demo_video13 = Video.create!(title: 'Harry Potter & The Sorcerers Stone', genre: "Fantasy, Adventure", video_type: "movie")
video13 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/harry-potter-and-the-sorcerer-s-video-360p-mp4.mp4')
demo_video13.video.attach(io: video13, filename: 'harry-potter-and-the-sorcerer-s-video-360p-mp4.mp4')
photo13 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/harrypotter.jpeg')
demo_video13.photo.attach(io: photo13, filename: 'harrypotter.jpg')

demo_video14 = Video.create!(title: 'The Pursuit of Happiness', genre: "Drama", video_type: "movie")
video14 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/pursuit_of_happiness.mp4')
demo_video14.video.attach(io: video14, filename: 'pursuit_of_happiness.mp4')
photo14 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/the-pursuit-of-happyness.jpg')
demo_video14.photo.attach(io: photo14, filename: 'pursuitofhappy.jpg')


demo_video15 = Video.create!(title: 'Avatar', genre: "Action, Fantasy", video_type: "movie")
video15 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/AVATAR+Official+Final+Trailer+(2009)+James+Cameron+Sci-Fi+Action+Movie+HD.mp4')
demo_video15.video.attach(io: video15, filename: 'Avatar.mp4')
photo15 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/avatar.jpg')
demo_video15.photo.attach(io: photo15, filename: 'avatar.jpg')

demo_video16 = Video.create!(title: 'Bohemian Rhapsody', genre: "Drama", video_type: "movie")
video16 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Bohemian+Rhapsody+Official+Trailer+%5BHD%5D+20th+Century+FOX.mp4')
demo_video16.video.attach(io: video16, filename: 'Bohemian-Rhapsody.mp4')
photo16 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/bohemianrhapsody.jpg')
demo_video16.photo.attach(io: photo16, filename: 'bohemian.jpg')

demo_video17 = Video.create!(title: 'Catch Me If You Can', genre: "Crime", video_type: "movie")
video17 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Catch+Me+if+You+Can+(2002)+Trailer+%231+Movieclips+Classic+Trailers.mp4')
demo_video17.video.attach(io: video17, filename: 'Catch Me If You Can.mp4')
photo17 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/catchmeifyoucan.jpg')
demo_video17.photo.attach(io: photo17, filename: 'catchmeifyoucan.jpg')

demo_video18 = Video.create!(title: 'Chef', genre: "Drama, Comedy", video_type: "movie")
video18 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Chef+Official+Trailer+%231+(2014)+-+Scarlett+Johansson%2C+Robert+Downey+Jr.+Movie+HD.mp4')
demo_video18.video.attach(io: video18, filename: 'Chef.mp4')
photo18 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/chef.jpg')
demo_video18.photo.attach(io: photo18, filename: 'chef.jpg')

demo_video19 = Video.create!(title: 'Coach Carter', genre: "Drama", video_type: "movie")
video19 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Coach+Carter+(2005)+Trailer+%231+Movieclips+Classic+Trailers.mp4')
demo_video19.video.attach(io: video19, filename: 'Coach-Carter.mp4')
photo19 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/coachcarter.jpg')
demo_video19.photo.attach(io: photo19, filename: 'coachcarter.jpg')

demo_video20 = Video.create!(title: 'Dallas Buyers Club', genre: "Drama", video_type: "movie")
video20 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Dallas+Buyers+Club+-+Official+Trailer+(HD)+Matthew+McConaughey.mp4')
demo_video20.video.attach(io: video20, filename: 'Dallay-Buyers-Club.mp4')
photo20 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/dallasbuyersclub.jpg')
demo_video20.photo.attach(io: photo20, filename: 'dallasbuyersclub.jpg')

demo_video21 = Video.create!(title: 'Gladiator', genre: "Action, Adventure", video_type: "movie")
video21 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Gladiator+trailer.mp4')
demo_video21.video.attach(io: video21, filename: 'Gladiator.mp4')
photo21 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/gladiator.jpg')
demo_video21.photo.attach(io: photo21, filename: 'gladiator.jpg')

demo_video22 = Video.create!(title: 'Green Book', genre: "Comedy, Drama", video_type: "movie")
video22 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Green+Book+-+Official+Trailer+%5BHD%5D.mp4')
demo_video22.video.attach(io: video22, filename: 'Green-Book.mp4')
photo22 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/greenbook.jpg')
demo_video22.photo.attach(io: photo22, filename: 'greenbook.jpg')

demo_video23 = Video.create!(title: "Molly's Game", genre: "Comedy, Drama", video_type: "movie")
video23 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Molly's+Game+Official+Trailer+Own+it+Now+on+Digital+HD%2C+Blu-ray+%26+DVD.mp4")
demo_video23.video.attach(io: video23, filename: 'Mollys-Game.mp4')
photo23 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/mollysgame.jpg')
demo_video23.photo.attach(io: photo23, filename: 'mollys-game.jpg')

demo_video24 = Video.create!(title: 'Moneyball', genre: "Drama", video_type: "movie")
video24 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Moneyball+(2011)+Movie+Trailer+-+HD+-+Brad+Pitt.mp4")
demo_video24.video.attach(io: video24, filename: 'Moneyball.mp4')
photo24 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/moneyball.jpg')
demo_video24.photo.attach(io: photo24, filename: 'moneyball.jpg')

demo_video42 = Video.create!(title: 'Mrs. Doubtfire', genre: "Comedy", video_type: "movie")
video42 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Mrs.+Doubtfire+(1993)+Trailer+%231+Movieclips+Classic+Trailers+(1).mp4")
demo_video42.video.attach(io: video42, filename: 'Mrs.-Doubtfire.mp4')
photo42 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/mrsdoubtfire.jpg')
demo_video42.photo.attach(io: photo42, filename: 'mrs-doubtfire.jpg')

demo_video25 = Video.create!(title: 'Cars', genre: "Comedy, Fantasy", video_type: "movie")
video25 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Official+Trailer+Cars+(2006).mp4")
demo_video25.video.attach(io: video25, filename: 'Cars.mp4')
photo25 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/cars.jpg')
demo_video25.photo.attach(io: photo25, filename: 'cars.jpg')

demo_video26 = Video.create!(title: 'Slumdog Millionaire', genre: "Drama, Romance", video_type: "movie")
video26 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/SLUMDOG+MILLIONAIRE+-+Trailer.mp4")
demo_video26.video.attach(io: video26, filename: 'Slumdog-Millionaire.mp4')
photo26 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/slumdog_millionaire.jpg')
demo_video26.photo.attach(io: photo26, filename: 'slumdog-millionaire.jpg')

demo_video27 = Video.create!(title: 'Spirited Away', genre: "Fantasy", video_type: "movie")
video27 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Spirited+Away+-+Official+Trailer+(1).mp4")
demo_video27.video.attach(io: video27, filename: 'Spirited-Away.mp4')
photo27 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/spiritedaway.jpg')
demo_video27.photo.attach(io: photo27, filename: 'spiritedaway.jpg')

demo_video28 = Video.create!(title: 'Spotlight', genre: "Drama", video_type: "movie")
video28 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Spotlight+TRAILER+1+(2015)+-+Mark+Ruffalo%2C+Michael+Keaton+Movie+HD.mp4")
demo_video28.video.attach(io: video28 , filename: 'Spotlight.mp4')
photo28 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/spotlight.jpg')
demo_video28.photo.attach(io: photo28, filename: 'spotlight.jpg')

demo_video29 = Video.create!(title: 'The Lord Of The Rings: Return Of The King', genre: "Fantasy", video_type: "movie")
video29 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/The+Lord+of+the+Rings+The+Return+of+the+King+Official+Trailer+%231+-+(2003)+HD.mp4")
demo_video29.video.attach(io: video29, filename: 'Lord-of-the-rings.mp4')
photo29 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/lordofrings.jpg')
demo_video29.photo.attach(io: photo29, filename: 'Lord-of-the-rings.jpg')

demo_video30 = Video.create!(title: 'The Lincoln Lawyer', genre: "Crime", video_type: "movie")
video30 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/The+Lincoln+Lawyer+(2011)+-+Official+Trailer+%231.mp4")
demo_video30.video.attach(io: video30, filename: 'The-Lincoln-Lawyer.mp4')
photo30 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/lincolnlawyer.jpg')
demo_video30.photo.attach(io: photo30, filename: 'The-Lincoln-Lawyer.jpg')

demo_video31 = Video.create!(title: 'Willy Wonka', genre: "Fantasy", video_type: "movie")
video31 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/willy_wonka.mp4")
demo_video31.video.attach(io: video31, filename: 'Willy-Wonka.mp4')
photo31 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/willywonka.jpg')
demo_video31.photo.attach(io: photo31, filename: 'Willy-Wonka.jpg')

demo_video32 = Video.create!(title: 'The Good Place', genre: "Fantasy, Comedy, Romance", video_type: "TV")
video32 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/The+Good+Place+Season+1+Trailer+%5BHD%5D+Kristen+Bell%2C+Tiya+Sircar%2C+D'Arcy+Carden.mp4")
demo_video32.video.attach(io: video32, filename: 'The-Good-Place.mp4')
photo32 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/thegoodplace.jpg')
demo_video32.photo.attach(io: photo32, filename: 'The-Good-Place.jpg')


demo_video33 = Video.create!(title: 'Brooklyn Nine Nine', genre: "Comedy, Romance, Crime", video_type: "TV")
video33 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/BROOKLYN+NINE-NINE+-+Official+Trailer.mp4")
demo_video33.video.attach(io: video33, filename: 'Brooklyn-Nine-Nine.mp4')
photo33 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/brooklyn.jpg')
demo_video33.photo.attach(io: photo33, filename: 'Brooklyn-Nine-Nine.jpg')

demo_video34 = Video.create!(title: 'Lucifer', genre: "Fantasy, Science Fiction, Crime", video_type: "TV")
video34 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Official+Trailer+Season+1+LUCIFER.mp4")
demo_video34.video.attach(io: video34, filename: 'Lucifer.mp4')
photo34 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/lucifer.jpeg')
demo_video34.photo.attach(io: photo34, filename: 'Lucifer.jpg')

demo_video35 = Video.create!(title: "Grey's Anatomy", genre: "Romance, Drama", video_type: "TV")
video35 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Grey's+Anatomy+Trailer.mp4")
demo_video35.video.attach(io: video35, filename: 'Greys-Anatomy.mp4')
photo35 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/greysanatomy.jpg')
demo_video35.photo.attach(io: photo35, filename: 'Greys-Anatomy.jpg')

demo_video36 = Video.create!(title: "Punisher", genre: "Crime, Science Fiction, Action", video_type: "TV")
video36 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Marvel's+The+Punisher+Season+1+Trailer+%231+(2017)+TV+Trailer+Movieclips+Trailers.mp4")
demo_video36.video.attach(io: video36, filename: 'Punisher.mp4')
photo36 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/punisher.jpg')
demo_video36.photo.attach(io: photo36, filename: 'Punisher.jpg')

demo_video37 = Video.create!(title: "Stranger Things", genre: "Romance, Science Fiction", video_type: "TV")
video37 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Stranger+Things+Official+Final+Trailer+Netflix.mp4")
demo_video37.video.attach(io: video37, filename: 'Stranger-Things.mp4')
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/strangerthings.jpg')
demo_video37.photo.attach(io: file, filename: 'Stranger-Things.jpg')

demo_video38 = Video.create!(title: "Schitt's Creek", genre: "Comedy, Romance, Drama", video_type: "TV")
video38 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Schitt's+Creek+Season+1+Trailer.mp4")
demo_video38.video.attach(io: video38, filename: 'Schitts-Creek.mp4')
photo38 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/schitts-creek.jpg')
demo_video38.photo.attach(io: photo38, filename: 'Schitts-Creek.jpg')

demo_video39 = Video.create!(title: "The Mandalorian", genre: "Science Fiction, Action", video_type: "TV")
video39 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/The+Mandalorian+Official+Trailer+Disney%2B+Streaming+Nov.+12.mp4")
demo_video39.video.attach(io: video39, filename: 'The-Mandalorian.mp4')
photo39 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/mandalorian.jpg')
demo_video39.photo.attach(io: photo39, filename: 'The-Mandalorian.jpg')

demo_video40 = Video.create!(title: "Breaking-Bad", genre: "Crime", video_type: "TV")
video40 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Breaking+Bad+Trailer+(First+Season).mp4")
demo_video40.video.attach(io: video40, filename: 'Breaking-Bad.mp4')
photo40 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/breaking-bad.jpg')
demo_video40.photo.attach(io: photo40, filename: 'Breaking-Bad.jpg')

demo_video41 = Video.create!(title: "Sherlock", genre: "Crime, Drama", video_type: "TV")
video41 = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Sherlock+Trailer+-+Season+1+%5BTEH%5D.mp4")
demo_video41.video.attach(io: video41, filename: 'Sherlock.mp4')
photo41 = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/sherlock.jpg')
demo_video41.photo.attach(io: photo41, filename: 'Sherlock.jpg')