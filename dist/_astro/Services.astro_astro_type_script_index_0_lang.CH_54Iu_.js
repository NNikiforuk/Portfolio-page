const c=new IntersectionObserver(i=>{i.forEach(e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")})});document.querySelectorAll(".slidein").forEach(i=>{c.observe(i)});const t=document.getElementById("burger-btn"),s=document.getElementById("mobile-menu");t&&s&&(t.addEventListener("click",()=>{t.classList.toggle("burger-active"),s.classList.toggle("active");const e=s.classList.contains("active");t.setAttribute("aria-expanded",String(e))}),s.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{s.classList.remove("active"),t.classList.remove("burger-active"),t.setAttribute("aria-expanded","false")})}),document.addEventListener("click",e=>{const a=e.target;a&&!s.contains(a)&&!t.contains(a)&&s.classList.contains("active")&&(s.classList.remove("active"),t.classList.remove("burger-active"),t.setAttribute("aria-expanded","false"))}));