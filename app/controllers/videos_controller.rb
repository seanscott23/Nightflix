class VideosController < ApplicationController
    before_action :require_logged_in, only: [:show, :index]

    def show
       @video = Video.find(params[:id])
    end

    def index
        @videos = Video.all
    end

end
