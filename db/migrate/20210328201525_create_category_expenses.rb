class CreateCategoryExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :category_expenses do |t|
      t.references  :expense_category, null: false, foreign_key: true
      t.string      :name
      t.integer     :expected_total
      t.text        :notes
      t.boolean     :fund
      t.timestamps
    end
  end
end
