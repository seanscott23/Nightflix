class Api::VideosController < ApplicationController
    before_action :require_logged_in, only: [:show, :index]

    def show
       @video = Video.find_by(id: params[:id])
       if @video
         render :show
       else
        render json: ["Not found, video doesn't exit"], status: 404
       end
    end

    def index
        @videos = Video.all
        render :index
    end

end
