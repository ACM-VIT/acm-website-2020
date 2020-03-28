/* eslint-disable no-param-reassign */
// Set offsetY for every section in state
export default (links, setLinks, offsetPos) => {
  const newLinks = links.map((link, index) => {
    link.offsetY = offsetPos[index];
    return link;
  });
  setLinks(newLinks);
};
