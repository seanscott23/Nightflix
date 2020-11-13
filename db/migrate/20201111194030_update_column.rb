class UpdateColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :type, :string
    add_column :videos, :video_type, :string, null:false
  end
end
