class Expense < ApplicationRecord
  validates :name, :budget_total, :current_total, :color, :icon, presence: true
end
