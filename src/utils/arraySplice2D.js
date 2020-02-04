export const splice2DArray = (array, coords) => {
    return array.map((row, rowIndex) => row.map((col, colIndex) => {
        if(rowIndex === coords[0][0] && colIndex === coords[0][1]) {
            return false;
        }
        if(rowIndex === coords[1][0] && colIndex === coords[1][1]) {
            return false;
        }
        return col;
    }))
};