class Changevideos < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :director_id
  end
 
end
