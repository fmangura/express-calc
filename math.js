function mean(arr) {
    let answer = 0
    for(let num of arr){
        answer += num
    }
    return answer/arr.length;
}

function median(arr){
    arr.sort(function(a,b){return a-b})
    let answer = arr[Math.floor(arr.length/2)]
    return answer;
}

function mode(arr){
    let obj = {}
    arr.sort(function(a,b){return a-b})

    for (num of arr){
        if(obj[num]){
            obj[num] += 1;
        } else {
            obj[num] = 1;
        }
    }
    console.log(obj);
    let values = Object.values(obj);
    console.log(values)


    let answer = values.reduce(function(acc, curr){
        return curr > acc ? curr : acc;
    });

    console.log(answer)
    const key = Object.keys(obj).find(key => obj[key] === answer);
    return key
}

module.exports = {
    mean: mean,
    median: median,
    mode: mode,
}