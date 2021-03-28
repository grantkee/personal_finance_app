Rails.application.routes.draw do
  root 'landing#index'

  resoureces :categories do
    resources :expenses do
      resources :transactions
    end
  end
end
