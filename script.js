// Typing
const words=["Creative Developer","Animation Enthusiast","UI Designer","Future Engineer"];
let i=0,j=0,d=false;
function type(){
  let t=words[i];
  document.querySelector(".typing").textContent=t.slice(0,j);
  if(!d && j<t.length) j++;
  else if(d && j>0) j--;
  else{d=!d;if(!d)i=(i+1)%words.length}
  setTimeout(type,d?50:100)
}
type();

// Reveal on scroll
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-100) el.classList.add("active")
  })
})

// Smooth scroll
function go(id){document.getElementById(id).scrollIntoView({behavior:"smooth"})}

// Mouse parallax glow
document.addEventListener("mousemove",e=>{
  document.querySelector(".parallax").style.background=
  `radial-gradient(circle at ${e.clientX}px ${e.clientY}px,#00f7ff22,transparent)`
})
