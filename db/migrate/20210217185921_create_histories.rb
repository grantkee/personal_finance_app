class CreateHistories < ActiveRecord::Migration[6.0]
  def change
    create_table :histories do |t|
      t.decimal :transaction, precision: 7, scale: 2
      t.references :expense, null: false, foreign_key: true

      t.timestamps
    end
  end
end
