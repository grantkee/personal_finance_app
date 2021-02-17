class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.string :name, null: false
      t.decimal :budget_total, null: false
      t.decimal :current_total, null: false
      t.string :color, null: false
      t.string :icon, null: false
      t.string :name, null: false
      t.timestamps
    end
  end
end
