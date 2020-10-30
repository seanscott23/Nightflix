class Api::MylistController < ApplicationController
    before_action :require_logged_in, only: [:create,:destroy,:index]

    def index
        @mylist = UserLike.where(user_id: params[:user_id])
    end

    # def show
    #   debugger
    #     @mylist = @current_user.lists.find_by(user_id: params[:user_id])
    #     render :show
    # end

    def create
      @mylikes = UserLike.new(params.require(:mylist).permit(:user_id, :video_id))
      current_user.id = @mylikes.user_id
      if @mylikes.save!
        @mylist = UserLike.where(user_id: params[:mylist][:user_id])
        render :index
      else
        render json: {message: "Cannot add this to my list"}, status: 422
      end
    end

    def destroy

      @mylike = UserLike.find_by(video_id: params[:mylist][:video_id])

      if @mylike.destroy
        @mylist = UserLike.where(user_id: params[:mylist][:user_id])
     
        render :index
      else
        render json: {message: "Unable to remove this from my list"}, status: 422
      end
    end

end
