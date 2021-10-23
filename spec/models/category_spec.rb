require 'rails_helper'

# While "in the green" and before moving back to "in the red" consider:
#   Can I make my test suite more expressive?
#   Does my test suite provide reliable feedback?
#   Are my tests isolated?
#   Can I reduce duplication in my test suite or implementation code?
#   Can I make my implementation code more descriptive?
#   Can I implement something more efficiently?

RSpec.describe Category, type: :model do
  let(:user) {
    User.create(email: "batman@cave.com", password: "pw1234")
  }
  subject {
    described_class.new(id: 1, name: "lifestyle", user_id: user.id)
  }

  context "when creating a new instance" do
    it "is valid with valid attributes (name)" do
      expect(subject).to be_valid
    end

    it "is not valid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end

    it "has a budget_total of 0 by default" do
      expect(subject.budget_total).to eq(0)
    end

    it "color is 0 by default" do
      expect(subject.color).to eq(0)
    end

    it "icon is 0 by default" do
      expect(subject.icon).to eq(0)
    end
  end

  context "Associations" do
    it { should belong_to(:user) }
    it { should have_many(:expenses) }
  end

end
