// const mrarr = [0,1,2,3,4,5];
// const superhero = ["spiderman", "ironman"];
// const myarr = new Array(1,2,3,4); // Corrected this line
// myarr.pop(5);

// console.log("A", myarr);

// const myn=mrarr.slice(1,3)
// console.log(myn)
// console.log("B",myarr);

// const marvelsuperheros=["Thor","spider","hawkeye"]

// const otherheros=["Doremon","Shinchan"]

// const yoyo=[...marvelsuperheros, ...otherheros]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
