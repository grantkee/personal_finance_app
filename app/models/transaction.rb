class Transaction < ApplicationRecord
  belongs_to :category_expense
  has_one    :reocurring
end
