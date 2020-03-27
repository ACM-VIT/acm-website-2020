/* eslint-disable no-param-reassign */
// Set offsetY for every section in state
const initOffsetPos = (links, setLinks, offsetPos) => {
  const newLinks = links.map((link, index) => {
    link.offsetY = offsetPos[index];
    return link;
  });
  setLinks(newLinks);
};

export default initOffsetPos;
