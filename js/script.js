const inputElement = document.getElementById('inputText');
const outputElement = document.getElementById('outputText');

const upperCase = () => {
    outputElement.innerText = `Output: ${inputElement.value.toUpperCase()}`;

}