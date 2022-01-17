class UpdateColumnsForTransactions < ActiveRecord::Migration[6.0]
  def change
    change_column_null :transactions, :name, false
    change_column_null :transactions, :amount, false
    change_column_default :transactions, :amount, 0
    add_column :transactions, :transaction_date, :datetime, null: false, default: "now()", precision: 6
  end
end
