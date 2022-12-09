# Error Handling

## API Errors

It's general practice to use interceptors for handling API errors. These can be used alongside a state managment system like `Redux-Toolkit` and `Redux-Saga` to disatch an action to display a notification to the user to tell them something has gone wrong or to a variety of other tasks such as logging out unauthorised users or sending new requests to refresh auth tokens.

## In App Errors

We can use Error boundaries inside our application to deal with errors that happen in the React tree. We shoud utilise multiple Error Boundarys throughout the application so if an error were to occur the rest of the application will still work without needing to restart it.

[More information on Error Boundaries](https://reactjs.org/docs/error-boundaries.html)

