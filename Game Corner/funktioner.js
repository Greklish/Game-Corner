var elForm, elUserName, elOutput;

elForm = document.getElementById('formReg');
elUserName = document.getElementById('txtUserName');
elOutput = document.getElementById('output');

function showUserName(event){

    var Username = elUserName.value;
    localStorage.setItem('visitorname', Username);


    elOutput.textContent = 'Welcome ' + Username;

    event.preventDefault();
}

elForm.addEventListener('submit', showUserName, false);

var xhr = new XMLHttpRequest();

xhr.onload = function() {

    responseObject = JSON.parse(xhr.responseText);

    var newContent = '';

    for (var i = 0; i < responseObject.topGames.length; i++) {

        newContent += '<div class="Top Games">';
        newContent += 'alt="' + responseObject.topGames[i].name + '" />';
        newContent += '<p><b>' + responseObject.topGames[i].name+ '</b><br>';
        newContent += '<img src="' + responseObject.topGames[i].image + '"class="bilder2" ';
        newContent += '</div>';

    }
    document.getElementById('content').innerHTML = newContent;
};
xhr.open('GET', 'game.json', true);
xhr.send(null);
