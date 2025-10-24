// ==== READING PROGRESS ====
const progress = document.getElementById('reading-progress');
if (progress) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progress.style.width = Math.min(scrollPercent, 100) + '%';
  });
}

// ==== SHARE FUNCTIONS ====
function shareWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(document.title);
  window.open(`https://wa.me/?text=${text} ${url}`, '_blank');
}

function shareTwitter() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(document.title);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '✅ Copiado!';
    btn.style.background = '#27ae60';
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
    }, 2000);
  }).catch(() => {
    alert('Link copiado: ' + window.location.href);
  });
}

// ==== QUIZ ====
const quizButtons = document.querySelectorAll('.quiz-btn');
const quizFeedback = document.getElementById('quiz-feedback');

quizButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove previous states
    quizButtons.forEach(b => {
      b.style.background = '';
      b.style.color = '';
    });
    
    if (btn.dataset.correct === 'true') {
      btn.style.background = '#27ae60';
      btn.style.color = 'white';
      quizFeedback.textContent = "✅ Correto! Parabéns!";
      quizFeedback.style.color = "#27ae60";
    } else {
      btn.style.background = '#e74c3c';
      btn.style.color = 'white';
      quizFeedback.textContent = "❌ Errado, tente novamente!";
      quizFeedback.style.color = "#e74c3c";
    }
    
    // Disable all buttons after answer
    quizButtons.forEach(b => {
      b.disabled = true;
      b.style.opacity = '0.7';
    });
    
    // Re-enable after 3 seconds
    setTimeout(() => {
      quizButtons.forEach(b => {
        b.disabled = false;
        b.style.opacity = '1';
        b.style.background = '';
        b.style.color = '';
      });
      quizFeedback.textContent = '';
    }, 3000);
  });
});

// ==== LIGHTBOX PARA GALERIA ====
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox ? lightbox.querySelector('.lightbox-content') : null;
const closeBtn = lightbox ? lightbox.querySelector('.close') : null;

if (lightbox && lightboxImg) {
  document.querySelectorAll('.gallery-item').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
}

function closeLightbox() {
  if (lightbox) {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
}

// ==== RELATED POSTS ====
if (typeof posts !== 'undefined') {
  const relatedContainer = document.querySelector('.related-posts .grid-posts');
  const currentPostId = document.querySelector('.like-btn')?.dataset.id;
  
  if (relatedContainer && currentPostId) {
    const related = posts.filter(p => p.id !== currentPostId).slice(0, 3);
    
    related.forEach(post => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <img src="${post.imagem}" alt="${post.titulo}" loading="lazy">
        <div class="card-content">
          <h4>${post.titulo}</h4>
          <div class="tags">
            ${post.tags.map(tag => `<span>${tag.replace(/-/g,' ')}</span>`).join('')}
          </div>
          <p>${post.descricao.substring(0, 100)}...</p>
          <a href="${post.url}" class="btn">Ler mais</a>
        </div>
      `;
      relatedContainer.appendChild(card);
    });
  }
}

// ==== READING TIME CALCULATOR ====
function calculateReadingTime() {
  const article = document.querySelector('.post-content');
  if (article) {
    const text = article.textContent || article.innerText;
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    
    const readingTimeElement = document.querySelector('.post-meta span:nth-child(2)');
    if (readingTimeElement) {
      readingTimeElement.innerHTML = `⏱️ ${readingTime} min de leitura`;
    }
  }
}

// Calculate reading time on page load
document.addEventListener('DOMContentLoaded', calculateReadingTime);

// ==== SMOOTH SCROLLING FOR ANCHOR LINKS ====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==== TABLE OF CONTENTS (if exists) ====
function generateTableOfContents() {
  const headings = document.querySelectorAll('.post-content h2, .post-content h3');
  const tocContainer = document.getElementById('table-of-contents');
  
  if (headings.length > 0 && tocContainer) {
    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';
    
    headings.forEach((heading, index) => {
      const id = `heading-${index}`;
      heading.id = id;
      
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${id}`;
      link.textContent = heading.textContent;
      link.className = heading.tagName.toLowerCase() === 'h3' ? 'toc-sub' : 'toc-main';
      
      listItem.appendChild(link);
      tocList.appendChild(listItem);
    });
    
    tocContainer.appendChild(tocList);
  }
}

// Generate TOC on page load
document.addEventListener('DOMContentLoaded', generateTableOfContents);