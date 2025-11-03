// NAVBAR AKTIF
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// JAM DIGITAL
function padZero(num) { return (num < 10 ? '0' : '') + num; }
function updateJam() {
  const now = new Date();
  const jam = padZero(now.getHours());
  const menit = padZero(now.getMinutes());
  const detik = padZero(now.getSeconds());
  document.getElementById('jam').textContent = `${jam}:${menit}:${detik}`;
  setTimeout(updateJam, 1000);
}
updateJam();

// TYPEWRITER
const teks = 'Stop cyberbullying karena dapat merusak kesehatan mental seseorang';
let i = 0;
function ketik() {
  if (i < teks.length) {
    document.getElementById('typewriter').innerHTML += teks.charAt(i);
    i++;
    setTimeout(ketik, 50);
  }
}
ketik();