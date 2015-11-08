# Get Shit Done Rails Version

Thanks for trying out Get Shit Done (Rails Version)! We promise your rails app will look awesome after install it.

[![Get Shit Done](https://raw.githubusercontent.com/UiReady/uiready.github.io/master/images/gsdk_rails_cover.jpg)](https://uiready.io/items/get-shit-done-rails-version)

## Install Preparation

> Recommend install on blank new rails app

> Although Get Shit Done (Rails Version) can be installed on your existing rails app, we still recommend you to install it on a blank new rails app first and get familiar how this gem integrate your rails app.

> Remove any bootstrap from existing rails app

> If you want to integrate existing rails app, please make sure you have remove all the Bootstrap gems such as [twitter-bootstrap-rails](https://github.com/seyhunak/twitter-bootstrap-rails), [bootstrap-rails](https://github.com/anjlab/bootstrap-rails), [bootstrap-sass](https://github.com/twbs/bootstrap-sass), [less-rails-bootstrap](https://github.com/metaskills/less-rails-bootstrap) or any Bootstrap related stylesheets and javascript from your rails app. As Get Shit Done (Rails Version) already contain its own version of Bootstrap.

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

> The install generator will created the following layout, css and js files in your app:

> app/views/layouts/_base.html.erb

> app/assets/stylesheets/gsdk.css

> app/assets/javascripts/gsdk.js

> Also, it added require directive to require gsdk.css and gsdk.js from following manifest files:

> app/assets/stylesheets/application.css

> app/assets/javascripts/application.js
