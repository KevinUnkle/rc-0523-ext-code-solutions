# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks are special functions that are only available while React is rendering. They let you "hook into" different React features.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  They can only be called from React components and other hooks. They must be called on every render.
- What is the purpose of state in React?
  Everything that impacts the rendering of a component must be in 'props' or in 'state'. The useState hook is needed becuase local variables cannot retain their value across renderings.
- Why can't we just maintain state in a local variable?
  Every time the component function is called, local variables get reset, so they do not retain their values across renderings.
- What two actions happen when you call a `state setter` function?
  First, React's cache of the state value is updated with the new value. Second, React schedules a re-render of the component.
- When does the local `state variable` get updated with the new value?
  The next time useState is called within that component, on the next re-render.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
