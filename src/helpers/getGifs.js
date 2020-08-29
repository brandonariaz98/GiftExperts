
export const getGifs = async(category) => {
    const key = 'eNt0KT1ACQcmeBLgv4EdlaWFUBvDjLij';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=10&q=${encodeURI( category )}`;
    const resp = await fetch( url );
    //resp.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");

    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    
    return gifs;


}
