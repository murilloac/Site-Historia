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
    {
    id: "Jesus-existiu",
    titulo: "Jesus existiu ou não?",
    descricao: "Nesse texto apresento algumas evidências historicas que tratam da existencia do Cristo - Evidências mostrando relatos da vida e da obras de Jesus",
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
      <h1 class="post-title">Jesus existiu ou não?</h1>
      
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
      
      <p>Para constatar a existência de alguma figura da Antiguidade, partimos em busca de evidências de sua existência — evidências arqueológicas, escrituras, textos, objetos antigos etc. Tudo isso contribui para provar a existência ou, pelo menos, nos aproximar da verdade.</p>
      <br>
      <section class="gallery">
        <h3>Galeria de imagens</h3>
        <div class="gallery-grid">
          <img src="https://i.imgur.com/Sskc6gH.jpeg" alt="Papiros antigos do Novo Testamento" class="gallery-item" loading="lazy">
          <img src="https://i.imgur.com/tFwK95u.jpeg" alt="Estudos bíblicos e manuscritos" class="gallery-item" loading="lazy">
          <img src="https://i.imgur.com/DJmUELj.jpeg" alt="Igreja histórica" class="gallery-item" loading="lazy">
        </div>
      </section>
      
      <p>Evidências arqueológicas — por exemplo, restos mortais, lápides, peças de roupas, algum objeto da época algo bem palpável que comprove que a pessoa realmente existiu. Esse tipo de evidência é muito difícil de ser encontrado e, quando é, normalmente pertence a pessoas que foram grandes nomes e símbolos de poder em sua época. No caso de Jesus, é muito difícil achar algo, visto que, no período em que viveu, ele era apenas mais um judeu de uma cidadezinha chamada Nazaré.</p>
      <br>
      <p>Dito isso, ainda assim resolvi trazer uma evidência arqueológica que mais se aproxima de ter alguma relação com Jesus: trata-se de um ossuário, um recipiente encontrado em 2002, semelhante aos usados pelos judeus da época para guardar restos mortais. O que o torna interessante é a inscrição encontrada nele: YA'QOV BAR YOSEF AKHUI DIYESHUA, que, traduzido, significa “Tiago, filho de José, irmão de Jesus”. Esse ossuário foi datado do primeiro século d.C. e se refere a um personagem conhecido como um dos irmãos de Jesus, remetendo assim à sua possível existência.</p>
      <br>
      <p>O problema é que os nomes descritos no objeto eram muito comuns na época. Estudos baseados em documentos e outros ossuários encontrados na mesma região indicam que poderiam existir cerca de vinte homens chamados Tiago, com um pai chamado José e um irmão chamado Jesus. Outro ponto é que, embora a datação científica do objeto tenha sido confirmada, há grande divergência quanto à autenticidade da inscrição nela contida. Essa evidência caso não seja verdadeira é no minimo curiosa e nos deixa com a pulga atrás da orelha.</p>
      <br>
      <p>Saindo desse tema e passando para as escrituras, quando falamos de evidências escritas, encontramos diversos documentos — e é lógico que a maioria deles foi escrita por cristãos. Para tentar provar a existência de Jesus a alguém que não crê, o melhor é não utilizar textos cristãos, para não sermos taxados de tendenciosos.</p>
      <br>
      <p>Um relato muito importante para a história vem de Públio Cornélio Tácito, um senador romano do início do século II, em uma de suas obras Annales, onde relata a história de alguns imperadores, como Nero. Na parte em que fala sobre o grande incêndio de Roma, ele conta que, quando a população imputou a culpa a Nero, este aproveitou para responsabilizar um povo odiado na época, conhecido como “crestãos”. Em um trecho, Tácito diz o seguinte sobre eles: “O fundador desse nome, Cristo, havia sido executado no reinado de Tibério pelo procurador Pôncio Pilatos...” (Annales 15.44). Esse relato corrobora diversos elementos da história de Jesus — o período em que viveu, os governantes da época e o governador da Judeia, Pilatos —, além de confirmar a existência de movimentos cristãos em Roma já no primeiro século.</p>
	  <br>
	  <p>Há diversos outros relatos do Império Romano. Existem documentos em formato de cartas relatando o movimento do cristianismo e a disccussão de medidas para lidar com seus seguidores. Em alguns documentos é mencionado como eram tratados os adeptos do “Cristo”. Esses adoradores eram levados a negar seu Deus e reverenciar os deuses romanos, sofrendo graves punições caso se recusassem — em alguns casos, até a morte. Um ponto que chama atenção é o tamanho do impacto que o cristianismo já havia alcançado, a ponto de governadores e até imperadores se corresponderem sobre o assunto, outro ponto seria a inserção do cristianismo dentro de Roma e o quão impactante foi o movimento para pessoas entregarem a propria vida pela causa.</p>
	  <br>
	  <p>Quando falamos de fontes judaicas, o historiador Flávio Josefo é um nome importante. Em uma de suas obras, The Antiquities of the Jews, ele faz referência a Jesus. Em um de seus relatos, afirma que Tiago, o irmão de Jesus, também chamado Cristo, foi levado ao sumo sacerdote, acusado de transgressões e condenado ao apedrejamento. Isso coincide com fontes gregas que mencionam que Tiago realmente foi morto por apedrejamento nessa data, por volta da década de 60 d.C.</p>
	  <br>
	  <p>Outra fonte bastante interessante é o Talmude. Na escritura rabínica, encontramos menções a um tal de Yeshu (ou Jesus), embora, como era de se esperar, nenhuma delas seja amigável. Nesses textos, ele é chamado de praticante de magia e agitador das massas; acusam-no de ser fruto de uma relação extraconjugal de sua mãe com um judeu da tribo de Judá chamado Pantera, de se autoproclamar Messias e de ter seus discípulos tentado esconder seu corpo para comprovar a ressurreição. Esses textos refletem o confronto histórico de narrativas entre cristãos e judeus, mas ainda assim trazem menções à existência de Jesus.</p>
	  <br>
	  <p>Mesmo que possam ser consideradas tendenciosas, não podemos deixar de lado as fontes cristãs. Esses textos não devem ser classificados como insignificantes. Um historiador pode utilizar documentos criados para defender uma ideologia, desde que sejam lidos de forma crítica e comparados com outras fontes da época. Dito isso, podemos citar as cartas de Paulo. Historicamente, acredita-se que apenas sete das treze cartas atribuídas a ele foram realmente de sua autoria. Nelas, Jesus é sempre referido como um homem; é descritos seu nascimento, ministério e condenação. Paulo também menciona ter estado com apóstolos que conviveram com Jesus e cita o irmão Tiago, o mesmo mencionado anteriormente.</p>
	  <br>
	  <p>Para a maioria dos historiadores, é muito plausível a existência de Jesus de Nazaré, embora sempre tratada como hipótese. Para se chegar à certeza absoluta, é necessário considerar o fator fé. Quanto ao personagem, acredito que as evidências apresentadas, somadas a muitas outras não citadas aqui, são fortes. Contudo, depende do que cada pessoa acredita ou quer acreditar. Um ponto que merece destaque sem sombra de dúvidas é o impacto da existência de Cristo na humanidade — e outro ponto bastante curioso que pode ser trazido a discussão é que ao tratarmos de outros nomes históricos, como Sócrates, que é citado por apenas três autores e sem qualquer evidência arqueológica, não se gera a mesma discussão sobre sua existência como ocorre com Jesus.</p>

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