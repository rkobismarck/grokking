const search = () => {
    'use strict';
    const binarySearch = (orderedArray, key) => {
        let size  = orderedArray.length;
        if(size == 1){
            return orderedArray.pop() == key ? true : false;
        }else{
            let low   = 0;
            let mid   = Math.ceil(size/2);
            let pivot = orderedArray[mid];
            (key < pivot) ? size = mid-1 : low = mid;
            return binarySearch(orderedArray.slice(low,size),key);
        }
    }
    return{
        binarySearch
    }
}

module.exports = search();