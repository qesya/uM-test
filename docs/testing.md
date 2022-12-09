# Testing

Write tests. Not too many. Mostly integration.

## Types of tests:

### Unit Tests

Unit tests are test that cover small units of an application in isolation. Unit tests are best for components and functions that are shared throughout the application as these could be difficult to test in integration tests if he are being used differently for specific scenarios.

### Integration Tests

Integration tests are tests that cover multiple parts of an application at once. Most tests for a frontend app should be integration tests as these will give us the most coverage of our code. Unit tests on their own aren't enough as even if those all pass the app could still throw an error due to how the units are working together. We should have integration tests for each scoped feature in the application.

#### E2E

End-to-end testing are test that test an application in it's entirety. These will run the whole application, front-end and back-end, using automation tools and verify that the application works as intended.

## Tooling:

[Vitest](https://vitest.dev/)

Vite Test is a testing framework built to go hand in hand with the Vite Build tool. Like Vite it is built on top of ESM so is extremly fast.

[Testing Library](https://testing-library.com/)

Testing library provides a set of tools that let you test your app in a similar way to how it would be used by a real world user. It doesn't test what current state management value a component has, but instead tests what a component renders on the screen.

[Cypress](https://www.cypress.io/)

Cypress is a tool for running automated e2e tests. You define workflows that a real user would use and then cypress executes those workflows.
