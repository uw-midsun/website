# Website Refresh
## Before Everything
[Get node on your computer!](https://nodejs.org/en/)


## Get Started!
`npm install`

To start debug server at localhost:8080:
`npm run start-dev`


To start production server at localhost:8000:
`npm start`

To run eslint to check syntax:
`npm test`

To build/rebuild bundle.js:
`npm run build`

PS: if you are on windows, and you want to run bash shell commands, a very hacky way to do so is by using npm scripts.
All the scripts are manually set up by me, so you can set up your own scripts on your local `package.json` and run an `npm run {scriptName}` with scriptName = your own script name. The bash command will run if node supports it (8/10 times it would). However, make sure you don't commit the script of your own to the repo.  


Note: eslint and webpack-dev-server are both hot-load, so if you are lazy like me, don't refresh the webpage or restart the server when you code changes; just wait for it :)

## Our File Structure
`
src
    ├───components
    ├───data
    ├───static
    │   ├───css
    │   ├───img
    │   └───js
    └───views
`

## Coding Styles (eslint):
- Instantiate variables for EVERYTHING: no magic strings or magic numbers
- Max length for a line is 120 characters
- Indentation is 2 spaces; please don't tab unless you are sure your tab is set to 2 spaces in your editor
- Commenting in react is different: use `{/* code commented */}`
For more information, check out `.eslintrc.json` and `eslintignore`


# Now you are all set! Have fun and start coding!
