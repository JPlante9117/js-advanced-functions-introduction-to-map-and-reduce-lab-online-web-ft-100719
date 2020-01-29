// Map

function mapToNegativize(arr){
    let negArr = []
    for(let i = 0; i < arr.length; i++){
        negArr.push(arr[i] * -1)
    }
    return negArr
}

function mapToNoChange(arr){
    let sameArr = []
    arr.forEach(index =>{sameArr.push(index)})
    return sameArr
}

function mapToDouble(arr){
    let doubleArr = []
    arr.forEach(index =>{doubleArr.push(index * 2)})
    return doubleArr
}

function mapToSquare(arr){
    let squareArr = []
    arr.forEach(index => {squareArr.push(index ** 2)})
    return squareArr
}

// Reduce

function reduceToTotal(arr, startingPoint = 0){
    let total = startingPoint
    arr.forEach(item =>{total += item})
    return total
}

function reduceToAllTrue(arr){
    let truthyArr = []
    arr.forEach(item =>{
        if(item){
            truthyArr.push(item)
        }
    })
    if(truthyArr.length === arr.length){
        return true
    } else{
        return false
    }
}

function reduceToAnyTrue(arr){
    const newArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i]){
            newArr.push(arr[i])
        }
    }
    if(newArr.length > 0){
        return true
    }
    else{
        return false
    }
}