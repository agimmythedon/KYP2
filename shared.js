/* shared.js – injects nav, footer, fade-in observer */

const PAGES = [
  {href:'index.html',    label:'Home'},
  {href:'about.html',    label:'About Us'},
  {href:'manifesto.html',label:'Manifesto'},
  {href:'leadership.html',label:'Leadership'},
  {href:'media.html',    label:'Media'},
  {href:'activities.html',label:'Activities'},
  {href:'partnership.html',label:'Partnership'},
  {href:'contact.html',  label:'Contact Us'},
];

function buildNav(){
  const cur = location.pathname.split('/').pop() || 'index.html';
  const links = PAGES.map(p=>`<a href="${p.href}" ${p.href===cur?'class="active"':''}>${p.label}</a>`).join('');
  document.getElementById('navbar').innerHTML=`
  <div class="nav-inner">
    <a class="nav-brand" href="index.html">
      <div class="nav-badge">✊</div>
      <div class="nav-name">KNOW YOUR POWER <small>KYP · VOTE</small></div>
    </a>
    <button class="hamburger" onclick="this.nextElementSibling.classList.toggle('open')" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <div class="nav-links" id="navLinks">${links}</div>
  </div>`;
}

function buildFooter(){
  document.getElementById('footer').innerHTML=`
  <div class="foot-grid">
    <div class="foot-brand fi">
      <div class="logo">✊ Know Your Power</div>
      <p>Empowering Citizens. Building Ethical Leadership.<br>Creating Opportunities for All South Africans.</p>
      <div class="soc-row">
        <div class="soc">f</div><div class="soc">𝕏</div>
        <div class="soc">▶</div><div class="soc">📷</div><div class="soc">♪</div>
      </div>
    </div>
    <div class="foot-col fi">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="manifesto.html">Manifesto</a></li>
        <li><a href="leadership.html">Leadership</a></li>
        <li><a href="representatives.html">Representatives</a></li>
      </ul>
    </div>
    <div class="foot-col fi">
      <h4>Get Involved</h4>
      <ul>
        <li><a href="membership.html">Become a Member</a></li>
        <li><a href="partnership.html">Partnership</a></li>
        <li><a href="activities.html">Activities</a></li>
        <li><a href="media.html">Media Centre</a></li>
      </ul>
    </div>
    <div class="foot-col fi">
      <h4>Contact</h4>
      <ul>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="mailto:info@knowyourpower.org.za">info@knowyourpower.org.za</a></li>
        <li><a href="tel:+27000000000">+27 XX XXX XXXX</a></li>
        <li>South Africa</li>
      </ul>
    </div>
  </div>
  <hr class="foot-hr"/>
  <div class="foot-bot">
    <span>© 2026 Know Your Power (KYP). All rights reserved.</span>
    <span><a href="#">Privacy Policy</a> · <a href="#">Terms of Use</a></span>
  </div>
  <div class="foot-slogan">Together, We Can Create a Better Future! &nbsp;·&nbsp; Know Your Power. Use Your Power. Change Your World.</div>`;
}

function initFade(){
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('vis'); });
  },{threshold:.1});
  document.querySelectorAll('.fi').forEach(el=>obs.observe(el));
}

document.addEventListener('DOMContentLoaded',()=>{
  buildNav();
  buildFooter();
  initFade();
});
