const e=document.querySelector(".feedback-form");(()=>{const a=localStorage.getItem("feedback-form-state"),t=JSON.parse(a);t&&(e.email.value=t.email,e.message.value=t.message)})(),e.addEventListener("input",(e=>{const{email:a,message:t}=e.currentTarget.elements,s={email:a.value,message:t.value};localStorage.setItem("feedback-form-state",JSON.stringify(s))})),e.addEventListener("submit",(a=>{a.preventDefault();const{email:t,message:s}=a.currentTarget.elements,l={email:t.value,message:s.value};console.log(l),localStorage.removeItem("feedback-form-state"),e.reset()}));
//# sourceMappingURL=03-feedback.276f79b5.js.map
