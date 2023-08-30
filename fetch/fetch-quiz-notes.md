# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?
  a Promise that resolves to the Response object
- What is the default request method used by `fetch()`?
  GET method
- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  Specify the request method by providing an options object as the second argument to fetch()
- How does `fetch` report errors?
  A fetch() promise only rejects when a network error is encountered. A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

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
