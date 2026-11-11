function init(){
//add your javascrip between these two lines of code
    const entryInput = document.getElementById('entryinput');
    const entryButton = document.getElementById('entrybutton');
    const textOutput = document.getElementById('textoutput');

    entryButton.addEventListener('click', function() {
        const keyInput = entryInput.value;
        alert("Bryan Rebolledo: " + keyInput);
        textOutput.textContent = keyInput;
    });
}

window.addEventListener('load', init);
