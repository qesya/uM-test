# Security

## Auth

### Authentication

Authentication is how we identify who a user is, one of the most common ways of doing this in a single page application is via a JSON Web Token or [JWT](https://jwt.io/). During logging in you recieve a token that is stored in the app, on each subsequent request we send, the token is also sent via the request headers in order to show we are allowed to make the request.

The token is usually stored in local/session storage or in a cookie even though it would be safer to store it in our applicaion state, this is becuase if we were to store it there it would be lost if the application were to be refreshed.

## Authorization

Authorization is how we figure out if a user is allowed to access a particular resource.

### RBAC (Role based access control)

RBAC is the most common method for determining if a user is allowed to access a resource. A common example would be the `USER` and `ADMIN` roles used for restricting certain things for standard users whilst letting admins access to it

### PBAC (Permission based access control)

PBAC is a more granular level or authorization, for example some operations should only be allowed by the author of a resource, such as a user deleting a comment they have made. 