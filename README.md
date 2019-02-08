This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [React Semantic UI](https://react.semantic-ui.com/).

## Note to the IT team (End-users)
There are two ways to view this project:
- It is hosted live [here](https://studdybuddy.meroapps.com).
- You can compile and run it yourself. You'll need to download all the required
  dependencies/dependency managers yourself.

  Compiling the project yourself is not recommended, but instructions are provided below anyway.
  Arguably, the intended user experience does not include having the user build and deploy
  the website themselves, so there is no reason for you to do so, either.

## Demo

Site is live at: [studdybuddy.meroapps.com](https://studdybuddy.meroapps.com)

Backup URL: [studdybuddy.netlify.com](https://studdybuddy.netlify.com)

## Unsupported Features

### Login
  While logging into this application would be required in a fully implemented system,
  we currently have no such functionality in this prototype. A login feature has been mocked,
  but it merely provides the illusion of being signed in. The reason for this is because the
  team felt that this was not a significant workflow that needed to be prototyped. We focused
  instead on workflows that are more relevant to the usability considerations we are studying
   (ease of use, flexibility, learnability, etc.).

### Persistance
  Account information, tutor application, group leaving/joining, and user matching preferences
  are not persisted in any way. The actual system should provide a mechanism for doing this,
  but this prototype only allows workflows to be consistently completed once. Refreshing a
  webpage will usually undo any tasks that have been completed on that page, and navigating
  back to pages already viewed has a similar effect.

### About Page
  There is an about page. There is nothing on it because we couldn't think of anything to put
  on it. Something should probably be there, but the team has been preoccupied with other tasks.

## Dependencies

### Yarn
Dependencies may be managed using the [Yarn](https://yarnpkg.com/en/docs/getting-started) depdencency manager.

### npm
They may also be managed manually using [npm](https://www.npmjs.com/).

This project is dependent on:
- ReactJS (react & react-dom)
- NodeJS (installed with npm)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
