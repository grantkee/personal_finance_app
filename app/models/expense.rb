class Expense < ApplicationRecord
  has_many :transactions, dependent: :destroy

  validates :name, :budget_total, :current_total, :color, :icon, presence: true
end
