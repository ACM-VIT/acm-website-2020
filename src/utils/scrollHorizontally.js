/* eslint-disable no-param-reassign */
const scrollHorizontally = (element, direction, speed, distance, step) => {
  // Handles scroll upon click
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    if (direction === 'right') {
      element.scrollLeft += step;
    } else {
      element.scrollLeft -= step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
};

export default scrollHorizontally;
