const sumar = (a, b = 10) => {
    return (a + b);
};

// cuando tengo solo un return...
const sumar2 = (a, b = 10) => (a + b);

console.log(sumar(5)); 
console.log(sumar2(5)); 