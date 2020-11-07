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





demo_video1 = Video.create!(title: 'The Hundred Foot Journey', genre: "Romance, Drama", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/100_foot_journey.mp4')
demo_video1.video.attach(io: file, filename: '100_foot_journey.mp4')

demo_video2 = Video.create!(title: '50 First Dates', genre: "Romance, Comedy", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/50_first_dates.mp4')
demo_video2.video.attach(io: file, filename: '50_first_dates.mp4')

demo_video3 = Video.create!(title: 'Alita Battle Angel', genre: "Action, Science Fiction", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Alita_battle_angel.mp4')
demo_video3.video.attach(io: file, filename: 'Alita_battle_angel.mp4')

demo_video4 = Video.create!(title: 'Arrival', genre: "Science Fiction, Thriller", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Arrival.mp4')
demo_video4.video.attach(io: file, filename: 'Arrival.mp4')

demo_video5 = Video.create!(title: 'Forrest Gump', genre: "Comedy, Drama", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Forrest_gump.mp4')
demo_video5.video.attach(io: file, filename: 'Forrest_gump.mp4')

demo_video6 = Video.create!(title: 'Good Will Hunting', genre: "Drama, Romance", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Good_will_hunting.mp4')
demo_video6.video.attach(io: file, filename: 'Good_will_hunting.mp4')

demo_video7 = Video.create!(title: 'Hook', genre: "Family, Fantasy", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Hook.mp4')
demo_video7.video.attach(io: file, filename: 'Hook.mp4')

demo_video8 = Video.create!(title: 'Interstellar', genre: "Science Fiction, Adventure", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Interstellar.mp4')
demo_video8.video.attach(io: file, filename: 'Interstellar.mp4')

demo_video9 = Video.create!(title: 'Irishman', genre: "Crime, Drama", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Irishman.mp4')
demo_video9.video.attach(io: file, filename: 'Irishman.mp4')

demo_video10 = Video.create!(title: 'Limitless', genre: "Thriller, Action", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Limitless.mp4')
demo_video10.video.attach(io: file, filename: 'Limitless.mp4')

demo_video11 = Video.create!(title: 'Matrix', genre: "Action, Science Fiction", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Matrix.mp4')
demo_video11.video.attach(io: file, filename: 'Matrix.mp4')

demo_video12 = Video.create!(title: 'The Dark Knight', genre: "Action, Adventure", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/The_dark_knight.mp4')
demo_video12.video.attach(io: file, filename: 'The_dark_knight.mp4')

demo_video13 = Video.create!(title: 'Harry Potter & The Sorcerers Stone', genre: "Fantasy, Adventure", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/harry-potter-and-the-sorcerer-s-video-360p-mp4.mp4')
demo_video13.video.attach(io: file, filename: 'harry-potter-and-the-sorcerer-s-video-360p-mp4.mp4')

demo_video14 = Video.create!(title: 'The Pursuit of Happiness', genre: "Drama", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/pursuit_of_happiness.mp4')
demo_video14.video.attach(io: file, filename: 'pursuit_of_happiness.mp4')


demo_video15 = Video.create!(title: 'Avatar', genre: "Action, Fantasy", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/AVATAR+Official+Final+Trailer+(2009)+James+Cameron+Sci-Fi+Action+Movie+HD.mp4')
demo_video15.video.attach(io: file, filename: 'Avatar.mp4')

demo_video16 = Video.create!(title: 'Bohemian Rhapsody', genre: "Drama", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Bohemian+Rhapsody+Official+Trailer+%5BHD%5D+20th+Century+FOX.mp4')
demo_video16.video.attach(io: file, filename: 'Bohemian-Rhapsody.mp4')

demo_video17 = Video.create!(title: 'Catch Me If You Can', genre: "Crime", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Catch+Me+if+You+Can+(2002)+Trailer+%231+Movieclips+Classic+Trailers.mp4')
demo_video17.video.attach(io: file, filename: 'Catch Me If You Can.mp4')

demo_video18 = Video.create!(title: 'Chef', genre: "Drama, Comedy", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Chef+Official+Trailer+%231+(2014)+-+Scarlett+Johansson%2C+Robert+Downey+Jr.+Movie+HD.mp4')
demo_video18.video.attach(io: file, filename: 'Chef.mp4')

demo_video19 = Video.create!(title: 'Coach Carter', genre: "Drama", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Coach+Carter+(2005)+Trailer+%231+Movieclips+Classic+Trailers.mp4')
demo_video19.video.attach(io: file, filename: 'Coach-Carter.mp4')

demo_video20 = Video.create!(title: 'Dallas Buyers Club', genre: "Drama", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Dallas+Buyers+Club+-+Official+Trailer+(HD)+Matthew+McConaughey.mp4')
demo_video20.video.attach(io: file, filename: 'Dallay-Buyers-Club.mp4')

demo_video21 = Video.create!(title: 'Gladiator', genre: "Action, Adventure", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Gladiator+trailer.mp4')
demo_video21.video.attach(io: file, filename: 'Gladiator.mp4')

demo_video22 = Video.create!(title: 'Green Book', genre: "Comedy, Drama", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Green+Book+-+Official+Trailer+%5BHD%5D.mp4')
demo_video22.video.attach(io: file, filename: 'Green-Book.mp4')

demo_video23 = Video.create!(title: "Molly's Game", genre: "Comedy, Drama", description: "comedy")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Molly's+Game+Official+Trailer+Own+it+Now+on+Digital+HD%2C+Blu-ray+%26+DVD.mp4")
demo_video23.video.attach(io: file, filename: 'Mollys-Game.mp4')

demo_video24 = Video.create!(title: 'Moneyball', genre: "Drama", description: "comedy")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Moneyball+(2011)+Movie+Trailer+-+HD+-+Brad+Pitt.mp4")
demo_video24.video.attach(io: file, filename: 'Moneyball.mp4')

demo_video24 = Video.create!(title: 'Mrs. Doubtfire', genre: "Comedy, Family", description: "comedy")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Mrs.+Doubtfire+(1993)+Trailer+%231+Movieclips+Classic+Trailers+(1).mp4")
demo_video24.video.attach(io: file, filename: 'Mrs.-Doubtfire.mp4')

demo_video25 = Video.create!(title: 'Cars', genre: "Comedy, Family", description: "comedy")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Official+Trailer+Cars+(2006).mp4")
demo_video25.video.attach(io: file, filename: 'Cars.mp4')

demo_video26 = Video.create!(title: 'Slumdog Millionaire', genre: "Drama, Romance", description: "comedy")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/SLUMDOG+MILLIONAIRE+-+Trailer.mp4")
demo_video26.video.attach(io: file, filename: 'Slumdog-Millionaire.mp4')

demo_video27 = Video.create!(title: 'Spirited Away', genre: "Fantasy", description: "comedy")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Spirited+Away+-+Official+Trailer+(1).mp4")
demo_video27.video.attach(io: file, filename: 'Spirited-Away.mp4')

demo_video28 = Video.create!(title: 'Spotlight', genre: "Drama", description: "comedy")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/Spotlight+TRAILER+1+(2015)+-+Mark+Ruffalo%2C+Michael+Keaton+Movie+HD.mp4")
demo_video28.video.attach(io: file, filename: 'Spotlight.mp4')

demo_video29 = Video.create!(title: 'The Lord Of The Rings: Return Of The King', genre: "Fantasy", description: "comedy")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/The+Lord+of+the+Rings+The+Return+of+the+King+Official+Trailer+%231+-+(2003)+HD.mp4")
demo_video29.video.attach(io: file, filename: 'Lord-of-the-rings.mp4')

demo_video30 = Video.create!(title: 'The Lincoln Lawyer', genre: "Crime, Thriller", description: "comedy")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/The+Lincoln+Lawyer+(2011)+-+Official+Trailer+%231.mp4")
demo_video30.video.attach(io: file, filename: 'The-Lincoln-Lawyer.mp4')

demo_video31 = Video.create!(title: 'Willy Wonka', genre: "Fantasy", description: "comedy")
file = open("https://nightflix-seeds.s3-us-west-1.amazonaws.com/willy_wonka.mp4")
demo_video31.video.attach(io: file, filename: 'Willy-Wonka.mp4')
