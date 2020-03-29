// Set offsetX and widths for each navlink
export default (width, left, index, leftsAndWidths) => {
  const newLeftsAndWidths = [...leftsAndWidths];
  newLeftsAndWidths[index].left = left;
  newLeftsAndWidths[index].width = width;
  leftsAndWidths = newLeftsAndWidths;
};
