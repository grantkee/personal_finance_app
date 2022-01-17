class DropExpenses < ActiveRecord::Migration[6.0]
  def up
    drop_table :expenses, force: :cascade
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
