//unspalsh api
const count =10;
const apiKey ='R2MtPs4RqGjAfpzLCPDBBoISqf6Nsi4CwjCG2rfpar8';
const apiUrl = 'https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}';

//get photos from unsplash api
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        
    }
}

getPhotos()