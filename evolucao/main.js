const nomePokemon = location.search
const nomePagina = document.querySelector('title');
const h1Pagina = document.getElementById('nome-do-pokemon');
const imagemPokemon = document.getElementById('imagem-do-pokemon');


nomePagina.textContent = `Página do ${nomePokemon}`;

if (nomePokemon == '?evolucao=squirtle') {
    nomePagina.textContent = `Página do Squirtle`;
    h1Pagina.textContent = `Informações sobre o Squirtle`;

    fetch("https://pokeapi.co/api/v2/pokemon/squirtle")
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.sprites.front_default;
            imagemPokemon.src = imageUrl;
        })

} else

    if (nomePokemon == '?evolucao=wartortle') {
        nomePagina.textContent = `Página do Wartortle`;
        h1Pagina.textContent = `Informações sobre o Wartortle`;

        fetch("https://pokeapi.co/api/v2/pokemon/wartortle")
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.sprites.front_default;
                imagemPokemon.src = imageUrl;
            })
    } else

        if (nomePokemon == '?evolucao=blastoise') {
            nomePagina.textContent = `Página do Blastoise`;
            h1Pagina.textContent = `Informações sobre o Blastoise`;

            fetch("https://pokeapi.co/api/v2/pokemon/blastoise")
                .then(response => response.json())
                .then(data => {
                    const imageUrl = data.sprites.front_default;
                    imagemPokemon.src = imageUrl;
                })
        }

