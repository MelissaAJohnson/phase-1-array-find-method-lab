function superbowlWin(array) {
    var found = array.find(element => element.result === "W");
    if (found) {return found.year};
}