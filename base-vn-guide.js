// Xử lý sự kiện Phóng to ảnh khi nhấp vào
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("imgFull");
  const closeBtn = document.querySelector(".close-modal");

  document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("step-img")) {
      modal.style.display = "block";
      modalImg.src = e.target.src;
      modalImg.alt = e.target.alt;
    }
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });
});
