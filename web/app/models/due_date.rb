class DueDate < ApplicationRecord
  belongs_to :expense, optional: true
end
