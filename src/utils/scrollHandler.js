// Handle navbar events on scroll
export default (links, setLinks) => {
  let highest = 0;

  // Set the currently active link
  links.map(link => {
    if (window.scrollY + 50 > link.offsetY) {
      if (link.id > highest) {
        highest = link.id;
      }
    }
    return link;
  });

  // Highlight the currently active link
  const Links = links.map(link => {
    link.active = false;
    if (link.id === highest) {
      link.active = true;
    }
    return link;
  });
  setLinks(Links);
};
