# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  When we get a response from an API call, or pull some data from our database per user request, and want to display the information.
- Why is it important for React components to be data-driven?
  It helps ensure our code is providing useful information, and we are not writing unnecessary components.
- Where in the component code would a list of React components typically be built?
  Inside some user-defined 'List' component
- What `Array` method is commonly used to create a list of React components?
  The map method!
- Why do components in a list need to have unique keys?
  Because if components get reordered, or moved around, or more get added/removed, then React needs a way to keep track of what is what.
- What is the best value to use as a "key" prop when rendering lists?
  If the data is coming from some database, it should have its own unique identifier. If it is your own local data, you can use an incrementing counter or libraries like uuid.

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
