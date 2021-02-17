class Expense < ApplicationRecord
  has_many :transactions

  validates :name, :budget_total, :current_total, :color, :icon, presence: true
end
