require 'rails_helper'

RSpec.describe Category, type: :model do
  before do
    cat = Category.new("lifestyle")
  end

  # use when, with, or without for context
  context ".name" do
    it "should return category name" do
      expect(cat.name).to eq("lifestyle")
    end
  end

  # use when, with, or without for context
  # context "when given a name"
    # it {is_expected.to }
  # end
end