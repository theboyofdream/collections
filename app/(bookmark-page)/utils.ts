// function getRandomArrayItem(array: any[]) {
//     return array[Math.floor(Math.random() * array.length)]
// }

// function getRandomClassNameOfPattern() {
//     return pattern.prefix + getRandomArrayItem(pattern.names) + "-" + getRandomArrayItem(pattern.sizes)
// }

// modifying prototype of array for random function
// Object.defineProperty(Array.prototype, 'random', {
//     value: function () {
//         return this[Math.floor(Math.random() * this.length)];
//     },
//     enumerable: false,
//     writable: true,
//     configurable: true
// });
import { ClassNameOfPatterns, pastelColors, DaisyuiThemes } from "./const";

function random(array: any[]) { return array[Math.floor(Math.random() * array.length)] }

const getRandom = {
    // itemFromArray: (array: any[]) => array[Math.floor(Math.random() * array.length)],
    // classNameOfPattern: () => pattern.prefix + getRandomArrayItem(pattern.names) + "-" + getRandomArrayItem(pattern.sizes),
    // pastelColorHexCode: () => "#" + getRandom.itemFromArray(pastelColors)
    // classNameOfPattern: () => pattern.prefix + pattern.names.random() + "-" + pattern.sizes.random(),
    classNameOfPattern: () => random(ClassNameOfPatterns),
    pastelColorHexCode: () => random(pastelColors).hex,
    daisyTheme: () => random(DaisyuiThemes)
}

export {
    getRandom,
    // calculateComplementryColor,
    calculateColor
}

// var rgb_color = [255, 0, 255];
// var hex_color = '#FF00FF';

// function calculateComplementryColor(color: string /*, hex = false */) {
//     // if (hex) {
//     return '#' +
//         ("0" + (255 - parseInt(color.substring(1, 3), 16)).toString(16)).slice(-2) +
//         ("0" + (255 - parseInt(color.substring(3, 5), 16)).toString(16)).slice(-2) +
//         ("0" + (255 - parseInt(color.substring(5, 7), 16)).toString(16)).slice(-2);
//     // } else {
//     //     return [(255 - color[0]), (255 - color[1]), (255 - color[2])];
//     // }
// }

function calculateColor(hexColor: string) {
    // If HEX --> store the red, green, blue values in separate variables
    const color = hexColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

    const r = parseInt(hexColor[1]);
    const g = parseInt(hexColor[2]);
    const b = parseInt(hexColor[3]);

    // HSP equation from http://alienryderflex.com/hsp.html
    const hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    return (hsp > 127.5) ? "#000" : "FFF";
    // if (hsp > 127.5) {
    //     return "#000";
    //     return 'light';
    // }
    // else {
    //     return "#FFF"
    //     return 'dark';
    // }

    // return '#' +
    //     ("0" + (255 - parseInt(color.substring(1, 3), 16)).toString(16)).slice(-2) +
    //     ("0" + (255 - parseInt(color.substring(3, 5), 16)).toString(16)).slice(-2) +
    //     ("0" + (255 - parseInt(color.substring(5, 7), 16)).toString(16)).slice(-2);
}

// console.log(calculate(rgb_color));
// console.log(calculate(hex_color, true));