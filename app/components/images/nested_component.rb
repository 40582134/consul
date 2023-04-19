class Images::NestedComponent < ApplicationComponent
  attr_reader :f, :image_fields, :max_images

  def initialize(f, image_fields: :image, max_images: 5)
    @f = f
    @image_fields = image_fields
    @max_images = max_images
  end

  private

  def imageable
    f.object
  end

  def note
    t "images.form.note", accepted_content_types: Image.humanized_accepted_content_types,
      max_file_size: Image.max_file_size
  end
end
