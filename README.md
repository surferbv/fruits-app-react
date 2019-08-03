# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration
- This is based on the tutorial found on medium.
- https://medium.com/quick-code/simple-rails-crud-app-with-react-frontend-using-react-rails-gem-b708b89a9419

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

* Current Spot:
    - We are rendering AllFruits component now from inside this higher level Body component and thus passing fruits to it as a prop. Check your browser to see if you followed everything correctly up to this point and our fruit list is displayed.

* Lessons learned:
    - Components can be heierachical in this case a fruit body will handel all the states of the fruit? 

    - To render items on a page you create components which can be thought of as classes of objects. These components appear to fetch data and us it to display. The data that is return is in this case json fromat.

    - API based applications upload to a strict structure /app/contollers/api/v1. Where the v1 is the version of the api. 
