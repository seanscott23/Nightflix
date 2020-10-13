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

    def search
        @users = User.all
        args = params[:args].split(" ")
        @videos = []
        args.each do |arg| 
            @videos.concat(Video.where("lower(title) LIKE ?", "%#{arg.downcase}"))
        end
        render :index
    end

    def index
        @videos = Video.all
        render :index
    end

end
