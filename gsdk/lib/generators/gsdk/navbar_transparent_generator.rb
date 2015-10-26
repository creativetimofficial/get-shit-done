require "generators/gsdk/page_generator"

module Gsdk
  module Generators
    class NavbarTransparentGenerator < PageGenerator
      view_name "navbar_transparent"

      def set_layout
        inject_into_class "app/controllers/#{name}_controller.rb", "#{name.titleize}Controller".constantize, "  layout '_base'\n"
      end
    end
  end
end
