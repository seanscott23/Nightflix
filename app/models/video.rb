class Video < ApplicationRecord
    validates :title, :genre, :description, presence:true

    has_many :genres,
        foreign_key: :video_id,
        class_name: :Genre

    has_one :like,
  foreign_key: :video_id,
  class_name: :Like

    has_one_attached :video   
end

