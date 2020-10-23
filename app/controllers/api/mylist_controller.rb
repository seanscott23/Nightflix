class Api::MylistController < ApplicationController
    before_action :require_logged_in, only: [:show, :index]

    def index
        @mylist = UserLike.where(user_id: params[:user_id])
    end

    def show
        @mylist = @current_user.lists.find_by(video_id: params[:id])
        render :show
    end

    def create
      @mylist = UserLike.new(params.require(:mylist).permit(:user_id, :video_id))
      current_user.id = @mylist.user_id
      if @mylist.save!
        render :show
      else
        render json: {message: "Cannot add this to my list"}, status: 422
      end
    end

    def destroy
      @mylist = @current_user.lists.find_by(video_id: params[:id])
      if @mylist
        @mylist.destroy
        render :show
      else
        render json: {message: "Unable to remove this from my list"}, status: 422
      end
    end

end
