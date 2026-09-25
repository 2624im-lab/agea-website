// スマホ用メニューの開閉
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
});

// メニュー内のリンクを押したら閉じる
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "メニューを開く");
  });
});

// フッターの年を自動更新
document.getElementById("year").textContent = new Date().getFullYear();
