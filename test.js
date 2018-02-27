'use strict';


const organization = {
  
};

// function traverseA(data, depth = 0) {
//   const indent = ' '.repeat(depth * 4);
//   Object.keys(data).forEach(key => {
//     console.log(indent + key);
//     traverseA(data[key], depth + 1);
//   });
// }
let counter = 0;
function traverseB(node, indent = 0) {
  counter ++;
  console.log(counter);
  for (const key in node) {
    console.log(' '.repeat(indent), key);
    traverseB(node[key], indent + 4);
  }
}

console.log('this is traverse A', traverseB(organization));
