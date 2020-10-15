class Api::SearchController < ApplicationController
  
    def index
        query = params[:query]
        @videos = Video.where("lower(title) LIKE ?", "%#{query.downcase}")
        render 'api/videos/index'
    end

end
