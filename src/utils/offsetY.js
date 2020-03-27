// Get element's offsetY value
export default (el, findOffset) => {
  if (!el) return;
  findOffset(el.getBoundingClientRect().y - 180);
};
