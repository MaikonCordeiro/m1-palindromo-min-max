function isPalindrome(frase) {
    let frasesPoli = frase.toLowerCase().replace(/\s/g, '');
    let fraseVerify = "";

    for (let i = frasesPoli.length - 1; i >= 0; i--) {
        fraseVerify += frasesPoli[i];
    } return frasesPoli === fraseVerify;
}

console.log(isPalindrome('Radar'));
console.log(isPalindrome('A sacada da casa'));
console.log(isPalindrome('A torre da derrota'));
console.log(isPalindrome('Programação'))

function arrayMaxMin(arr) {

    if (arr.length === 0) {
        return "O array está vazio.";
    }

    let minimo = arr[0];
    let maximo = arr[0];


    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimo) {
            minimo = arr[i];
        }
        if (arr[i] > maximo) {
            maximo = arr[i];
        }
    }


    return [minimo, maximo];
}

console.log(arrayMaxMin([3, 1, 9, 7, 4, 2]));  
console.log(arrayMaxMin([-5, 0, 15, 8, -2]));  
console.log(arrayMaxMin([])); 

