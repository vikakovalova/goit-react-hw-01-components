function randomBcgColor() {
  let bcgColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + bcgColor;
}

export default randomBcgColor;
