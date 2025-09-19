const inputElement = document.getElementById('inputText');
const outputElement = document.getElementById('outputText');

const upperCase = () => {
    outputElement.innerText = `Output: ${inputElement.value.toUpperCase()}`;

}
const lowerCase =() =>{
    outputElement.innerText = `Output: ${inputElement.value.toLowerCase()}`;
}
const reverseCase = () => {
    outputElement.innerText = `Output: ${inputElement.value.split('').reverse().join('')}`;
}
const textLength = () => {
    outputElement.innerText = `Output: ${inputElement.value.length}`;
}
const wordCount = () => {
    const words = inputElement.value.split(" ");
    outputElement.innerText = `Output: ${words.length}`;


}
const clearText=() =>{
    inputElement.value = '';
    outputElement.innerText = '';

}