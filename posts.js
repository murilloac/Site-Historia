// posts.js
const posts = [
  {
    id: "novo-testamento",
    titulo: "Novo Testamento como História",
    descricao: "Tomando o Novo Testamento como base, percebemos que todo o cristianismo — que se estende até os dias atuais — é fundamentado na fé e em relatos documentais resgatados por historiadores.",
    imagem: "https://i.imgur.com/1Gt3ccE.jpeg",
    tags: ["historia-religiosa"],
    url: "novoTestamento.html",
    data: "2025-01-23",
    autor: "Professor de História"
  },
];

// ==== ANALYTICS AUTOMÁTICO ====
const analytics = {
  // Calcular total de artigos por categoria
  getArticlesByCategory(category) {
    return posts.filter(post => post.tags.includes(category)).length;
  },
  
  // Calcular total de visualizações por categoria
  getViewsByCategory(category) {
    const categoryPosts = posts.filter(post => post.tags.includes(category));
    let totalViews = 0;
    
    categoryPosts.forEach(post => {
      const views = parseInt(localStorage.getItem(`views-${post.id}`)) || 0;
      totalViews += views;
    });
    
    return totalViews;
  },
  
  // Incrementar visualizações de um artigo
  incrementViews(postId) {
    const currentViews = parseInt(localStorage.getItem(`views-${postId}`)) || 0;
    const newViews = currentViews + 1;
    localStorage.setItem(`views-${postId}`, newViews);
    return newViews;
  },
  
  // Obter visualizações de um artigo
  getViews(postId) {
    return parseInt(localStorage.getItem(`views-${postId}`)) || Math.floor(Math.random() * 200) + 50;
  },
  
  // Calcular tempo de leitura
  calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  },
  
  // Formatar número de visualizações
  formatViews(views) {
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'k';
    }
    return views.toString();
  }
};

// Categorias com informações dinâmicas
const categories = {
  'historia-religiosa': {
    name: 'História Religiosa',
    icon: '⛪',
    description: 'Explore o desenvolvimento das religiões e seu impacto na formação das sociedades ao longo da história.'
  },
  'historia-antiga': {
    name: 'História Antiga',
    icon: '🏛️',
    description: 'Civilizações antigas, suas conquistas, cultura e legado que ainda influencia o mundo moderno.'
  },
  'historia-do-brasil': {
    name: 'História do Brasil',
    icon: '🇧🇷',
    description: 'A formação, evolução e transformações da sociedade brasileira desde a colonização até os dias atuais.'
  },
  'idade-media': {
    name: 'Idade Média',
    icon: '🏰',
    description: 'Desmistificando os "tempos sombrios": cultura, sociedade e inovações do período medieval.'
  },
  'historia-mundial': {
    name: 'História Mundial',
    icon: '🌍',
    description: 'Eventos e processos históricos que moldaram diferentes regiões do mundo e suas interconexões.'
  },
  'ensino-historia': {
    name: 'Ensino de História',
    icon: '🎓',
    description: 'Metodologias, recursos e reflexões sobre o ensino de História na educação básica e superior.'
  }
};