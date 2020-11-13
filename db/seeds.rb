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
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/100_foot_journey.mp4')
demo_video1.video.attach(io: file, filename: '100_foot_journey.mp4')

demo_video2 = Video.create!(title: '50 First Dates', genre: "Romance, Comedy", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/50_first_dates.mp4')
demo_video2.video.attach(io: file, filename: '50_first_dates.mp4')

demo_video3 = Video.create!(title: 'Alita Battle Angel', genre: "Action, Science Fiction", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Alita_battle_angel.mp4')
demo_video3.video.attach(io: file, filename: 'Alita_battle_angel.mp4')

demo_video4 = Video.create!(title: 'Arrival', genre: "Science Fiction", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Arrival.mp4')
demo_video4.video.attach(io: file, filename: 'Arrival.mp4')

demo_video5 = Video.create!(title: 'Forrest Gump', genre: "Comedy, Drama", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Forrest_gump.mp4')
demo_video5.video.attach(io: file, filename: 'Forrest_gump.mp4')

demo_video6 = Video.create!(title: 'Good Will Hunting', genre: "Drama, Romance", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Good_will_hunting.mp4')
demo_video6.video.attach(io: file, filename: 'Good_will_hunting.mp4')

demo_video7 = Video.create!(title: 'Hook', genre: "Romance, Fantasy, Action", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Hook.mp4')
demo_video7.video.attach(io: file, filename: 'Hook.mp4')

demo_video8 = Video.create!(title: 'Interstellar', genre: "Science Fiction, Adventure", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Interstellar.mp4')
demo_video8.video.attach(io: file, filename: 'Interstellar.mp4')

demo_video9 = Video.create!(title: 'Irishman', genre: "Crime, Drama", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Irishman.mp4')
demo_video9.video.attach(io: file, filename: 'Irishman.mp4')

demo_video10 = Video.create!(title: 'Limitless', genre: "Action", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Limitless.mp4')
demo_video10.video.attach(io: file, filename: 'Limitless.mp4')

demo_video11 = Video.create!(title: 'Matrix', genre: "Action, Science Fiction", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Matrix.mp4')
demo_video11.video.attach(io: file, filename: 'Matrix.mp4')

demo_video12 = Video.create!(title: 'The Dark Knight', genre: "Action, Adventure", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/The_dark_knight.mp4')
demo_video12.video.attach(io: file, filename: 'The_dark_knight.mp4')

demo_video13 = Video.create!(title: 'Harry Potter & The Sorcerers Stone', genre: "Fantasy, Adventure", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/harry-potter-and-the-sorcerer-s-video-360p-mp4.mp4')
demo_video13.video.attach(io: file, filename: 'harry-potter-and-the-sorcerer-s-video-360p-mp4.mp4')

demo_video14 = Video.create!(title: 'The Pursuit of Happiness', genre: "Drama", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/pursuit_of_happiness.mp4')
demo_video14.video.attach(io: file, filename: 'pursuit_of_happiness.mp4')


demo_video15 = Video.create!(title: 'Avatar', genre: "Action, Fantasy", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/AVATAR+Official+Final+Trailer+(2009)+James+Cameron+Sci-Fi+Action+Movie+HD.mp4')
demo_video15.video.attach(io: file, filename: 'Avatar.mp4')

demo_video16 = Video.create!(title: 'Bohemian Rhapsody', genre: "Drama", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Bohemian+Rhapsody+Official+Trailer+%5BHD%5D+20th+Century+FOX.mp4')
demo_video16.video.attach(io: file, filename: 'Bohemian-Rhapsody.mp4')

demo_video17 = Video.create!(title: 'Catch Me If You Can', genre: "Crime", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Catch+Me+if+You+Can+(2002)+Trailer+%231+Movieclips+Classic+Trailers.mp4')
demo_video17.video.attach(io: file, filename: 'Catch Me If You Can.mp4')

demo_video18 = Video.create!(title: 'Chef', genre: "Drama, Comedy", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Chef+Official+Trailer+%231+(2014)+-+Scarlett+Johansson%2C+Robert+Downey+Jr.+Movie+HD.mp4')
demo_video18.video.attach(io: file, filename: 'Chef.mp4')

demo_video19 = Video.create!(title: 'Coach Carter', genre: "Drama", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Coach+Carter+(2005)+Trailer+%231+Movieclips+Classic+Trailers.mp4')
demo_video19.video.attach(io: file, filename: 'Coach-Carter.mp4')

demo_video20 = Video.create!(title: 'Dallas Buyers Club', genre: "Drama", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Dallas+Buyers+Club+-+Official+Trailer+(HD)+Matthew+McConaughey.mp4')
demo_video20.video.attach(io: file, filename: 'Dallay-Buyers-Club.mp4')

demo_video21 = Video.create!(title: 'Gladiator', genre: "Action, Adventure", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Gladiator+trailer.mp4')
demo_video21.video.attach(io: file, filename: 'Gladiator.mp4')

demo_video22 = Video.create!(title: 'Green Book', genre: "Comedy, Drama", video_type: "movie")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Green+Book+-+Official+Trailer+%5BHD%5D.mp4')
demo_video22.video.attach(io: file, filename: 'Green-Book.mp4')

demo_video23 = Video.create!(title: "Molly's Game", genre: "Comedy, Drama", video_type: "movie")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Molly's+Game+Official+Trailer+Own+it+Now+on+Digital+HD%2C+Blu-ray+%26+DVD.mp4")
demo_video23.video.attach(io: file, filename: 'Mollys-Game.mp4')

demo_video24 = Video.create!(title: 'Moneyball', genre: "Drama", video_type: "movie")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Moneyball+(2011)+Movie+Trailer+-+HD+-+Brad+Pitt.mp4")
demo_video24.video.attach(io: file, filename: 'Moneyball.mp4')

demo_video24 = Video.create!(title: 'Mrs. Doubtfire', genre: "Comedy", video_type: "movie")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Mrs.+Doubtfire+(1993)+Trailer+%231+Movieclips+Classic+Trailers+(1).mp4")
demo_video24.video.attach(io: file, filename: 'Mrs.-Doubtfire.mp4')

demo_video25 = Video.create!(title: 'Cars', genre: "Comedy, Fantasy", video_type: "movie")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Official+Trailer+Cars+(2006).mp4")
demo_video25.video.attach(io: file, filename: 'Cars.mp4')

demo_video26 = Video.create!(title: 'Slumdog Millionaire', genre: "Drama, Romance", video_type: "movie")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/SLUMDOG+MILLIONAIRE+-+Trailer.mp4")
demo_video26.video.attach(io: file, filename: 'Slumdog-Millionaire.mp4')

demo_video27 = Video.create!(title: 'Spirited Away', genre: "Fantasy", video_type: "movie")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Spirited+Away+-+Official+Trailer+(1).mp4")
demo_video27.video.attach(io: file, filename: 'Spirited-Away.mp4')

demo_video28 = Video.create!(title: 'Spotlight', genre: "Drama", video_type: "movie")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Spotlight+TRAILER+1+(2015)+-+Mark+Ruffalo%2C+Michael+Keaton+Movie+HD.mp4")
demo_video28.video.attach(io: file, filename: 'Spotlight.mp4')

demo_video29 = Video.create!(title: 'The Lord Of The Rings: Return Of The King', genre: "Fantasy", video_type: "movie")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/The+Lord+of+the+Rings+The+Return+of+the+King+Official+Trailer+%231+-+(2003)+HD.mp4")
demo_video29.video.attach(io: file, filename: 'Lord-of-the-rings.mp4')

demo_video30 = Video.create!(title: 'The Lincoln Lawyer', genre: "Crime", video_type: "movie")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/The+Lincoln+Lawyer+(2011)+-+Official+Trailer+%231.mp4")
demo_video30.video.attach(io: file, filename: 'The-Lincoln-Lawyer.mp4')

demo_video31 = Video.create!(title: 'Willy Wonka', genre: "Fantasy", video_type: "movie")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/willy_wonka.mp4")
demo_video31.video.attach(io: file, filename: 'Willy-Wonka.mp4')

demo_video32 = Video.create!(title: 'The Good Place', genre: "Fantasy, Comedy, Romance", video_type: "TV")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/The+Good+Place+Season+1+Trailer+%5BHD%5D+Kristen+Bell%2C+Tiya+Sircar%2C+D'Arcy+Carden.mp4")
demo_video32.video.attach(io: file, filename: 'The-Good-Place.mp4')


demo_video33 = Video.create!(title: 'Brooklyn Nine Nine', genre: "Comedy, Romance, Crime", video_type: "TV")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/BROOKLYN+NINE-NINE+-+Official+Trailer.mp4")
demo_video33.video.attach(io: file, filename: 'Brooklyn-Nine-Nine.mp4')

demo_video34 = Video.create!(title: 'Lucifer', genre: "Fantasy, Science Fiction, Crime", video_type: "TV")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Official+Trailer+Season+1+LUCIFER.mp4")
demo_video34.video.attach(io: file, filename: 'Lucifer.mp4')

demo_video35 = Video.create!(title: "Grey's Anatomy", genre: "Romance, Drama", video_type: "TV")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Grey's+Anatomy+Trailer.mp4")
demo_video35.video.attach(io: file, filename: 'Greys-Anatomy.mp4')

demo_video36 = Video.create!(title: "Punisher", genre: "Crime, Science Fiction, Action", video_type: "TV")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Marvel's+The+Punisher+Season+1+Trailer+%231+(2017)+TV+Trailer+Movieclips+Trailers.mp4")
demo_video36.video.attach(io: file, filename: 'Punisher.mp4')

demo_video37 = Video.create!(title: "Stranger Things", genre: "Romance, Science Fiction", video_type: "TV")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Stranger+Things+Official+Final+Trailer+Netflix.mp4")
demo_video37.video.attach(io: file, filename: 'Stranger-Things.mp4')

demo_video38 = Video.create!(title: "Schitt's Creek", genre: "Comedy, Romance", video_type: "TV")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Schitt's+Creek+Season+1+Trailer.mp4")
demo_video38.video.attach(io: file, filename: 'Schitts-Creek.mp4')

demo_video39 = Video.create!(title: "The Mandalorian", genre: "Science Fiction, Action", video_type: "TV")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/The+Mandalorian+Official+Trailer+Disney%2B+Streaming+Nov.+12.mp4")
demo_video39.video.attach(io: file, filename: 'The-Mandalorian.mp4')

demo_video40 = Video.create!(title: "Breaking-Bad", genre: "Crime", video_type: "TV")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Breaking+Bad+Trailer+(First+Season).mp4")
demo_video40.video.attach(io: file, filename: 'Breaking-Bad.mp4')

demo_video41 = Video.create!(title: "Sherlock", genre: "Crime", video_type: "TV")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Sherlock+Trailer+-+Season+1+%5BTEH%5D.mp4")
demo_video41.video.attach(io: file, filename: 'Sherlock.mp4')