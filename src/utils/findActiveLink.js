// Finds the currently active link
export default links => {
  let currentLinkID;
  links.forEach((link, index) => {
    if (link.active) currentLinkID = index;
  });
  return currentLinkID;
};
