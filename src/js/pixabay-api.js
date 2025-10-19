import axios from "axios";
const key = "52826967-21134cff4c4a1edd285b3f00c";
export function getImagesByQuery(query){
    return axios.get("https://pixabay.com/api/", {
        params:{
            key: key,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    })
        .then((response) =>{
            
                return response.data.hits
            })
            .catch((error) =>{
                throw error
            })
        

    
}

