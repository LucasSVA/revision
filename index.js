// ---- ex 1 

// const sortLetters = (str) => {

//     let wordSplit = str.split("")
//     wordSplit.sort();
//     let wordJoin = wordSplit.join("");
//     return wordJoin;

// }


// console.log(sortLetters("konexio"));



// --- ex 2 

// const countEach = (str) => {
//     let letterX = 0
//     let letterO = 0
//     let strSplit = str.split("")

//     strSplit.forEach(element => {
    
//     if (element === "x") {
//         letterX += 1
        
//     }else if (element === "o") {
//         letterO += 1
//     }

//     });
//     //console.log(letterX, letterO);

//     if (letterX === letterO) {
//         console.log(true);
//     }else{
//         console.log(false);
//     }

// }
// countEach("xxxoooox")
// countEach("xox")