const inputField = document.getElementById('cmd_input');

/*
inputField.addEventListener('blur', function() {
    setTimeout(() => {
        inputField.focus();
    }, 0); 
});

window.onload = function() {
    inputField.focus();
};*/

document.addEventListener('keypress', function(event) {
	inputField.focus();
});