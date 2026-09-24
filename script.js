function toggleMenu(){document.getElementById('nav').classList.toggle('show')}
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nav').classList.remove('show')));
