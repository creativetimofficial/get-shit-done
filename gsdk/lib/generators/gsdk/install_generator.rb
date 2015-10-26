module Gsdk
  module Generators
    class InstallGenerator < Rails::Generators::Base
      source_root File.expand_path("../templates", __FILE__)

      desc "Install the Get Shit Done in your rails application."

      def copy_layouts
        layouts_path = "app/views/layouts"
        %w( _base ).each do |name|
          copy_file "layouts/#{name}.html.erb", "#{layouts_path}/#{name}.html.erb"
        end
      end

      def copy_stylesheet
        copy_file "gsdk.css", "app/assets/stylesheets/gsdk.css"
      end

      def copy_javascript
        copy_file "gsdk.js", "app/assets/javascripts/gsdk.js"
      end

      def require_gsdk_stylesheet
        file = "app/assets/stylesheets/application.css"

        if File.file?(file)
          inject_into_file file, "*= require gsdk\n", { :before => "*= require_tree ." }
        else
          copy_file "application.css", file
        end
      end

      def require_gsdk_javascript
        file = "app/assets/javascripts/application.js"

        if File.file?(file)
          inject_into_file file, "\n//= require gsdk", { :after => "//= require jquery_ujs" }
        else
          copy_file "application.js", file
        end
      end

      def show_readme
        readme "README" if behavior == :invoke
      end
    end
  end
end
