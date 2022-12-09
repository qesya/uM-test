# REACT CODE TEST

## Get Started

Prerequisites:

-   Node 17+

To set up react-code-test execute the following commands in your terminal

---

```bash
git clone git@github.com:uMedeor/react-code-test.git
cd react-code-test
cp .env.example .env
npm i
```

---

react-code-test uses mockoon to mock API calls, to install the Mockoon cli service run the following commands in your terminal

##### `npm install -g @mockoon/cli`

To run the mockoon cli which is required to serve the authentication mock API's run the following commands in your terminal from the project root.

##### `mockoon-cli start --data react-code-test.json`

For more information about this service, or to use their desktop application, check here, [Mockoon](https://mockoon.com/)

---

##### `npm run dev`

Runs the app in development mode.
Open [http://localhost:9000](http://localhost:9000) to view it in the browser

---

##### `npm build`

Builds the app for production to the `build` folder\
It will automatically bundle the application for production mode and optimize it for the best performance.

For more information see the official React documentation about [deployment](https://facebook.github.io/create-react-app/docs/deployment)

---

## Table Of Contents:

-   [Application Overview](docs/application-overview.md)
-   [Project Configuration](docs/project-configuration.md)
-   [Project Structure](docs/project-structure.md)
-   [Components And Styling](docs/components-and-styling.md)
-   [API Layer](docs/api-layer.md)
-   [State Management](docs/state-management.md)
-   [Testing](docs/testing.md)
-   [Error Handling](docs/error-handling.md)
