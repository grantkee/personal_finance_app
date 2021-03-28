class ChangeCategoryExpensesToExpenses < ActiveRecord::Migration[6.0]
  def change
    rename_table :category_expenses, :expenses
  end
end
