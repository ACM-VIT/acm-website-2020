// Finds the currently active link
const findActiveLink = links => {
  let currentLinkID;
  links.forEach((link, index) => {
    if (link.active) currentLinkID = index;
  });
  return currentLinkID;
};

export default findActiveLink;
