class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.references :category_expense, null: false, foreign_key: true
      t.string      :name
      t.integer     :amount
      t.text        :note
      t.boolean     :deleted
      t.timestamps
    end
  end
end
