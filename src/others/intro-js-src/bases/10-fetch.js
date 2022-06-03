

const apiKey = '6k9gs47WQMhPAom27sS5WPAZJ8voIcKE';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
 peticion.then( (resp) => {
    resp.json().then( (cuerpo) => {
        const urlImg = cuerpo.data.images.original.url;
        const img = document.createElement('img');
        img.src = urlImg;
        document.body.append(img);
    }) 
 }).catch( console.warn );

