class Transaction < ApplicationRecord
  belongs_to :expense

  validates :amount, presence: true
end
