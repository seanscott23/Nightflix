class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null:false
      t.string :genre, null:false
      t.integer :director_id, null:false
      t.text :description, null:false

      t.timestamps
    end
    add_index :videos, :director_id, unique:true
  end
end
