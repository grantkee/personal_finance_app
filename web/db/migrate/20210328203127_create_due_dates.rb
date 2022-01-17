class CreateDueDates < ActiveRecord::Migration[6.0]
  def change
    create_table :due_dates do |t|
      t.datetime :date
      t.references :category_expense, null: false, foreign_key: true

      t.timestamps
    end
  end
end
