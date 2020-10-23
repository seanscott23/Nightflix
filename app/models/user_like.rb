class UserLike < ApplicationRecord
  validates :user_id, :video_id, presence: true

  belongs_to :video,
  foreign_key: :video_id,
  class_name: :Video

   belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

end
