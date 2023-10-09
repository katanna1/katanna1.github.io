function validateForm() {
    return true;
}

function resetForm() {
    document.getElementById('introForm').reset();
    document.getElementById('final').style.display = 'none';
}

function addCourse(){
    const CRSform = document.getElementById('CRSform');
    const CRSinput = document.createElement('input');
    CRSinput.type = 'text';
    CRSinput.name = 'courses[]';
    CRSinput.required = true;

    const CRSdelete = document.createElement('button');
    CRSdelete.type = 'button';
    CRSdelete.className = 'CRSdelete';
    CRSdelete.textContent = 'Delete';
    CRSdelete.onclick = function() {
        CRSform.removeChild(CRSinput);
        CRSform.removeChild(CRSdelete);
    }

    CRSform.appendChild(CRSinput);
    CRSform.appendChild(CRSdelete);
}

document.getElementById('introForm').addEventListener('submit', function (e){
    e.preventDefault();
    const data = new data(this);

    const result = document.getElementById('final');
    result.innerHTML = '<h3>Your Result: </h3>';
    for (const [key, value] of data.entries()){
        result.innerHTML += '<p><strong>${key}:</strong> ${value}</p>'
    }
    result.style.display = 'block';
});

