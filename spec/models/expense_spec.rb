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
  subject {
    described_class.new
  }

  context "Validations" do
    it { should validate_presence_of(:name)} # null: false
    it { should validate_presence_of(:expected_total)} # default to 0
    it { should validate_presence_of(:fund)} # null: false, default: false
    it { should validate_presence_of(:category_id)} # null: false
  end

  context "when creating a new instance" do
    it "is valid with valid attributes (name)" do
      expect(subject).to be_valid
    end

    it "is not valid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without an email" do
      subject.email = nil
      expect(subject).to_not be_valid
    end
  end

  context "Associations" do
    it { should belong_to(:category) }
    # it { should have_one(:due_date) }
  end

end
