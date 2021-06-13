//console tafel van 9
for (number = 1; number <= 10; number++) {
    const multiply = number * 9;
    console.log(number + " x 9 = " + multiply);
}

//console  alle tafels van 1 t/m 10
for (tableNum = 1; tableNum <= 10; tableNum++){
    for (number = 1; number <= 10; number++) {
        const multiply = number * tableNum;
        console.log(number + " x " + tableNum + " = " + multiply);
    }  
}