// celsius to farenheit :
// C = (X * 9/5 + 32) F

// farenheit to celsius:
// F =  (x-32) * 5/9 C

function convertToCelsius(tempInFarenheit){
    celsius = (tempInFarenheit - 32) * 5/9
    return `Temperature is ${celsius.toFixed(1)} degree celsius.`
}

function convertToFarenheit(tempInFarenheit){
    farenheit = (tempInFarenheit * 9/5 + 32)
    return `Temperature is ${farenheit.toFixed(1)} degree farenheit.`
}


console.log(convertToCelsius(32))
console.log(convertToFarenheit(0))