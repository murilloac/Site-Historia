// ==== LOADING ====
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  if (loading) {
    setTimeout(() => {
      loading.classList.add('hidden');
    }, 500);
  }
});

// ==== SLIDE HERO ====
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slider .slide');

if (slides.length > 0) {
  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }
  
  slides[currentSlide].classList.add('active');
  setInterval(showNextSlide, 5000);
}

// ==== GERAR POSTS DINÂMICOS ====
const grid = document.querySelector('.grid-posts');

if (grid && typeof posts !== 'undefined') {
  posts.forEach(post => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.tags = post.tags.join(',');
    card.innerHTML = `
      <img src="${post.imagem}" alt="${post.titulo}" loading="lazy">
      <div class="card-content">
        <h3>${post.titulo}</h3>
        <div class="tags">
          ${post.tags.map(tag => `<span>${tag.replace(/-/g,' ')}</span>`).join('')}
        </div>
        <p>${post.descricao}</p>
        <a href="${post.url}" class="btn">Ler mais</a>
        <button class="like-btn" data-id="${post.id}">
          ❤️ <span class="like-count">0</span>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==== FILTRO E BUSCA ====
const tagButtons = document.querySelectorAll('.tag-btn');
const searchInput = document.getElementById('searchInput');
let activeTag = "todos";

function filterPosts() {
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    const matchesTag = activeTag === "todos" || card.dataset.tags.includes(activeTag);
    const matchesSearch = !searchTerm || title.includes(searchTerm) || description.includes(searchTerm);
    card.style.display = (matchesTag && matchesSearch) ? "" : "none";
  });
}

tagButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tagButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeTag = btn.dataset.tag;
    filterPosts();
  });
});

if (searchInput) {
  searchInput.addEventListener('input', filterPosts);
}

// ==== MODO DARK ====
const toggleDarkMode = document.getElementById("toggle-dark-mode");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
}

if (toggleDarkMode) {
  toggleDarkMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      toggleDarkMode.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      toggleDarkMode.textContent = "🌙";
    }
  });

  toggleDarkMode.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

// ==== SISTEMA DE LIKES ====
setTimeout(() => {
  const likeButtons = document.querySelectorAll('.like-btn');

  likeButtons.forEach(btn => {
    const postId = btn.dataset.id;
    const countSpan = btn.querySelector('.like-count');

    if (!localStorage.getItem(`like-${postId}`)) {
      localStorage.setItem(`like-${postId}`, '0');
    }
    countSpan.textContent = localStorage.getItem(`like-${postId}`);

    btn.addEventListener('click', () => {
      let current = parseInt(localStorage.getItem(`like-${postId}`));
      current++;
      localStorage.setItem(`like-${postId}`, current);
      countSpan.textContent = current;
      btn.classList.add('liked');
      
      // Animação de feedback
      btn.style.transform = 'scale(1.2)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
      }, 200);
    });
  });
}, 200);

// ==== SCROLL TO TOP ====
const scrollTopBtn = document.getElementById('scroll-top');

if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==== NEWSLETTER SIGNUP ====
function subscribeNewsletter() {
  const email = document.getElementById('newsletter-email');
  if (email && email.value) {
    alert('Obrigado por se inscrever! Você receberá nossos novos artigos por email.');
    email.value = '';
  } else {
    alert('Por favor, insira um email válido.');
  }
}

// ==== BOOKMARK FUNCTIONALITY ====
function toggleBookmark() {
  const btn = event.target;
  const isBookmarked = btn.classList.contains('bookmarked');
  
  if (isBookmarked) {
    btn.classList.remove('bookmarked');
    btn.innerHTML = '🔖 Salvar';
    alert('Artigo removido dos salvos!');
  } else {
    btn.classList.add('bookmarked');
    btn.innerHTML = '✅ Salvo';
    alert('Artigo salvo com sucesso!');
  }
}

// ==== VIEW COUNTER AUTOMÁTICO ====
function incrementViewCount() {
  const viewCountElement = document.getElementById('view-count');
  if (viewCountElement && typeof analytics !== 'undefined') {
    // Pegar ID do post da URL ou elemento
    const postId = getPostIdFromPage();
    if (postId) {
      const views = analytics.incrementViews(postId);
      viewCountElement.textContent = analytics.formatViews(views);
    }
  }
}

function getPostIdFromPage() {
  // Extrair ID do post baseado na URL ou elemento da página
  const likeBtn = document.querySelector('.like-btn');
  if (likeBtn) {
    return likeBtn.dataset.id;
  }
  
  // Alternativa: baseado na URL
  const path = window.location.pathname;
  if (path.includes('novoTestamento')) return 'novo-testamento';
  
  return null;
}

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

// ==== TEMPO DE LEITURA AUTOMÁTICO ====
function updateReadingTime() {
  const readingTimeElement = document.querySelector('.post-meta span:nth-child(2)');
  const postContent = document.querySelector('.post-content');
  
  if (readingTimeElement && postContent && typeof analytics !== 'undefined') {
    const text = postContent.textContent || postContent.innerText;
    const readingTime = analytics.calculateReadingTime(text);
    readingTimeElement.innerHTML = `⏱️ ${readingTime} min de leitura`;
  }
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
      document.body.style.overflow = 'hidden';
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
    document.body.style.overflow = 'auto';
  }
}

// ==== INICIALIZAÇÃO AUTOMÁTICA ====
document.addEventListener('DOMContentLoaded', () => {
  // Incrementar visualizações automaticamente
  incrementViewCount();
  
  // Atualizar tempo de leitura automaticamente
  updateReadingTime();
});