class AddExpenseToTransaction < ActiveRecord::Migration[6.0]
  def change
    add_reference :transactions, :expense, null: false, foreign_key: true
  end
end
