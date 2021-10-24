require 'rails_helper'

# While "in the green" and before moving back to "in the red" consider:
#   Can I make my test suite more expressive?
#   Does my test suite provide reliable feedback?
#   Are my tests isolated?
#   Can I reduce duplication in my test suite or implementation code?
#   Can I make my implementation code more descriptive?
#   Can I implement something more efficiently?

RSpec.describe Transaction, type: :model do
  let(:user) {
    User.create(email: "batman@cave.com", password: "pw1234")
  }

  let(:category) {
    Category.create(name: "food", user_id: user.id)
  }

  let(:expense) {
    Expense.create(name: "groceries", category_id: category.id)
  }

  subject {
    described_class.new(id: 1, name: "groceries", expense_id: expense.id)
  }

  context "Validations" do
    it { should validate_presence_of(:name) } # change_column_null :transactions, :name, false
    it { should validate_presence_of(:amount) } # change_column_default :transactions, :amount, 0  ---- change_column_null :transactions, :amount, false
    it { should validate_presence_of(:transaction_date) } # add_column :transactions, :transaction_date, :datetime, default: 'now()', precision: 6, null: false
  end

  context ".new()" do
    it "is valid with valid attributes (name)" do
      expect(subject).to be_valid
    end

    it "is not valid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without an amount" do
      subject.amount = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without a transaction_date" do
      subject.transaction_date = nil
      expect(subject).to_not be_valid
    end
  end

  context "Associations" do
    it { should belong_to(:expense) }
    # it { should have_one(:reocurring) } => in reoccurring.spec: it { should belong_to(:transaction).optional }
  end

end
