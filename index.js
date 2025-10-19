import{a as p,S as d,i as m}from"./assets/vendor-CYMld6vM.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function g(r){return p("https://pixabay.com/api/",{params:{key:"36451556-b70cce37d343215b637d239eb",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12}}).then(({data:n})=>(console.log(n.hits),n))}const h=new d(".gallery a",{caption:!0,captionDelay:250,captionPosition:"bottom",nav:!0,showCounter:!0,loop:!0}),a=document.querySelector(".gallery"),c=document.querySelector(".loading"),u=document.querySelector(".spinner"),f=document.querySelector("#searchBtn");function y(r=[]){a.innerHTML=r.map(({previewURL:i,tags:o,largeImageURL:n,likes:e,views:t,comments:s,downloads:l})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${n}">
                <img  class="gallery-image" src="${i}" alt="${o}" loading="lazy" 
                title="Title: ${o.split(",")[0].trim()}  |  
                Likes: ${e.toLocaleString()}  |  
                View: ${t.toLocaleString()}  |  
                Comments: ${s.toLocaleString()}  |  
                Downloads: ${l.toLocaleString()}"/>
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
                    <p class="info-value">${l.toLocaleString()}</p>
                </li>
            </ul>
        </li>
    `).join(""),h.refresh()}function L(){a.innerHTML=""}function S(){c.hidden=!1}function b(){c.hidden=!0}function $(){u.hidden=!1,f.hidden=!1}function w(){u.hidden=!0,f.hidden=!0}const x=document.querySelector(".form");x.addEventListener("submit",r=>{r.preventDefault(),L();const i=r.target.elements["serch-text"].value.trim();S(),$(),g(i).then(o=>{if(!o.hits.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");y(o.hits)}).catch(o=>{m.error({message:`${o.message??String(err)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}).finally(()=>{r.target.elements["serch-text"].value="",b(),w()})});
//# sourceMappingURL=index.js.map
