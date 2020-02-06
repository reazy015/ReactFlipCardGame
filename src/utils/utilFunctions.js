export const splice2DArray = (array, id) => {
    return array.map((row) => row.map((col) => {
        if(col.id === id) return false;
        return col;
    }))
};

export const getArrayFilledWithRandomImages = (randomImagesArray, array) => {
    const imageLimiter = {};
    return array.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
            let image = randomImagesArray[Math.floor(Math.random() * (randomImagesArray.length))];
            if(imageLimiter[`${image.id}`]) {
                randomImagesArray = randomImagesArray.filter(imageItem => imageItem.id !== image.id);
            } else {
                imageLimiter[`${image.id}`] = 1;
            }
            return {id: image.id, image: image.src};
        });

    });
};

const getShuffledArr = (arr) => {
    return arr.reduce(
        (newArr, _, i) => {
            let rand = i + ( Math.floor( Math.random() * (newArr.length - i) ) );
            [newArr[rand], newArr[i]] = [newArr[i], newArr[rand]];
            return newArr
        }, [...arr]
    )
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