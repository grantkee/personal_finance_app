class AddIncomeToExpenses < ActiveRecord::Migration[6.0]
  def change
    add_column :expenses, :income, :boolean
  end
end
