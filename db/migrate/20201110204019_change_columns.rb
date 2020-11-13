class ChangeColumns < ActiveRecord::Migration[5.2]
  def change 
    remove_column :videos, :description, :text
    add_column :videos, :type, :string

  end
end
