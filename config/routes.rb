Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      :fruits, only: [:index, :create, :destroy, :update]
    end
  end
end
