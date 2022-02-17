

function superbowlWin(array) {
let matchedItem = array.find(obj => obj.result === "W") 

  if (matchedItem) {
  return matchedItem.year
}
}
