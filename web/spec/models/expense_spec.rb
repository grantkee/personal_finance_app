require 'rails_helper'

# While "in the green" and before moving back to "in the red" consider:
#   Can I make my test suite more expressive?
#   Does my test suite provide reliable feedback?
#   Are my tests isolated?
#   Can I reduce duplication in my test suite or implementation code?
#   Can I make my implementation code more descriptive?
#   Can I implement something more efficiently?

RSpec.describe Expense, type: :model do
  let(:user) {
    User.create(email: "batman@cave.com", password: "pw1234")
  }

  let(:category) {
    Category.create(name: "food", user_id: user.id)
  }

  subject {
    described_class.new(id: 1, name: "groceries", category_id: category.id)
  }

  context "Validations" do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:expected_total) }
    it { should validate_presence_of(:fund) }
  end

  context ".new()" do
    it "is valid with valid attributes (name)" do
      expect(subject).to be_valid
    end

    it "is not valid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without an expected total" do
      subject.expected_total = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without a fund" do
      subject.fund = nil
      expect(subject).to_not be_valid
    end
  end

  context "Associations" do
    it { should belong_to(:category) }
    # it { should have_one(:due_date) } => in due_date.spec: it { should belong_to(:expense).optional }
  end

end
