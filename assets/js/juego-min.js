const miApp=(()=>{let e=[],t=[],l=["C","D","H","S"],n=["A","J","Q","K"],a=document.querySelector("#btnPedir"),r=document.querySelector("#btnDetener"),s=document.querySelector("#btnNuevo"),o=document.querySelectorAll("small"),d=document.querySelectorAll(".divCartas");a.disabled=!0,r.disabled=!0;let i=(l=2)=>{e=c(),t=[];for(let n=0;n<l;n++)t.push(0);o.forEach(e=>e.innerText=0),d.forEach(e=>e.innerHTML=""),a.disabled=!1,r.disabled=!1},c=()=>{for(let t=2;t<=10;t++)for(let a of l)e.push(t+a);for(let r of l)for(let s of n)e.push(s+r);return _.shuffle(e)},u=()=>e.pop(),$=e=>{let t=e.substring(0,e.length-1);return 1*(isNaN(t)?"A"===t?11:10:t)},b=(e,l)=>(t[e]=t[e]+$(l),o[e].innerText=t[e],t[e]),f=(e,t)=>{let l=document.createElement("img");l.src=` assets/cartas/${e}.png`,l.classList.add("carta"),d[t].append(l)},p=e=>{let l=0;do{let n=u();if(l=b(t.length-1,n),f(n,t.length-1),e>21)break}while(l<=e);h(e,l)};a.addEventListener("click",()=>{let e=u(),t=b(0,e);f(e,0),t>21?(console.warn("Lo siento mucho, PERDISTE!"),a.disabled=!0,r.disabled=!0,p(t)):21===t&&(console.info("21, genial!"),a.disabled=!0,r.disabled=!0,p(t))}),r.addEventListener("click",()=>{a.disabled=!0,r.disabled=!0,p(t[0])});let h=(e,t)=>{setTimeout(()=>{e===t?alert(`Nadie gana ambos estan con ${e} puntos!`):t>21?alert(`Ganaste con ${e} puntos!`):alert(`La computadora Gano con ${t} puntos!`)},50)};return s.addEventListener("click",()=>{i()}),{nuevoJuego:i}})();