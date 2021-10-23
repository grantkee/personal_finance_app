class ChangeBudgetTotalInCategories < ActiveRecord::Migration[6.0]
  def change
    change_column_default :categories, :budget_total, from: nil, to: 0
    change_column_default :categories, :color, from: nil, to: 0
    change_column_default :categories, :icon, from: nil, to: 0
  end
end
