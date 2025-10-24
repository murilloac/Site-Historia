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

// ==== VIEW COUNTER ====
function incrementViewCount() {
  const viewCountElement = document.getElementById('view-count');
  if (viewCountElement) {
    let currentViews = parseInt(viewCountElement.textContent) || 0;
    currentViews++;
    viewCountElement.textContent = currentViews;
    localStorage.setItem('article-views', currentViews);
  }
}

// Incrementar visualizações ao carregar a página
if (document.getElementById('view-count')) {
  incrementViewCount();
}