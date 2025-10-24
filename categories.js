// ==== CATEGORIES FUNCTIONALITY ====
document.addEventListener('DOMContentLoaded', function() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  const categoryPostsSection = document.getElementById('category-posts');
  const categoryTitle = document.getElementById('category-title');
  const categoryArticles = document.getElementById('category-articles');
  const categoriesGrid = document.querySelector('.categories-grid');
  
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.dataset.category;
      showCategoryPosts(category);
    });
  });
  
  function showCategoryPosts(category) {
    // Hide categories grid
    if (categoriesGrid) {
      categoriesGrid.style.display = 'none';
    }
    
    // Show category posts section
    if (categoryPostsSection) {
      categoryPostsSection.style.display = 'block';
    }
    
    // Update title
    const categoryNames = {
      'historia-religiosa': 'História Religiosa',
      'historia-antiga': 'História Antiga',
      'historia-do-brasil': 'História do Brasil',
      'idade-media': 'Idade Média',
      'historia-mundial': 'História Mundial',
      'ensino-historia': 'Ensino de História'
    };
    
    if (categoryTitle) {
      categoryTitle.textContent = `Artigos de ${categoryNames[category] || category}`;
    }
    
    // Filter and display posts
    if (typeof posts !== 'undefined' && categoryArticles) {
      const filteredPosts = posts.filter(post => 
        post.tags.includes(category)
      );
      
      categoryArticles.innerHTML = '';
      
      if (filteredPosts.length === 0) {
        categoryArticles.innerHTML = `
          <div class="no-posts">
            <h3>📝 Em breve!</h3>
            <p>Ainda não temos artigos nesta categoria, mas estamos trabalhando nisso!</p>
            <button class="btn" onclick="showAllCategories()">← Voltar às Categorias</button>
          </div>
        `;
      } else {
        filteredPosts.forEach(post => {
          const card = document.createElement('article');
          card.className = 'card';
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
          categoryArticles.appendChild(card);
        });
        
        // Initialize like buttons for new posts
        initializeLikeButtons();
      }
    }
    
    // Scroll to top of posts section
    if (categoryPostsSection) {
      categoryPostsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Initialize like buttons
  function initializeLikeButtons() {
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
        
        // Animation feedback
        btn.style.transform = 'scale(1.2)';
        setTimeout(() => {
          btn.style.transform = 'scale(1)';
        }, 200);
      });
    });
  }
});

// ==== SHOW ALL CATEGORIES ====
function showAllCategories() {
  const categoriesGrid = document.querySelector('.categories-grid');
  const categoryPostsSection = document.getElementById('category-posts');
  
  if (categoriesGrid) {
    categoriesGrid.style.display = 'grid';
  }
  
  if (categoryPostsSection) {
    categoryPostsSection.style.display = 'none';
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==== TAG CLOUD FUNCTIONALITY ====
document.querySelectorAll('.tag-cloud').forEach(tag => {
  tag.addEventListener('click', function() {
    const tagText = this.textContent.toLowerCase().replace(/\s+/g, '-');
    
    // Simulate search for this tag
    alert(`Buscando artigos sobre: ${this.textContent}`);
    
    // In a real implementation, you would:
    // window.location.href = `/?tag=${tagText}`;
  });
});

// ==== CATEGORY STATS ANIMATION ====
function animateStats() {
  const stats = document.querySelectorAll('.category-stats span');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });
  
  stats.forEach(stat => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(20px)';
    stat.style.transition = 'all 0.5s ease';
    observer.observe(stat);
  });
}

// ==== CATEGORY HOVER EFFECTS ====
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    const icon = this.querySelector('.category-icon');
    if (icon) {
      icon.style.transform = 'scale(1.2) rotate(5deg)';
      icon.style.transition = 'transform 0.3s ease';
    }
  });
  
  card.addEventListener('mouseleave', function() {
    const icon = this.querySelector('.category-icon');
    if (icon) {
      icon.style.transform = 'scale(1) rotate(0deg)';
    }
  });
});

// ==== SEARCH WITHIN CATEGORIES ====
function searchInCategory(query) {
  const cards = document.querySelectorAll('#category-articles .card');
  
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    const searchTerm = query.toLowerCase();
    
    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', animateStats);