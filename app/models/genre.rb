class Genre < ApplicationRecord

      belongs_to :video,
        foreign_key: :video_id,
        class_name: :Genre
end
