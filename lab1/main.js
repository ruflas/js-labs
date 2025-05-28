// Prompt and greeting
var name = prompt('What is your name?', '');
document.getElementById('greeting').innerHTML = `Exercise 1. Hello, ${name}`;

// Array manipulation
var tablica = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
alert(tablica[2]); // Display any item

tablica[tablica.length - 1] = 'Orange';
alert(tablica[tablica.length - 1]);

tablica[5] = 'Pink';
tablica[tablica.length] = 'Brown';
tablica.push('White', 'Black');
tablica.unshift('Gold', 'Silver');

// Second array
var nowaTablica = ['Apple', 'Banana', 'Cherry'];
document.getElementById('array-output').innerHTML += `<p>First element: <strong>${nowaTablica[0]}</strong></p>`;
document.getElementById('array-output').innerHTML += `<p>Last element: <strong>${nowaTablica[nowaTablica.length - 1]}</strong></p>`;
nowaTablica.unshift('Mango');
document.getElementById('array-output').innerHTML += `<p>New first element: <strong>${nowaTablica[0]}</strong></p>`;

// DOM manipulation
document.getElementById('dom-paragraph-1').innerHTML = `Half of tablica using while: `;
let i = 0;
while (i < tablica.length / 2) {
    document.getElementById('dom-paragraph-1').innerHTML += tablica[i] + " ";
    i++;
}

document.getElementById('dom-paragraph-2').innerHTML = `All nowaTablica items using for: `;
for (let j = 0; j < nowaTablica.length; j++) {
    document.getElementById('dom-paragraph-2').innerHTML += nowaTablica[j] + " ";
}

function showDOMData() {
    alert("Name from DOM: " + name + "\nFirst from tablica: " + tablica[0]);
}
