/**
 * FAQ Schema Block JavaScript
 * File: assets/faq-schema-block.js
 * Version: 1.0.0
 * Dependencies: None
 * Purpose: Interactive functionality for FAQ accordion
 */

class FAQSchemaBlock {
  constructor(blockElement) {
    this.block = blockElement;
    this.accordion = this.block.querySelector('.faq-accordion');
    this.items = this.block.querySelectorAll('.faq-item');
    this.questions = this.block.querySelectorAll('.faq-question');
    this.answers = this.block.querySelectorAll('.faq-answer');
    
    // Settings from data attributes
    this.allowMultiple = this.accordion.dataset.allowMultiple === 'true';
    this.animationSpeed = this.accordion.dataset.animationSpeed || 'normal';
    
    // Animation speeds
    this.speeds = {
      fast: 150,
      normal: 300,
      slow: 500
    };
    
    this.duration = this.speeds[this.animationSpeed] || this.speeds.normal;
    
    this.init();
  }
  
  init() {
    this.setupEventListeners();
    this.setupInitialState();
    this.setupKeyboardNavigation();
  }
  
  setupEventListeners() {
    this.questions.forEach((question, index) => {
      question.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleFAQ(index);
      });
    });
  }
  
  setupInitialState() {
    // Set initial ARIA states and heights
    this.answers.forEach((answer, index) => {
      const question = this.questions[index];
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      
      if (isExpanded) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.setAttribute('aria-expanded', 'true');
        answer.removeAttribute('hidden');
      } else {
        answer.style.maxHeight = '0px';
        answer.setAttribute('aria-expanded', 'false');
        answer.setAttribute('hidden', '');
      }
    });
  }
  
  setupKeyboardNavigation() {
    this.questions.forEach((question, index) => {
      question.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'Enter':
          case ' ':
            e.preventDefault();
            this.toggleFAQ(index);
            break;
          case 'ArrowDown':
            e.preventDefault();
            this.focusNext(index);
            break;
          case 'ArrowUp':
            e.preventDefault();
            this.focusPrevious(index);
            break;
          case 'Home':
            e.preventDefault();
            this.focusFirst();
            break;
          case 'End':
            e.preventDefault();
            this.focusLast();
            break;
        }
      });
    });
  }
  
  toggleFAQ(index) {
    const question = this.questions[index];
    const answer = this.answers[index];
    const isExpanded = question.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
      this.closeFAQ(index);
    } else {
      // Close others if multiple is not allowed
      if (!this.allowMultiple) {
        this.closeAllFAQs();
      }
      this.openFAQ(index);
    }
    
    // Dispatch custom event
    this.block.dispatchEvent(new CustomEvent('faq:toggle', {
      detail: {
        index,
        isExpanded: !isExpanded,
        question: question.textContent.trim(),
        answer: answer.textContent.trim()
      }
    }));
  }
  
  openFAQ(index) {
    const question = this.questions[index];
    const answer = this.answers[index];
    
    // Update ARIA states
    question.setAttribute('aria-expanded', 'true');
    answer.setAttribute('aria-expanded', 'true');
    answer.removeAttribute('hidden');
    
    // Animate opening
    answer.style.maxHeight = '0px';
    requestAnimationFrame(() => {
      answer.style.transition = `max-height ${this.duration}ms ease, padding ${this.duration}ms ease`;
      answer.style.maxHeight = answer.scrollHeight + 'px';
    });
    
    // Clean up after animation
    setTimeout(() => {
      answer.style.maxHeight = 'none';
      answer.style.transition = '';
    }, this.duration);
  }
  
  closeFAQ(index) {
    const question = this.questions[index];
    const answer = this.answers[index];
    
    // Set explicit height for animation
    answer.style.maxHeight = answer.scrollHeight + 'px';
    answer.style.transition = `max-height ${this.duration}ms ease, padding ${this.duration}ms ease`;
    
    requestAnimationFrame(() => {
      answer.style.maxHeight = '0px';
    });
    
    // Update ARIA states after animation
    setTimeout(() => {
      question.setAttribute('aria-expanded', 'false');
      answer.setAttribute('aria-expanded', 'false');
      answer.setAttribute('hidden', '');
      answer.style.transition = '';
    }, this.duration);
  }
  
  closeAllFAQs() {
    this.questions.forEach((_, index) => {
      const isExpanded = this.questions[index].getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        this.closeFAQ(index);
      }
    });
  }
  
  openAllFAQs() {
    this.questions.forEach((_, index) => {
      const isExpanded = this.questions[index].getAttribute('aria-expanded') === 'true';
      if (!isExpanded) {
        this.openFAQ(index);
      }
    });
  }
  
  // Keyboard navigation helpers
  focusNext(currentIndex) {
    const nextIndex = (currentIndex + 1) % this.questions.length;
    this.questions[nextIndex].focus();
  }
  
  focusPrevious(currentIndex) {
    const prevIndex = currentIndex === 0 ? this.questions.length - 1 : currentIndex - 1;
    this.questions[prevIndex].focus();
  }
  
  focusFirst() {
    this.questions[0].focus();
  }
  
  focusLast() {
    this.questions[this.questions.length - 1].focus();
  }
  
  // Public API methods
  getExpandedItems() {
    return Array.from(this.questions)
      .map((question, index) => ({
        index,
        expanded: question.getAttribute('aria-expanded') === 'true',
        question: question.textContent.trim(),
        answer: this.answers[index].textContent.trim()
      }))
      .filter(item => item.expanded);
  }
  
  expandItem(index) {
    if (index >= 0 && index < this.questions.length) {
      const isExpanded = this.questions[index].getAttribute('aria-expanded') === 'true';
      if (!isExpanded) {
        this.toggleFAQ(index);
      }
    }
  }
  
  collapseItem(index) {
    if (index >= 0 && index < this.questions.length) {
      const isExpanded = this.questions[index].getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        this.toggleFAQ(index);
      }
    }
  }
  
  destroy() {
    // Remove event listeners
    this.questions.forEach(question => {
      question.replaceWith(question.cloneNode(true));
    });
  }
}

// Auto-initialize FAQ blocks
document.addEventListener('DOMContentLoaded', function() {
  const faqBlocks = document.querySelectorAll('.faq-schema-block');
  const instances = [];
  
  faqBlocks.forEach(block => {
    const instance = new FAQSchemaBlock(block);
    instances.push(instance);
    
    // Store instance on element for external access
    block.faqInstance = instance;
  });
  
  // Global FAQ API
  window.FAQBlocks = {
    instances,
    getBlock(blockId) {
      const block = document.getElementById(blockId);
      return block ? block.faqInstance : null;
    },
    getAllExpanded() {
      return instances.flatMap(instance => instance.getExpandedItems());
    }
  };
});

// Handle theme editor updates
document.addEventListener('shopify:section:load', function(event) {
  const faqBlocks = event.target.querySelectorAll('.faq-schema-block');
  faqBlocks.forEach(block => {
    if (!block.faqInstance) {
      block.faqInstance = new FAQSchemaBlock(block);
    }
  });
});

// Cleanup on section unload
document.addEventListener('shopify:section:unload', function(event) {
  const faqBlocks = event.target.querySelectorAll('.faq-schema-block');
  faqBlocks.forEach(block => {
    if (block.faqInstance) {
      block.faqInstance.destroy();
      delete block.faqInstance;
    }
  });
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FAQSchemaBlock;
}