class Expense < ApplicationRecord
  belongs_to :category
  has_one :due_date
end
