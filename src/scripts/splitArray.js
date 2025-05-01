// Functions will exclude index

// Return first half of array before inputted index
export default function placeBetween(arr, index1, index2) {

    let temp = [...arr];
    let newArr = [];

    console.log(index1 + " " + index2);

    let draggedChar = temp[index1];

    for (let i = 0; i < temp.length; i++) {
        if (temp[i].name != draggedChar.name && i != index2) {
            newArr.push(temp[i]);
        } else if (i == index2) {
            if (index1 > index2) {
                newArr.push(draggedChar);
                newArr.push(temp[i]);
            } else if (index2 > index1) {
                newArr.push(temp[i]);
                newArr.push(draggedChar);
            } else {
                newArr.push(draggedChar);
            }
            
        }

    }

    return newArr;
}
