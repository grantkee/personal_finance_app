require 'rails_helper'

RSpec.describe "Expense", type: :request do
  context "#index" do
    user = User.create(email: "charlie@murphy.com", password: "asdf1234")
    it "returns status 200" do
      get categories_path(id: user.id)
      expect(response).to be_successful
    end
    
    it "returns json of user's categories and expenses" do
      get categories_path(id: user.id)
      expect(response.body).to include("groceries")
    end
  end
  
end
