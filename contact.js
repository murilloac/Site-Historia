// ==== CONTACT FORM ====
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('form-feedback');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    
    // Validate form
    if (!validateForm(data)) {
      return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '📤 Enviando...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      showFormFeedback('success', 'Mensagem enviada com sucesso! Responderemos em breve.');
      contactForm.reset();
      
      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

function validateForm(data) {
  const errors = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Nome deve ter pelo menos 2 caracteres');
  }
  
  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Email inválido');
  }
  
  if (!data.subject) {
    errors.push('Selecione um assunto');
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Mensagem deve ter pelo menos 10 caracteres');
  }
  
  if (errors.length > 0) {
    showFormFeedback('error', errors.join('<br>'));
    return false;
  }
  
  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showFormFeedback(type, message) {
  if (!formFeedback) return;
  
  formFeedback.innerHTML = message;
  formFeedback.className = `form-feedback ${type}`;
  formFeedback.style.display = 'block';
  
  // Auto-hide success messages after 5 seconds
  if (type === 'success') {
    setTimeout(() => {
      formFeedback.style.display = 'none';
    }, 5000);
  }
}

// ==== FORM ENHANCEMENTS ====
document.addEventListener('DOMContentLoaded', function() {
  // Add character counter to textarea
  const messageTextarea = document.getElementById('message');
  if (messageTextarea) {
    const charCounter = document.createElement('div');
    charCounter.className = 'char-counter';
    charCounter.style.textAlign = 'right';
    charCounter.style.fontSize = '0.8rem';
    charCounter.style.color = '#666';
    charCounter.style.marginTop = '0.5rem';
    
    messageTextarea.parentNode.appendChild(charCounter);
    
    function updateCharCounter() {
      const current = messageTextarea.value.length;
      const max = 1000;
      charCounter.textContent = `${current}/${max} caracteres`;
      
      if (current > max * 0.9) {
        charCounter.style.color = '#e74c3c';
      } else {
        charCounter.style.color = '#666';
      }
    }
    
    messageTextarea.addEventListener('input', updateCharCounter);
    updateCharCounter();
  }
  
  // Add focus effects to form inputs
  const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentNode.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      this.parentNode.classList.remove('focused');
      if (this.value.trim()) {
        this.parentNode.classList.add('filled');
      } else {
        this.parentNode.classList.remove('filled');
      }
    });
  });
});

// ==== FAQ TOGGLE ====
document.querySelectorAll('.faq-item h4').forEach(question => {
  question.style.cursor = 'pointer';
  question.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    const isVisible = answer.style.display !== 'none';
    
    // Hide all other answers
    document.querySelectorAll('.faq-item p').forEach(p => {
      p.style.display = 'none';
    });
    
    // Toggle current answer
    answer.style.display = isVisible ? 'none' : 'block';
    
    // Add visual indicator
    this.style.color = isVisible ? '' : 'var(--accent-color)';
  });
});

// ==== SOCIAL LINKS TRACKING ====
document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const platform = this.textContent.trim();
    console.log(`Social link clicked: ${platform}`);
    
    // Here you could add analytics tracking
    // gtag('event', 'social_click', { platform: platform });
    
    // For demo purposes, show alert
    alert(`Redirecionando para ${platform}...`);
  });
});