// Get element's offsetY value
export default (el, findOffset) => {
  if (!el) return;
  findOffset(el.getBoundingClientRect().y - 80);
  if (el.id === 'landing-section') findOffset(el.getBoundingClientRect().y);
  if (el.id === 'about-section') findOffset(el.getBoundingClientRect().y + 180);
};
