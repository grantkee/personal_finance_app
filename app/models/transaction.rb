class Transaction < ApplicationRecord
  belongs_to :expense
  has_one    :reocurring

  attribute :amount, :integer, default: 0
  attribute :transaction_date, :datetime, default: Time.now

  validates_presence_of :name, :amount, :transaction_date

end
