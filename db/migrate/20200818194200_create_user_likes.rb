class CreateUserLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :user_likes do |t|
      t.integer :video_id, null:false
      t.integer :user_id, null:false

      t.timestamps
    end
    add_index :user_likes, [:user_id, :video_id], unique:true
  end
end
