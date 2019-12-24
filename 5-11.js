
//naive
const doesIntersect = (x1, y1, x2, y2, a1, b1, a2, b2) => { // assuming first rect is further left
    if( ( (x1 < a1 && a1 < x2) || (x1 < a2 && a2 < x2) ) //atleast one of the x axis points on the second rect is within the first rect
    &&  ( (y1 < b1 && b1 < y2) || (y1 < b2 && b2 < y2) ) ) // same for y axis points
        return true
    return false
}

const intersection = (x1, y1, x2, y2, a1, b1, a2, b2) => {
 //sigh
}