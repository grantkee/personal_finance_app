Rails.application.routes.draw do
  root 'landing#index'

  resources :expenses do
    resources :transactions
  end
end
