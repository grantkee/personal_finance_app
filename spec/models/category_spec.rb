require 'rails_helper'

# While "in the green" and before moving back to "in the red" consider:
#   Can I make my test suite more expressive?
#   Does my test suite provide reliable feedback?
#   Are my tests isolated?
#   Can I reduce duplication in my test suite or implementation code?
#   Can I make my implementation code more descriptive?
#   Can I implement something more efficiently?

RSpec.describe Category, type: :model do
  # before(:each) do
  #   @cat = Category.new(name: "lifestyle")
  # end

  subject { described_class.new }

  context "when creating a new instance" do
    it "is valid with valid attributes" do
      subject.name = "lifestyle"
      expect(subject).to be_valid
    end

    it "is not valid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end
  end

  # use when, with, or without for context
  context ".name" do
    it "should return category name" do
      subject.name = "lifestyle"
      expect(subject.name).to eq("lifestyle")
    end
  end

  # use when, with, or without for context
  # context "when given a name"
    # it {is_expected.to }
  # end
end