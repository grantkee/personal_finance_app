class DueDate < ApplicationRecord
  belongs_to :expense, optional: true
end

# change_column_null :expenses, :category_id, false