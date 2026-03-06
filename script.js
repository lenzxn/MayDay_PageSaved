// Simulerad blockering av tråden
setInterval(() => {
  let start = Date.now();
  while (Date.now() - start < 1000) {}
}, 3000);

// Skriver ut HTML direkt i dokumentet
document.write("<h1 style='color:black;'>HELLO FROM DOCUMENT.WRITE()</h1>");
document.write("<p>Another document.write() call</p>");

// Förhindrar användaren att navigera bakåt
history.pushState(null, "", location.href);
window.onpopstate = () => history.go(1);

// Ändrar bakgrundsfärgen slumpmässigt var 500ms
// setInterval(() => {
//   document.body.style.backgroundColor =
//     "#" + Math.floor(Math.random() * 16777215).toString(16)
// }, 500)

// Visar innehållet på sidan efter 5 sekunder
setTimeout(() => {
  document.body.style.display = "block";
}, 5000);

// Loggar 10000 tal till konsolen efter 1 sekund
setTimeout(() => {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }
}, 1000);

// // Visar en alert när sidan har laddats
// document.addEventListener("DOMContentLoaded", function () {
//   alert("Page loaded!")
// })

// Loggar 100 000 siffror direkt när sidan laddas
for (let i = 0; i < 100000; i++) {
  console.log(i);
}
