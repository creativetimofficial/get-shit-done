module Gsdk
  module Generators
    class PageGenerator < Rails::Generators::NamedBase
      class_attribute :_view_name

      argument :action_name, type: :string, required: true, banner: "ACTION",
                             desc: "The action, also the name of the view."

      def create_route
        route "get '#{name.downcase}/#{action_name}' => '#{name.downcase}##{action_name}'"
      end

      def create_controller
        invoke :controller, [ name ], skip: true
      end

      def copy_view
        copy_file "views/#{_view_name}.html.erb",
                  "app/views/#{name}/#{action_name}.html.erb"
      end

      def self.view_name(name)
        self._view_name = name
        desc "Creates a #{name} page style view under app/views/CONTROLLER/ACTION and its controller."
        source_root File.expand_path('../templates', __FILE__)
      end
    end
  end
end

# Hides this generator. It's only used as a base class.
Rails::Generators.hide_namespace "gsdk:page"
