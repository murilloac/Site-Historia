// posts-optimized.js - Versão otimizada para muitos posts

// Separar metadados do conteúdo
const postsMetadata = [
  {
    id: "novo-testamento",
    titulo: "Novo Testamento como História",
    descricao: "Tomando o Novo Testamento como base, percebemos que todo o cristianismo...",
    imagem: "https://i.imgur.com/1Gt3ccE.jpeg",
    tags: ["historia-religiosa"],
    data: "2025-01-23",
    autor: "Murillo Cunha"
  },
  // Adicionar mais posts aqui...
];

// Conteúdo carregado sob demanda
const postsContent = {
  "novo-testamento": () => import('./posts/novo-testamento.js'),
  // Mais conteúdos...
};

// Paginação
const POSTS_PER_PAGE = 12;
let currentPage = 1;

// Carregar posts com paginação
function loadPostsPage(page = 1) {
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  return postsMetadata.slice(start, end);
}

// Carregar conteúdo específico do post
async function loadPostContent(postId) {
  if (postsContent[postId]) {
    const module = await postsContent[postId]();
    return module.default;
  }
  return null;
}

// Virtual scrolling para muitos posts
function renderVisiblePosts() {
  const container = document.querySelector('.grid-posts');
  const scrollTop = window.scrollY;
  const viewportHeight = window.innerHeight;
  
  // Calcular quais posts estão visíveis
  const startIndex = Math.floor(scrollTop / 400); // altura estimada do card
  const endIndex = Math.min(startIndex + 10, postsMetadata.length);
  
  // Renderizar apenas posts visíveis
  container.innerHTML = '';
  for (let i = startIndex; i < endIndex; i++) {
    const post = postsMetadata[i];
    if (post) {
      const card = createPostCard(post);
      container.appendChild(card);
    }
  }
}

// Lazy loading de imagens
function createPostCard(post) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <img data-src="${post.imagem}" alt="${post.titulo}" class="lazy-load">
    <div class="card-content">
      <h3>${post.titulo}</h3>
      <p>${post.descricao}</p>
      <a href="post.html?id=${post.id}" class="btn">Ler mais</a>
    </div>
  `;
  return card;
}

// Intersection Observer para lazy loading
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy-load');
      imageObserver.unobserve(img);
    }
  });
});

// Inicializar lazy loading
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lazy-load').forEach(img => {
    imageObserver.observe(img);
  });
});

// Analytics otimizado
const analytics = {
  getArticlesByCategory(category) {
    return postsMetadata.filter(post => post.tags.includes(category)).length;
  },
  
  // Cache para evitar recálculos
  _viewsCache: new Map(),
  
  getViews(postId) {
    if (this._viewsCache.has(postId)) {
      return this._viewsCache.get(postId);
    }
    
    const views = parseInt(localStorage.getItem(`views-${postId}`)) || 0;
    this._viewsCache.set(postId, views);
    return views;
  },
  
  incrementViews(postId) {
    const currentViews = this.getViews(postId);
    const newViews = currentViews + 1;
    localStorage.setItem(`views-${postId}`, newViews);
    this._viewsCache.set(postId, newViews);
    return newViews;
  }
};

export { postsMetadata, loadPostContent, loadPostsPage, analytics };