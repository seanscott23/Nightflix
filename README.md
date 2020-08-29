# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
Using ruby version 2.5.1

* System dependencies
helllooo

* Configuration

* Database creation


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
Brief explanation of what the app is and does

Nightflix is streaming service inspired by Netflix. It's functionality and appearance are very similar. Nightflix provides trailers as opposed to full length films and tv shows.   

Link to live site

This link to the website is here: 
https://nightflix1.herokuapp.com/

Discussion of technologies used

I used HTML, CSS, Rails, JQuery, ActiveStorage, AWS, Javascript, React & Redux. 
I used JQuery to write out Ajax calls in my api_util files. This in turn was available for me to then use in my thunk action creators. This ties into my use of Redux and evidently also React in order to display my actual website on the frontend. For styling my site to look appealing I used a combination of HTML and CSS as well. My use of ActiveStorage was through AWS so that I could seed my data that I wanted shown on my site. This was information like the trailers themselves as well as the thumbnails I used as the default picture shown on the video. My use of Rails was also fundamental to this site working properly. Rails was my backend that allowed me to create the tables, associations, controllers and more. 

Delve deep into ~2 features that show off your technical abilities. Discuss both the challenges faced and your brilliant solutions.
Code snippets to highlight your best code (markdown code snippets, NOT screenshots)
The first feature that I would like to highlight from this project is the individual video show page. I had a difficult time getting the title of the movie to show up and dissapear in the right spot of the trailer. Eventually I discovered a solution that combined both css and javascript to give me exactly what I wanted. Now the user is able to play and pause the trailer with the title showing at the right time and in the correct spot. 

The second feature I wanted to highlight was the video index page. Getting the videos in to the correct genre sections and playing at the correct time was difficult. The solution involved seeding more data related to the videos and filtering through the videos by genre to get them under the correct section. 




