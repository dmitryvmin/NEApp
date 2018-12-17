import randomColor from 'randomcolor';
import _ from 'lodash';
export const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'gray'];

export const getSwatches = (colors) => {
    const swatches = {};
    colors.forEach(c => {
        const colors = randomColor({
            count: 12,
            hue: (c === 'gray') ? 'monochrome' : c,
        });
        swatches[c] = colors;
    });

    return swatches;
}

export const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export const getFlatMap = swatches => {
    const map = [];

    for (let c in swatches) {
        swatches[c].forEach(s => {
            const m = {
                root: c,
                color: s
            }

            map.push(m);
        })
    }

    return map;
}

export const batchSwatches = (swatches, swatchPerPage) => {
    const results = [];

    while (swatches.length) {
        results.push(swatches.splice(0, swatchPerPage));
    }

    return results;
}

export const getRandom = swatches => {
    const map = getFlatMap(swatches);
    const randomSwatch = _.sample(map);

    return randomSwatch;
}