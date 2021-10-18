class AddMissingColumnsToCategories < ActiveRecord::Migration[6.0]
  def change
    add_column :categories, :budget_total, :integer
    add_column :categories, :color, :integer
    add_column :categories, :icon, :integer
  end
end
