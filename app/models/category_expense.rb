class CategoryExpense < ApplicationRecord
  belongs_to :expense_category
  has_one :due_date
end
