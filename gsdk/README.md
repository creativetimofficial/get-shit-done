# Get Shit Done Rails Version

Thanks for trying out Get Shit Done (Rails Version)! We promise your rails app will look awesome after install it.

[![Get Shit Done](https://raw.githubusercontent.com/UiReady/uiready.github.io/master/images/gsdk_rails_cover.jpg)](https://uiready.io/items/get-shit-done-rails-version)

## Table of Content

* [Install Preparation](#install-preparation)
* [Installation](#installation)
* [Theme Structure In Rails](#theme-structure-in-rails)
* [Page Generators](#page-generators)
* [Changelog](#changelog)

## Install Preparation

Recommend install on blank new rails app

Although Get Shit Done (Rails Version) can be installed on your existing rails app, we still recommend you to install it on a blank new rails app first and get familiar how this gem integrate your rails app.

Remove any bootstrap from existing rails app

If you want to integrate existing rails app, please make sure you have remove all the Bootstrap gems such as [twitter-bootstrap-rails](https://github.com/seyhunak/twitter-bootstrap-rails), [bootstrap-rails](https://github.com/anjlab/bootstrap-rails), [bootstrap-sass](https://github.com/twbs/bootstrap-sass), [less-rails-bootstrap](https://github.com/metaskills/less-rails-bootstrap) or any Bootstrap related stylesheets and javascript from your rails app. As Get Shit Done (Rails Version) already contain its own version of Bootstrap.

[Back to top](#table-of-content)

## Installation

1. Create a new rails application from terminal

  ```
  rails new exampleapp
  cd exampleapp
  ```

2. Install gsdk gem

  ```
  gem 'gsdk', '>= 1.0.0.0'
  ```

  Run the following command to install the gem:

  ```
  bundle install
  ```

  Congratulation, Get Shit Done for Rails Version has been installed in your local machine.

3. Run the install generator to integrate Get Shit Done in your rails

  ```
  rails g gsdk:install
  ```

  The install generator will created the following layout, css and js files in your app:

  * app/views/layouts/_base.html.erb
  * app/assets/stylesheets/gsdk.css
  * app/assets/javascripts/gsdk.js

  Also, it added require directive to require gsdk.css and gsdk.js from following manifest files:

  * app/assets/stylesheets/application.css
  * app/assets/javascripts/application.js

[Back to top](#table-of-content)

## Theme Structure In Rails

Get Shit Done (Rails version) has integrate lot of the rails best practices such as

* integrate nicely with turbolinks enabled
* dynamic load the javascript init scripts
* proper asset pipeline integration

Before we dive in to using Page Generators. Let get familiar how this gem integrate to rails app

First thing first, in order to simplify the file management from your rails app, all the Get Shit Done files are actually located in the gem except the following files for customize purpose:

Get Shit Done files in your rails app folder:

* app/views/layouts/_base.html.erb
* app/assets/stylesheets/gsdk.css
* app/assets/javascripts/gsdk.js

### _BASE.HTML.ERB

It contain html head and empty body. All other layouts are based on this _base.html.erb layout so that same html head setting can be reuse among different layouts.

There are three yield contents specified in base layout:

```ruby
<%= yield :style %>
<%= yield :features %>
<%= yield :class %>
```

#### <%= yield :style %>

you can specify the custom css style content from the view file to fill in this area. For example, if you want to include some style on index view page only. From your index.html.erb, you can specify:

```ruby
<% content_for :style do %>
<style>
  .somestyle {
  background-color: red;
  }
</style>
<% end %>
```

#### <%= yield :features %>

you can specify the javascript init features you want to invoke from the view file to fill in this area. For example, if you want to add feature1 and feature2 on index view page only. From your index.html.erb, you can specify:

```ruby
<% content_for :features, "feature1 feature2" %>
```

Then add the following init script in gsdk.js OR add it to separate js file and require it from gsdk.js

```ruby
$(document).on("page:change", function() {
  if ($.inArray('feature1',App.features()) >= 0) {
    Write your feature1 init script here ...
  }
  if ($.inArray('feature2',App.features()) >= 0) {
    Write your feature2 init script here ...
  }
});
```

#### <%= yield :class %>

you can specify the css class name from the view file to fill in this area. For example, if you want to give the class name on index view page only. From your index.html.erb, you can specify:

```ruby
<% content_for :class, "home" %>
```

### GSDK.CSS

It is the manifest file using sprockets require directives to require all Get Shit Done stylesheet files.


### GSDK.JS

It is the manifest file using sprockets require directives to require all Get Shit Done javascript files.

[Back to top](#table-of-content)

## Page Generators

Get Shit Done come with the following page generators to help you create the various pages. It's automatically handle all setup such as routes, controllers and views. By the way, all view layout are based on `_base.html.erb` layout, if you want to use different layout, you can specify it in your controller.

### COMPONENTS GENERATOR

Generate component view at app/views/CONTROLLER/ACTION

```
rails g gsdk:components CONTROLLER ACTION
```

### INDEX GENERATOR

Generate index view at app/views/CONTROLLER/ACTION

```
rails g gsdk:index CONTROLLER ACTION
```

### NAVBAR TRANSPARENT GENERATOR

Generate navbar transparent view at app/views/CONTROLLER/ACTION

```
rails g gsdk:navbar_transparent CONTROLLER ACTION
```

### NOTIFICATION GENERATOR

Generate notification view at app/views/CONTROLLER/ACTION

```
rails g gsdk:notification CONTROLLER ACTION
```

### TEMPLATE GENERATOR

Generate template view at app/views/CONTROLLER/ACTION

```
rails g gsdk:template CONTROLLER ACTION
```

### TUTORIAL HTML GENERATOR

Generate tutorial html view at app/views/CONTROLLER/ACTION

```
rails g gsdk:tutorial CONTROLLER ACTION
```

[Back to top](#table-of-content)

## Changelog

2015.10.26 - version 1.4.0.0

* First Release!

[Back to top](#table-of-content)
