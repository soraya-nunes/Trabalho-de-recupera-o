function preencherDados(info){

    document.getElementById('NomeDoPais').value = info[0].name.official;
    document.getElementById('Capital').value = info[0].capital;
    document.getElementById('Idioma').value = Object.values(info[0].languages).toString().split("#").join("#");
    document.getElementById('Populacao').value = info[0].population;
    document.getElementById('Continente').value = info[0].continents;

    const imagem = document.getElementById("bandeira")
    imagem.innerHTML =`<img src="${info[0].flags.png}">`

    console.log(info)

}

const pais = async() => {
    
    const pais = document.querySelector(".pais").value

    const url = `https://restcountries.com/v3.1/name/${pais}/`
    
    const dados = await fetch(url);
    const info = await dados.json();

    preencherDados(info);

}