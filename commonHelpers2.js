import"./assets/modulepreload-polyfill-3cfb730f.js";const s=document.querySelector(".feedback-form"),o="feedback-form-state",e={email:"",message:""};function m(){localStorage.setItem(o,JSON.stringify(e))}s.addEventListener("input",()=>{const{email:t,message:a}=s.elements;e.email=t.value.trim(),e.message=a.value.trim(),m()});window.addEventListener("load",()=>{const t=localStorage.getItem(o);if(t)try{const{email:a,message:l}=JSON.parse(t);s.elements.email.value=a,s.elements.message.value=l,e.email=a,e.message=l}catch(a){console.error("Error parsing JSON:",a)}});s.addEventListener("submit",t=>{t.preventDefault();const{email:a,message:l}=e;!a||!l?alert("Please fill all fields"):(console.log(e),localStorage.removeItem(o),s.reset(),e.email="",e.message="")});
//# sourceMappingURL=commonHelpers2.js.map
