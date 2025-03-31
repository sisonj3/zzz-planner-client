// Functions will exclude index

// Return first half of array before inputted index
export default function placeBetween(arr, index1, index2) {

    let temp = [...arr];
    let newArr = [];

    let draggedChar = temp[index1];

    for (let i = 0; i < temp.length; i++) {
        if (temp[i].name != draggedChar.name) {
            newArr.push(temp[i]);
        }

        if (i == index2) {
            newArr.push(draggedChar);
        }
    }

    return newArr;
}
