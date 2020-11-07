// Check character limit in description textarea
var el;
el = document.getElementById('desc-textarea');
el.addEventListener('keydown', countCharacters, false);

function countCharacters(e) {
    var textEntered;
    var textarea = document.getElementById('desc-textarea');

    textEntered = document.getElementById('desc-textarea').value;
    if (textEntered.length > 200) {
        textarea.classList.add('uk-form-danger');
    }

    else {
        textarea.classList.remove('uk-form-danger');
    }
};


// Check form that all fields contain data and alert user
function submitSuccess() {
    var orgName = document.getElementById('org-name').value;
    var visitors = document.getElementById('form-stacked-select').value;
    var email = document.getElementById('email').value;
    var desc = document.getElementById('desc-textarea').value;

    if(orgName.length == 0 || visitors.length == 0 || email.length == 0 || desc.length == 0) {
        alert('Please fill out all fields.');
    }

    else {
        alert('Success! You will hear back from us soon.');
    }      
};