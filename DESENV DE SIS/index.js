const titulo = document.querySelector('.titulo')
const imagemperfil = document.querySelector('.imagemperfil')
const loginperfil = document.querySelector('.loginperfil')
const reposperfil = document.querySelector('.reposperfil') 
const bioperfil = document.querySelector('.bioperfil')
const segperfil = document.querySelector('.segperfil')
const localperfil = document.querySelector('.localperfil')

const getInfos = async() => {
    const response = await fetch ('https://api.github.com/users/GABYMARIAA')
    const data = await response.json()
    console.log(data)
    if(!data){
        titulo.innerHTML = "GABY"
        reposperfil.innerHTML = "60"
        imagemperfil.setAttribute('src', 'https://lastfm.freetls.fastly.net/i/u/ar0/126dfa6f2e6c751af03f4828de6bb19e.jpg')
        bioperfil.innerHTML = 'melhor do mundo'
        segperfil.innerHTML = `seguidores 300 perfis e seguindo 20 perfis`
        localperfil.innerHTML = 'Natal'

    } else{
        titulo.innerHTML = data.name
        reposperfil.innerHTML = data.public_repos
        imagemperfil.setAttribute('src', data.avatar_url)
        segperfil.innerHTML = `seguidores ${data.followers} perfis e seguindo ${data.following} perfis`
        localperfil.innerHTML = data.location
        bioperfil.innerHTML = data.bio

    }

   
}

getInfos()