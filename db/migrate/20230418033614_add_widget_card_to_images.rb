class AddWidgetCardToImages < ActiveRecord::Migration[6.0]
  def change
    add_reference :images, :widget_card, foreign_key: true
  end
end
