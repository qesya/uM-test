# Application Overview

This is the framework for a basic react app with authentication. 

Currently the app supports a number of mock API's created and run using [Mockoon](https://mockoon.com/)

The login details for the authentication API are 

email: joe@bloggs.com, 
password: letmein123

We would like you to implement a UserProfile feature that would allow a user to:
* display their exsisting profile information
* update their exsisting profile information
* change their password. 
* display any necessary API errors

The 'auth/me' API returns the profile information that needs to be displayed.

PUT - '/auth/change_password' - This API expects two parameters, 'old_password' and 'new_password', if the 'old_password' parameter doesn't match the existing password shown above you will recieve a 400 error

PATCH - '/auth/update_profile' - This API expects the following body

{
  "id",
  "firstName"
  "lastName"
  "email"
  "address_line_1"
  "address_line_2"
  "city"
  "postcode"
}

The id parameter must match the id returned by the 'auth/me' API otherwise you will recieve a 400 error

firstName, lastName, email, address_line_1, city, postcode are all required fields, if any are missing you will recieve a 400 error

As well as the UserProfile feature we would also like yout to create a basic landing page for an application of your choice that includes a header bar and a navigation menu.

Please make sure to use the technology included in this project such as Tailwind, HeadlessUI, React Toolkit and RTK Query etc but feel free to add any packages you feel you require to complete the task.

If you have time to write some unit tests or E2E tests for the features you are writing please do but spend no more than a couple of hours on this task.

Please make sure to read all the documentation fully as it will help you understand how this project has been set up.
