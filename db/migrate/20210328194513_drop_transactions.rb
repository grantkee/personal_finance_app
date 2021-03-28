class DropTransactions < ActiveRecord::Migration[6.0]
  def up
    drop_table :transactions, force: :cascade
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
