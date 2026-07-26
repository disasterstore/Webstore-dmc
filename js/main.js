// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "70px";
    navLinks.style.right = "4%";
    navLinks.style.padding = "14px";
    navLinks.style.borderRadius = "18px";
    navLinks.style.background = "rgba(0,0,0,.75)";
    navLinks.style.border = "1px solid rgba(255,255,255,.12)";
    navLinks.style.backdropFilter = "blur(16px)";
    navLinks.style.gap = "12px";
    navLinks.style.width = "200px";
  });
}

// ====== CRUSTMC LINKS (EDIT HERE) ======
const LINKS = {
  discord: "https://discord.gg/9XrFMewKqh",
  youtube: "https://youtube.com/@itsanuragzz",
  instagram: "https://instagram.com/disastermc",
  store: "store.html"
};
// ======================================

const IP = "disastermc.qzz.io";
const PORT = "19162";

// Social buttons auto
document.querySelectorAll("[data-social]").forEach((btn) => {
  const type = btn.getAttribute("data-social");
  if (!type) return;

  if (type === "discord") btn.href = LINKS.discord;
  if (type === "youtube") btn.href = LINKS.youtube;
  if (type === "instagram") btn.href = LINKS.instagram;
});


function toast(msg="Copied!") {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1200);
}

async function copyServerIP() {
  try {
    await navigator.clipboard.writeText(`${IP}:${PORT}`);
    toast("IP Copied!");
  } catch (e) {
    toast("Copy failed!");
  }
}

["copyIpBtn", "copyIpBtn2", "copyIpBtn3"].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener("click", copyServerIP);
});

// Animated Counters
const counters = document.querySelectorAll("[data-counter]");
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const target = parseInt(el.getAttribute("data-counter") || "0", 10);
    let current = 0;

    const step = Math.max(1, Math.floor(target / 55));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current;
    }, 18);

    counterIO.unobserve(el);
  });
}, { threshold: 0.35 });

counters.forEach(c => counterIO.observe(c));

// Theme Glow button (small fun)
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("extraGlow");
    toast(document.body.classList.contains("extraGlow") ? "Glow ON" : "Glow OFF");
  });
}
