Rails.application.routes.draw do
  root 'landing#index'

  resources :categories do
    resources :expenses do
      resources :transactions
    end
  end
end
