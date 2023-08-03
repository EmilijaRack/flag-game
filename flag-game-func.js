// const container = document.querySelector(".flag-container");
// const btnContainer = document.querySelector(".btn-container");
// const redFlag = document.createElement("img");
// redFlag.src = "flag-red.svg";
// const greenFlag = document.createElement("img");
// greenFlag.src = "flag-green.svg";
// const row = document.createElement("ul");
// const column = document.createElement("li");

// Array.from({ length: 6 })

//   .map((_, rowIndex) => {
//     const x = row.cloneNode(true);

//     const flag = rowIndex === 0 ? redFlag : greenFlag;
//     Array.from({ length: rowIndex + 1 })
//       .map(() => column.cloneNode(true).appendChild(flag.cloneNode(true)))
//       .forEach(x.appendChild.bind(x));
//     return x;
//   })
//   .forEach(container.appendChild.bind(container));
