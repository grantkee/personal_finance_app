class ChangeExpenseCategoriesToCategories < ActiveRecord::Migration[6.0]
  def change
    rename_table :expense_categories, :categories
  end
end
