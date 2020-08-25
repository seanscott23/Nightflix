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





demo_video1 = Video.create!(title: 'The Hundred Foot Journey', genre: "comedy", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/100_foot_journey.mp4')
demo_video1.video.attach(io: file, filename: '100_foot_journey.mp4')

demo_video2 = Video.create!(title: '50 First Dates', genre: "comedy", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/50_first_dates.mp4')
demo_video2.video.attach(io: file, filename: '50_first_dates.mp4')

demo_video3 = Video.create!(title: 'Alita Battle Angel', genre: "comedy", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Alita_battle_angel.mp4')
demo_video3.video.attach(io: file, filename: 'Alita_battle_angel.mp4')

demo_video4 = Video.create!(title: 'Arrival', genre: "comedy", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Arrival.mp4')
demo_video4.video.attach(io: file, filename: 'Arrival.mp4')

demo_video5 = Video.create!(title: 'Forrest Gump', genre: "comedy", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Forrest_gump.mp4')
demo_video5.video.attach(io: file, filename: 'Forrest_gump.mp4')

demo_video6 = Video.create!(title: 'Good Will Hunting', genre: "comedy", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Good_will_hunting.mp4')
demo_video6.video.attach(io: file, filename: 'Good_will_hunting.mp4')

demo_video7 = Video.create!(title: 'Hook', genre: "Family, Fantasy", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Hook.mp4')
demo_video7.video.attach(io: file, filename: 'Hook.mp4')

demo_video8 = Video.create!(title: 'Interstellar', genre: "Sci-fi, Adventure", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Interstellar.mp4')
demo_video8.video.attach(io: file, filename: 'Interstellar.mp4')

demo_video9 = Video.create!(title: 'Irishman', genre: "Crime, Drama", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Irishman.mp4')
demo_video9.video.attach(io: file, filename: 'Irishman.mp4')

demo_video10 = Video.create!(title: 'Limitless', genre: "Thriller, Action", description: "comedy")
file = open('https://nightflix-seeds.s3-us-west-1.amazonaws.com/Limitless.mp4')
demo_video10.video.attach(io: file, filename: 'Limitless.mp4')

demo_video11 = Video.create!(title: 'Matrix', genre: "Action, Sci-fi", description: "comedy")
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