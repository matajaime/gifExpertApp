const apiKey = '6k9gs47WQMhPAom27sS5WPAZJ8voIcKE';

const getImagen = async () => {
    try {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const cuerpo = await resp.json();
        const urlImg = cuerpo.data.images.original.url;
        const img = document.createElement('img');
        img.src = urlImg;
        document.body.append(img);    
    } catch (err) {
        console.warn('Fallé '+err);
    }

};

getImagen();