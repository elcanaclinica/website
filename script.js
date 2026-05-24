// Header scroll
const hdr = document.getElementById('hdr');
if(hdr) window.addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 60));

// Mobile menu
function openMenu(){ document.getElementById('mobNav').classList.add('on'); document.body.style.overflow='hidden'; }
function closeMenu(){ document.getElementById('mobNav').classList.remove('on'); document.body.style.overflow=''; }

// Fade in on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fi').forEach(el => io.observe(el));

// Smooth scroll anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Tabs
function showTab(panelId, btn) {
  const wrap = btn.closest('.tab-wrap');
  wrap.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('on'));
  wrap.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById(panelId).classList.add('on');
}
