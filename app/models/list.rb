class List #< ActiveRecord::Base
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title

  after_create do
    $redis.publish('new_list', self.to_json)
  end
end
