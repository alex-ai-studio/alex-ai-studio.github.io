// Custom cursor
const cur = document.getElementById('cur');
if (cur) {
  document.addEventListener('mousemove', e => {
    cur.style.left = e.clientX + 'px';
    cur.style.top  = e.clientY + 'px';
  });
  document.querySelectorAll('a, .work-item, .skill-row, .blog-card, .thing-item').forEach(el => {
    el.addEventListener('mouseenter', () => cur.classList.add('big'));
    el.addEventListener('mouseleave', () => cur.classList.remove('big'));
  });
}

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Animated counters (homepage stat grid)
document.querySelectorAll('.stat-num').forEach(el => {
  const raw = el.textContent.trim();
  const num = parseInt(raw);
  if (isNaN(num)) return;
  const suffix = raw.replace(/[\d]/g, '');
  let started = false;
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      let v = 0;
      const step = num / 50;
      const t = setInterval(() => {
        v = Math.min(v + step, num);
        el.textContent = Math.round(v) + suffix;
        if (v >= num) clearInterval(t);
      }, 20);
    }
  }).observe(el);
});
