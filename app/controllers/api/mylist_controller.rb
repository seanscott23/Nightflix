class Api::MyListController < ApplicationController
    before_action :require_logged_in, only: [:show, :index]

    def index
        @mylist = Mylist.all
    end

    def show
        @mylist = @current_user.lists.find_by(video_id: params[:id])
        render :show
    end

    def create
      @mylist = Mylist.new(params.require(:mylist).permit(:user_id, :video_id))
      current_user.id = @mylist.user_id
      if @mylist.save!
        render json: mylist
      else
        render json: {message: "Cannot add this to my list"}, status: 422
      end
    end

end
