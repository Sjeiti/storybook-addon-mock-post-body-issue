# A simple Angular app with Storybook and storybook-addon-mock to isolate a request body issue 

`npm i` to install

`npm run api` to run a simple ExpressJS API to check request.body

`npm start` to run the application

`npm run storybook` to run storybook


The app has a button for a GET and a POST.
Pressing it will log the request data in the window running ExpressJS.

Served through Angular the request body contains a value.

Served through StoryBook the request body is empty.
