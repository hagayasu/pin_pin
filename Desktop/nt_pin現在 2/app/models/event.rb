class Event < ApplicationRecord
belongs_to :user
attachment :image
end

