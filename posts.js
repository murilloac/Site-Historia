// posts.js
const posts = [
  {
    id: "novo-testamento",
    titulo: "Novo Testamento como História",
    descricao: "Tomando o Novo Testamento como base, percebemos que todo o cristianismo — que se estende até os dias atuais — é fundamentado na fé e em relatos documentais resgatados por historiadores.",
    imagem: "https://i.imgur.com/1Gt3ccE.jpeg",
    tags: ["historia-religiosa"],
    url: "post.html?id=novo-testamento",
    data: "2025-01-23",
    autor: "Murillo Cunha",
    sidebar: `
      <h3>💡 Você sabia?</h3>
      <p>
        Os textos originais do Novo Testamento foram escritos em <strong>grego koiné</strong> e o primeiro livro escrito cronologicamente não foi o evangelho de Mateus, mas sim a <strong>Epístola de Tiago</strong> por volta de 45-48 d.C. O Novo Testamento é organizado por tipo de texto: evangelhos, cartas, etc.
      </p>
    `,
    quiz: {
      pergunta: "Quantos livros possui o Novo Testamento na maioria das tradições cristãs?",
      opcoes: [
        { texto: "26", correto: false },
        { texto: "27", correto: true },
        { texto: "28", correto: false }
      ]
    },
    conteudo: `
      <h1 class="post-title">Novo Testamento como História</h1>
      
      <div class="post-meta">
        <span>📅 23 de janeiro de 2025</span>
        <span>⏱️ 5 min de leitura</span>
        <span>👁️ <span id="view-count">0</span> visualizações</span>
        <span>👤 Murillo Cunha</span>
      </div>

      <div class="share-buttons">
        <button onclick="shareWhatsApp()" class="share-btn whatsapp">📱 WhatsApp</button>
        <button onclick="shareTwitter()" class="share-btn twitter">🐦 Twitter</button>
        <button onclick="copyLink()" class="share-btn copy">🔗 Copiar Link</button>
      </div>
      
      <p>Quando pensamos em História, logo nos vêm à mente as guerras mais recentes, revoluções, colonização e alguns personagens bastante usados em filmes e séries. Porém, a amplitude dessa disciplina pode ser observada nos mais variados campos. Um exemplo disso é o campo da fé: a Bíblia, sendo um dos livros mais antigos, faz parte dessa História. Tomando o Novo Testamento como base, percebemos que todo o cristianismo — que se estende até os dias atuais — é fundamentado na fé e em relatos documentais resgatados por historiadores.</p>
      <br>
      <section class="gallery">
        <h3>Galeria de imagens</h3>
        <div class="gallery-grid">
          <img src="https://i.imgur.com/Sskc6gH.jpeg" alt="Papiros antigos do Novo Testamento" class="gallery-item" loading="lazy">
          <img src="https://i.imgur.com/tFwK95u.jpeg" alt="Estudos bíblicos e manuscritos" class="gallery-item" loading="lazy">
          <img src="https://i.imgur.com/DJmUELj.jpeg" alt="Igreja histórica" class="gallery-item" loading="lazy">
        </div>
      </section>
      
      <p>Mas qual é a veracidade desses documentos? Como dito no próprio livro de Lucas (C1, v1-4), os textos foram escritos e divulgados a partir de experiências e relatos. Levando em conta que a maioria deles foi criada e transmitida por adoradores e seguidores de Jesus Cristo, surge a dúvida: podemos confiar?</p>
      <br>
      <p>A resposta para essa pergunta, segundo a História, seria sim. Historicamente falando, para avaliar a autenticidade de uma evidência bibliográfica, analisamos a data em que o documento original foi escrito e comparamos com a cópia mais antiga existente, ou seja a cópia mais próxima do período que acreditamos ter acontecido o relato. Isso porque, naquela época, o material utilizado para a escrita se deteriorava rapidamente, tornando necessária a replicação constante dos textos.</p>
      <br>
      <p>Um exemplo bastante usado para ilustrar essa análise é o do filósofo Platão. Sua existência é inquestionável, porém a evidência bibliográfica mais antiga referente a ele data de cerca de 1.200 anos após o período em que se acredita que escreveu o original. Já no caso do Novo Testamento, a evidência mais antiga descoberta — os papiros de John Rylands — foi datada de aproximadamente 100 anos após o original.</p>
      <br>
      <p>Outra forma de comprovar a autenticidade é observar a quantidade de cópias existentes do texto original. No caso de Platão, todas as suas obras conhecidas derivam de apenas sete cópias encontradas. Já o Novo Testamento possui mais de 5.600 cópias em grego e mais de 19 mil em aramaico e outras línguas. Em outras palavras, estamos falando de uma base bibliográfica de mais de 24 mil cópias. Assim, a consistência histórica do Novo Testamento, com base em tudo o que foi apresentado, chega a impressionantes 99,5% de consistência.</p>
      <br>
      <p>Levando tudo isso em conta — e deixando a fé de lado — podemos concluir que o Novo Testamento é, sem dúvida, o documento histórico mais consistente em termos textuais. Unindo ciência e fé, é possível afirmar a existência e a história de Jesus Cristo.</p>

      <div class="post-actions">
        <button class="like-btn" data-id="novo-testamento">
          ❤️ <span class="like-count">0</span>
        </button>
        <button class="bookmark-btn" onclick="toggleBookmark()">
          🔖 Salvar
        </button>
      </div>

      <div class="post-tags">
        <span class="tag">História Religiosa</span>
        <span class="tag">Cristianismo</span>
        <span class="tag">Documentos Históricos</span>
      </div>

      <a href="index.html" class="btn back-btn">← Voltar para o início</a>
    `
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
    return parseInt(localStorage.getItem(`views-${postId}`)) || 0;
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