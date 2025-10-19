import axios from "axios";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector(".form");

import {getImagesByQuery} from "./js/pixabay-api";
import {showLoader, createGallery, hideLoader, clearGallery} from "./js/render-functions"
form.addEventListener("submit", onHandlerButton);

function onHandlerButton(event){
    event.preventDefault()
    const searhText = event.target.elements["search-text"].value.trim()

    if(!searhText){
        iziToast.error({
                        title: 'Error',
                        message: 'Please enter a search word!',
                        position: 'topRight'
                    })
                    return
                }
                
    
    clearGallery()
    showLoader()

    getImagesByQuery(searhText)
        .then((images) => {
            console.log(images);
            
            if(!images || images.length === 0){
                iziToast.error({
                        title: 'Error',
                        message: 'Sorry, there are no images matching your search query. Please try again!',
                        position: 'topRight'
                    })
                    return
                }
            
            createGallery(images)
            


            

            })
        .catch((error) =>{
            
            iziToast.error({
                        title: 'Error',
                        message: 'Failed to fetch images. Try again!',
                        position: 'topRight'
                    })
                }
        ).finally(()=>{
            hideLoader()
        }) }

            
            
