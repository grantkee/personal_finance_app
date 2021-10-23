class UpdateExpenseDefaultsAndNullsForNameExpectedTotalAndFund < ActiveRecord::Migration[6.0]
  def change
    change_column_null :expenses, :name, false
    change_column_null :expenses, :expected_total, false
    change_column_null :expenses, :fund, false
    change_column_null :expenses, :category_id, false
    change_table :expenses do |t|
      t.change_default :expected_total, 0
      t.change_default :fund, false
    end
  end
end
