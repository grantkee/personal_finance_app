class User < ApplicationRecord
  validates_presence_of :email, :password
  has_many :categories
end
