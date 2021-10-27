require 'rails_helper'

RSpec.describe "Category", type: :request do
  
  let(:user) {
    User.create(email: "charlie@murphy.com", password: "asdf1234")
  }

  let(:headers) {
    { "Content-type": "application/json" }
  }

  subject {
    user.build_categories(name: "food")
  }

  context "GET users#index" do

    it "return status 200" do
      get categories_path(id: user.id)
      expect(response).to be_successful
      # expect(response).to have_http_status(200)
    end
    
    it "returns json of user's Categories and Expenses" do
      get categories_path(id: user.id)
      expect(response.body).to include("groceries")
    end
  end

  context "POST categories#create" do
    it "creates a Category with valid attributes" do
      category_params = { category: {
        name: "food",
        user_id: user.id,
      }}

      post categories_path, params: category_params.to_json, headers: headers
      json = JSON.parse(response.body)
      expect(response).to be_successful
      # expect(response).to have_http_status(200)
    end
  end

  context "PUT categories#update" do
    it "replaces the category with new attributes" do
      # the request should be replayed several times and result
      # in the same resource - sometimes violated by conventional
      # idioms for creating children resources using nested attr
      # while updating a parent resource
    end
  end
  

  context "PATCH categories#update" do
    it "updates the category with new attributes" do
      category_params = { cat: {
        name: "food"
      }}
      
      new_category_params = { cat: {
        name: "new food"
      }}

      patch category_path(user), params: new_category_params.to_json, headers: headers
      json = JSON.parse(response.body)
      expect(json["cat"]).to include("name": "new food")
    end
  end
  
end
