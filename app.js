var result = document.getElementById('result');

const superheroes = {
    data : null
}

function getSuperheroes(data){
    alert(superheroes.data);
}


fetch('http://localhost:9000/info2180-lab4/superheroes.php', {
     method: 'GET'
 })
 .then((response) => {
     return response.text();
 })
 .then(data => {
     superheroes.data = data;
     result.addEventListener('click', getSuperheroes);
 })
 .catch((error) => {
     console.error('Error:', error);
 });