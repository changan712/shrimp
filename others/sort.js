function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp;
            }
        }

    }
    return arr;
}

let a = bubbleSort([6, 1, 2, 0, 10, 5, 3, 2, 2, 1]);
console.log(a);  

function selectionSort(arr){
    let len = arr.length;
    let minIndex,temp; 

    for(let i=0;i<len-1;i++){
        minIndex =i;
        for(let j =i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex] = temp; 
    }

    return arr;

}

let b = selectionSort([6, 1, 2, 0, 10, 5, 3, 2, 2, 1]);
console.log(b);

function insertSort(arr){
    let leng = arr.length;
    let preIndex,current;

    for(let i =1 ;i <len;i++){
        current = arr[i];
        preIndex = i- 1;
        while(preIndex>=0&& arr[preIndex]>current){
            arr[preIndex+1] = arr[preIndex];
            preIndex --
        }

        arr[preIndex+1]  = current;

    }

    return arr;

}

