Rails.application.routes.draw do
  root to: 'home#index'
  get '/widget/fetch', to: 'widget#fetch', format: 'json'
  post '/widget/logs', to: 'widget#import_logs', format: 'json'
end
