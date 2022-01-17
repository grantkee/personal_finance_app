class RemoveExpenseCategoryFromExpenses < ActiveRecord::Migration[6.0]
  def change
    remove_reference :expenses, :expense_category, null: false, index: true
  end
end
