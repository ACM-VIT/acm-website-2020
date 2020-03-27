/* eslint-disable no-param-reassign */
// Set offsetX and widths for each navlink
const setProperties = (width, left, index, leftsAndWidths) => {
  const newLeftsAndWidths = [...leftsAndWidths];
  newLeftsAndWidths[index].left = left;
  newLeftsAndWidths[index].width = width;
  leftsAndWidths = newLeftsAndWidths;
};

export default setProperties;
