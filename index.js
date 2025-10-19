import{a as u,S as f,i as p}from"./assets/vendor-CYMld6vM.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function g(r){return u("https://pixabay.com/api/",{params:{key:"36451556-b70cce37d343215b637d239eb",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}}).then(({data:l})=>(console.log(l.hits),l))}const m=new f(".gallery a",{caption:!0,captionDelay:250,captionPosition:"bottom",nav:!0,showCounter:!0,loop:!0}),c=document.querySelector(".gallery"),n=document.querySelector(".loading");function d(r=[]){c.innerHTML=r.map(({previewURL:i,tags:o,largeImageURL:l,likes:e,views:t,comments:s,downloads:a})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${l}">
                <img  class="gallery-image" src="${i}" alt="${o}" loading="lazy" title="Likes: ${e.toLocaleString()}  |  View: ${t.toLocaleString()}  |  Comments: ${s.toLocaleString()}  |  Downloads: ${a.toLocaleString()}"/>
            </a>
            <ul class="info-container">
                <li class="info-box">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${e.toLocaleString()}</p>
                </li>
                <li class="info-box">
                    <p class="info-title">View</p>
                    <p class="info-value">${t.toLocaleString()}</p>
                </li>
                 <li class="info-box">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${s.toLocaleString()}</p>
                </li>
                <li class="info-box">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${a.toLocaleString()}</p>
                </li>
            </ul>
        </li>
    `).join(""),m.refresh()}function h(){c.innerHTML=""}function y(){console.log(n),n.hidden=!1}function L(){n.hidden=!0}const b=document.querySelector(".form");b.addEventListener("submit",r=>{r.preventDefault(),h();const i=r.target.elements["serch-text"].value.trim();y(),g(i).then(o=>{if(!o.hits.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");d(o.hits)}).catch(o=>{p.error({message:`${o.message??String(err)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}).finally(()=>{r.target.elements["serch-text"].value="",L()})});
//# sourceMappingURL=index.js.map
