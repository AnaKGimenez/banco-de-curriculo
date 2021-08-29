
const cleanForm = () => {
    document.getElementById('name').value = '';
    document.getElementById('job').value = '';
    document.getElementById('birthday').value = '';
    document.getElementById('civil').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('zip').value = '';
    document.getElementById('street').value = '';
    document.getElementById('neighbor').value = '';
    document.getElementById('town').value = '';
    document.getElementById('state').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('phone1').value = '';
    document.getElementById('phone2').value = '';
    document.getElementById('cel').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('email').value = '';
    document.getElementById('personal_id').value = '';
    document.getElementById('social_id').value = '';
    document.getElementById('car').value = '';
    document.getElementById('license').value = '';
};

const postCandidate = async () => {
    const url = 'http://localhost:5000/register';

    const birthday = new Date(
        document.getElementById('year').value,
        document.getElementById('month').value,
        document.getElementById('day').value
    )

    const data = {
        "name": document.getElementById('name').value,
        "job": document.getElementById('job').value,
        "birthday": birthday,
        "civil": document.getElementById('civil').value,
        "gender": document.getElementById('gender').value,
        "zip": document.getElementById('zip').value,
        "street": document.getElementById('street').value,
        "neighbor": document.getElementById('neighbor').value,
        "town": document.getElementById('town').value,
        "state": document.getElementById('state').value,
        "uf": document.getElementById('uf').value,
        "phone1": document.getElementById('phone1').value,
        "phone2": document.getElementById('phone2').value,
        "cel": document.getElementById('cel').value,
        "contact": document.getElementById('contact').value,
        "email": document.getElementById('email').value,
        "personal_id": document.getElementById('personal_id').value,
        "social_id": document.getElementById('social_id').value,
        "car": document.getElementById('car').value,
        "license": document.getElementById('license').value
    }

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            alert("Cadastro con sucesso");
            cleanForm();}
            )
        .catch(err => {
            console.log(err);
            alert('Erro no cadastro!');
        });
}

document.getElementById("saveBtn")
    .addEventListener("click", postCandidate);