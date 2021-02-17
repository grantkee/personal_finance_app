class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.decimal :amount, precision: 7, scale: 2
      t.references :expense, null: false, foreign_key: true

      t.timestamps
    end
  end
end
