
    export const getGifs = async( category ) => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=6k9gs47WQMhPAom27sS5WPAZJ8voIcKE&q='+
        encodeURI(category)+'&limit=10';
        const resp = await fetch( url );
        const {data} = await resp.json();
        const imgs = data.map(({id, title, images}) => {
            return {
                id: id,
                title: title,
                url: images.downsized_medium.url
            };
        });
        return(imgs);
    };
