// Get element's offsetY value
const offsetY = (el, findOffset) => {
  if (!el) return;
  findOffset(el.getBoundingClientRect().y - 180);
};

export default offsetY;
