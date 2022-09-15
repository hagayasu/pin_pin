Rails.application.routes.draw do
  devise_for :users
  root to: "home#index"
  resources :users
  resources :events

 # devise_scope :user do
 # get '/users/sign_out' => 'devise/sessions#destroy'
 #end
end