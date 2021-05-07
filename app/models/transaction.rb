class Transaction < ApplicationRecord
  belongs_to :expense
  has_one    :reocurring
end
