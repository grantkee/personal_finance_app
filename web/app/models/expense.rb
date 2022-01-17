class Expense < ApplicationRecord
  belongs_to :category
  has_one :due_date

  attribute :expected_total, :integer, default: 0
  attribute :fund, :boolean, default: false

  validates_presence_of :name, :expected_total
  validates :fund, inclusion: { in: [true, false],
            message: "can't be blank" }

end
