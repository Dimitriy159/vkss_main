function setVkssVideo(url, element) {
  const frame = document.getElementById('vkssMainVideo');
  if (!frame) return;

  frame.src = url;

  document.querySelectorAll('.vkss-video-item').forEach(item => {
    item.classList.remove('active');
  });

  element.classList.add('active');
}

const vkssGalleryTrack = document.getElementById('vkssGalleryTrack');
const vkssGalleryDots = document.querySelectorAll('.vkss-gallery-dot');
const vkssGallerySlides = document.querySelectorAll('.vkss-gallery-slide');

let vkssGalleryIndex = 0;

function updateVkssGallery() {
  if (!vkssGalleryTrack) return;

  vkssGalleryTrack.style.transform = `translateX(-${vkssGalleryIndex * 100}%)`;

  vkssGalleryDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === vkssGalleryIndex);
  });
}

function moveVkssGallery(direction) {
  vkssGalleryIndex += direction;

  if (vkssGalleryIndex < 0) {
    vkssGalleryIndex = vkssGallerySlides.length - 1;
  }

  if (vkssGalleryIndex >= vkssGallerySlides.length) {
    vkssGalleryIndex = 0;
  }

  updateVkssGallery();
}

function goToVkssGallery(index) {
  vkssGalleryIndex = index;
  updateVkssGallery();
}

/* reveal animation */
document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll(
    '.vkss-item, .vkss-banner-item, .vkss-exam-card, .vkss-media-layout, .vkss-leader-card, .vkss-gallery-wrap, .vkss-section-title, .vkss-subsection-title, .vkss-subtitle, .vkss-card'
  );

  revealTargets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.04}s, transform 0.6s ease ${i * 0.04}s`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => observer.observe(el));
});
function openDepartmentsModal() {
  document.getElementById('departmentsModal').style.display = 'flex'
}

function closeDepartmentsModal() {
  document.getElementById('departmentsModal').style.display = 'none'
}

window.addEventListener('click', function(e) {
  const modal = document.getElementById('departmentsModal')
  if (e.target === modal) {
    closeDepartmentsModal()
  }
})