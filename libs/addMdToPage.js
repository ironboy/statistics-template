import addToPage from './addToPage.js';

// add markdown converted to html to page
export default function addMdToPage(markdown) {
  console.log(marked.parse(markdown))
  addToPage(marked.parse(markdown));
}