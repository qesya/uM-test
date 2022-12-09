# Components and Styling

## Component Best Practices

#### Colocate things as close as possible to where it's being used

Keep components, functions, styles, state etc as close as possible to the feature where it's being used. Not only will this make the codebase more readable but it will also improve application performance by limiting redundant re-renders when the state updates.

#### Avoid large components with nested rendering functions

Do not add multiple rendering functions inside your application, instead, if there is a piece of UI that can be considered a unit, extract that out to a seperate component

```
// instead of this
const Component = () => {
    const renderList = () => {
        return <ul>...</ul>
    }

    return <div>{renderList()}</div>
}

// try this
const List = () => {
    return <ul>...</ul>
}

const Component = () => {
    return (
        <div>
            <List />
        </div>
    )
}
```

#### Limit the number of props a component is accepting as input

If your component is accepting too many props you might want to consider splitting it into multiple components or use the composition technique vis children or slots. More can be found in this article on [React Component Composition](https://formidable.com/blog/2021/react-composition/#:~:text=In%20terms%20of%20refactoring%2C%20React,structure%20and%20complete%20your%20application.)

#### Abstract shared components into a component Library

For larger projects it is a good idea to build abstractions around all shared components. It makes the application more consistent and easier to maintain.

If you are using a 3rd party component library it's a good idea to wrap them in order to adapt them to the applications needs. It also makes it easier to make changes without affecting the applications functionality

## Component Libraries

react-code-test uses [`Headless UI`](https://headlessui.dev/), which is a collection of `UI Primitives` to build it's components, and [`tailwindcss`](https://tailwindcss.com/G) for adding CSS to our components.

## Storybook

[Storybook](https://storybook.js.org/) is a tool for developing and testing components in isolation. It is a catalogue of all the components your application is using.
