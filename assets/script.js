const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
const toast=document.querySelector('.toast');let toastTimer;
document.querySelectorAll('.enquire').forEach(button=>button.addEventListener('click',()=>{
 const item=button.dataset.product;
 toast.textContent=`${item} selected. Message NEXORA on Facebook to enquire.`;
 toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),3500);
}));
