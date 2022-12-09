# Performance

## Code Splitting

Code splitting is a technique of splitting production JavaScript code into smaller files allowing the application to be only partially downloaded. Its important to identify where to split code as if you try to split everything it can actually make the performance worse. Code splitting is most effective  on the routes level and for any lazy loaded parts of an application.

## Component and State optimization

- It's important not to put everything in a single state as this might trigger unnecessary re-renders. Best practice is to split any global state into multiple stores based on where it is being used.
- State should be kept close to where it is being used. This helps to prevent re-rendering components that don't depend on the updated state.

## Image optimization

- Lazy load images that aren't in the viewport
- Use modern web formats such as WEBP for faster image loading
- Use srcset to load the most optimal image for the screen