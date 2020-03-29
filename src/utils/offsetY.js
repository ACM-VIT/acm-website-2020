// Get element's offsetY value
export default (el, findOffset) => {
  if (!el) return;
  if (el.id === 'landing-section') findOffset(el.getBoundingClientRect().y);
  else if (el.id === 'about-section')
    findOffset(el.getBoundingClientRect().y + 200);
  else findOffset(el.getBoundingClientRect().y + 800);
};
