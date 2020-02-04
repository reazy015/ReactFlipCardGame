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
// image = {id, src}; imageLimiter = { id: times }
export const getArrayFilledWithRandomImages = (randomImagesArray, array) => {
    const imageLimiter = {};
    return array.map((row, rowIndex) => row.map((col, colIndex) => {

        let image = randomImagesArray[Math.floor(Math.random() * randomImagesArray.length)];
        if(imageLimiter[`${image.id}`] === 4) {
            randomImagesArray = randomImagesArray.filter(item => item.id !== image.id);
            image = randomImagesArray[Math.floor(Math.random() * randomImagesArray.length)];
        }

        imageLimiter[`${image.id}`] = imageLimiter[`${image.id}`] ? imageLimiter[`${image.id}`] + 1 : 1;
        console.log(randomImagesArray);
        return {id: image.id, image: image.src};
    }));
};

export const getNoNRepeatingRandomNumbersArray = (qty) => {
    const result = [];
    while(result.length < qty) {
        const number = Math.floor(Math.random() * 100);
        if(result.indexOf(number) < 0) {
            result.push(number);
        }
    }
    return result;
};