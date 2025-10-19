import{a as u,S as p,i as a}from"./assets/vendor-BD_-Bkmn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const d=void 0;function f(s){return u.get("https://pixabay.com/api/",{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>{throw r})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function m(s){const r=s.map(e=>`<li class="gallery-list">
        <a class="gallery-link" href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}"  class="image-list"/>
        <div class="image-info">
        
        <p><span>Likes</span> ${e.likes} </p>
        <p><span>Views</span> ${e.views} </p>
        <p><span>Comments</span> ${e.comments} </p>
        <p><span>Downloads</span> ${e.downloads} </p>
        </div></a></li>
        `).join("");l.innerHTML=r,h.refresh()}function y(){c.classList.remove("hidden")}function g(){c.classList.add("hidden")}function L(){l.innerHTML=""}const w=document.querySelector(".form");w.addEventListener("submit",b);function b(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){a.error({title:"Error",message:"Please enter a search word!",position:"topRight"});return}L(),y(),f(r).then(e=>{if(console.log(e),!e||e.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(e)}).catch(e=>{a.error({title:"Error",message:"Failed to fetch images. Try again!",position:"topRight"})}).finally(()=>{g()})}
//# sourceMappingURL=index.js.map
