class Api::SearchController < ApplicationController
  
    def index
        debugger
        query = params[:query]
        @videos = Video.where("lower(title) LIKE ?", "%#{query.downcase}")
        render 'api/search/index'
    end

end
