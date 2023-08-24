# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
you can request the data within useEffect so that the reqeust is made once the component is mounted or whenever the dependency changes you don't want to fetch the data everytime the component renders
- What browser function can be used to make HTTP requests to a server in React?
fetch
- How do you use `useEffect` to load component data just once when the component mounts?
set dependency to []
- How do you use `useEffect` to load component data every time the data key changes?
set dependency to the date key
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
React Query, Vercel SWR

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```
