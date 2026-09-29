/* ==========================================================================
   L'ATELIER DE CLÉMENCE — JAVASCRIPT LOGIC & INTERACTIVE FEATURES
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. PRODUCT DATA DICTIONARY FOR LIGHTBOX MODAL
     ------------------------------------------------------------------------ */
  const galleryProducts = {
    1: {
      title: 'Doudous "Léo & Barnabé"',
      category: 'Amigurumi & Doudou',
      price: '39 €',
      image: 'assets/images/amigurumi.png',
      description: 'Duo féerique de doudous crochetés à la main au fil chenille velours ultra-moelleux. Rembourrage hypoallergénique en ouate d\'interieur certifiée bio.',
      materials: '100% Microfibre Chenille OEKO-TEX',
      dimensions: 'Hauteur 28 cm',
      care: 'Lavage main ou machine 30°C programme délicat. Séchage à plat.'
    },
    2: {
      title: 'Gilet "Nuage de Laine"',
      category: 'Mode & Tricot',
      price: '125 €',
      image: 'assets/images/clothing.png',
      description: 'Gilet oversize tricoté main avec amour. Sa coupe enveloppante et ses nuances douces rose poudré et crème en font la pièce maîtresse idéale pour l\'automne-hiver.',
      materials: '70% Mérinos Bio, 30% Alpaga',
      dimensions: 'Taille unique (S au XL disponible sur-mesure)',
      care: 'Lavage main à l\'eau tiède avec lessive spéciale laine.'
    },
    3: {
      title: 'Suspension & Untersetzer Bohème',
      category: 'Décoration',
      price: '32 €',
      image: 'assets/images/decor.png',
      description: 'Ensemble de décoration d\'intérieur bohème comprenant un cache-pot suspendu et son duo de dessous de tasse assortis.',
      materials: '100% Coton peigné recyclé 4mm & Anneau hêtre brut',
      dimensions: 'Longueur suspension 75cm / Sous-verres Ø12cm',
      care: 'Dépoussiérage doux ou lavage main.'
    },
    4: {
      title: 'Duo Hiver "Hygge Warmth"',
      category: 'Accessoire',
      price: '48 €',
      image: 'assets/images/hero.png',
      description: 'Bonnet à pompon généreux et son col snood assorti. Un cocon de douceur pour affronter les journées froides avec élégance.',
      materials: '80% Laine Alpaga, 20% Soie',
      dimensions: 'Taille adulte ajustable',
      care: 'Lavage délicat laine 30°C.'
    },
    5: {
      title: 'Petit Renard "Rustique"',
      category: 'Amigurumi',
      price: '35 €',
      image: 'assets/images/amigurumi.png',
      description: 'Adorable compagnon des bois réalisé en fil de coton terracotta. Yeux brodés avec soin pour convenir aux enfants dès la naissance.',
      materials: '100% Coton peigné bio',
      dimensions: 'Hauteur 22 cm',
      care: 'Lavable en machine 30°C.'
    },
    6: {
      title: 'Sac Cabas "Granny Vintage"',
      category: 'Accessoire',
      price: '55 €',
      image: 'assets/images/decor.png',
      description: 'Sac cabas tendance assemblé avec 18 carrés au crochet style retro granny square. Anses renforcées en cuir végétal.',
      materials: '100% Coton peigné & anses cuir',
      dimensions: '38 x 40 cm (sans les anses)',
      care: 'Nettoyage ciblé à l\'éponge humide.'
    },
    7: {
      title: 'Plaid Naissance "Cocon Douillet"',
      category: 'Mode & Bébé',
      price: '79 €',
      image: 'assets/images/clothing.png',
      description: 'Couverture de bébé tricotée au point mousse ultra-souple. Régule la température du nouveau-né pour des siestes en toute sérénité.',
      materials: '100% Laine Mérinos Extra-fine',
      dimensions: '80 x 100 cm',
      care: 'Lavage délicat machine 30°C.'
    },
    8: {
      title: 'Duo Baskets "Corde & Sauvage"',
      category: 'Décoration',
      price: '36 €',
      image: 'assets/images/hero.png',
      description: 'Paniers de rangement rigides en corde de coton crochetée. Idéal pour ranger vos pelotes, cosmétiques ou petits trésors.',
      materials: 'Corde de coton 5mm ultra-résistante',
      dimensions: 'Grand : Ø20cm x H14cm / Petit : Ø15cm x H10cm',
      care: 'Lavable en surface.'
    }
  };

  /* ------------------------------------------------------------------------
     2. DARK / LIGHT THEME TOGGLE
     ------------------------------------------------------------------------ */
  const themeToggleBtn = document.getElementById('themeToggle');
  const htmlDoc = document.documentElement;

  // Read saved theme preference
  const savedTheme = localStorage.getItem('atelierTheme') || 'light';
  htmlDoc.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlDoc.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlDoc.setAttribute('data-theme', newTheme);
    localStorage.setItem('atelierTheme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    const icon = themeToggleBtn.querySelector('i');
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-sun';
    } else {
      icon.className = 'fa-solid fa-moon';
    }
  }

  /* ------------------------------------------------------------------------
     3. MOBILE DRAWER NAVIGATION
     ------------------------------------------------------------------------ */
  const mobileToggleBtn = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('open');
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
  }

  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  /* ------------------------------------------------------------------------
     4. GALLERY CATEGORY FILTER
     ------------------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.9)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     5. HEART / LIKE COUNTER SYSTEM
     ------------------------------------------------------------------------ */
  const likeBtns = document.querySelectorAll('.like-btn');

  likeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent modal opening if clicked
      const countSpan = btn.querySelector('.like-count');
      let currentLikes = parseInt(countSpan.textContent, 10);

      if (btn.classList.contains('liked')) {
        btn.classList.remove('liked');
        countSpan.textContent = currentLikes - 1;
      } else {
        btn.classList.add('liked');
        countSpan.textContent = currentLikes + 1;
        // Pop effect
        btn.style.transform = 'scale(1.3)';
        setTimeout(() => btn.style.transform = 'none', 200);
      }
    });
  });

  /* ------------------------------------------------------------------------
     6. PRODUCT LIGHTBOX MODAL
     ------------------------------------------------------------------------ */
  const modal = document.getElementById('productModal');
  const modalCloseBtn = document.getElementById('modalClose');
  const openModalBtns = document.querySelectorAll('.open-modal');

  const modalImg = document.getElementById('modalImg');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalMaterials = document.getElementById('modalMaterials');
  const modalDimensions = document.getElementById('modalDimensions');
  const modalCare = document.getElementById('modalCare');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = btn.getAttribute('data-id');
      const product = galleryProducts[productId];

      if (product) {
        modalImg.src = product.image;
        modalCategory.textContent = product.category;
        modalTitle.textContent = product.title;
        modalPrice.textContent = product.price;
        modalDesc.textContent = product.description;
        modalMaterials.textContent = product.materials;
        modalDimensions.textContent = product.dimensions;
        modalCare.textContent = product.care;

        modal.classList.add('open');
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });

  /* ------------------------------------------------------------------------
     7. SUR-MESURE INTERACTIVE ESTIMATOR & CONFIGURATOR
     ------------------------------------------------------------------------ */
  const typeChips = document.querySelectorAll('#creationTypeOptions .config-chip');
  const paletteSwatches = document.querySelectorAll('#palettePicker .color-swatch');
  const optName = document.getElementById('optName');
  const optBox = document.getElementById('optBox');
  const optExpress = document.getElementById('optExpress');

  const previewImg = document.getElementById('previewImg');
  const previewLabel = document.getElementById('previewLabel');
  const paletteLabel = document.getElementById('paletteLabel');
  const estimatedTime = document.getElementById('estimatedTime');
  const estimatedPrice = document.getElementById('estimatedPrice');
  const useCustomConfigBtn = document.getElementById('useCustomConfigBtn');

  const typeConfigData = {
    amigurumi: { label: 'Doudou / Amigurumi Sur-Mesure', img: 'assets/images/amigurumi.png', baseDays: 5, basePrice: 35 },
    vetement: { label: 'Vêtement / Gilet Tricoté', img: 'assets/images/clothing.png', baseDays: 10, basePrice: 85 },
    deco: { label: 'Décoration & Suspendu Bohème', img: 'assets/images/decor.png', baseDays: 7, basePrice: 40 },
    accessoire: { label: 'Accessoire Mode (Bonnet / Sac)', img: 'assets/images/hero.png', baseDays: 4, basePrice: 30 }
  };

  const paletteNames = {
    pastels: 'Pastel Douceur (Rose, Jaune & Bleu)',
    terracotta: 'Terracotta & Ocre Chaleureux',
    sauge: 'Vert Sauge & Botanique Naturel',
    monochrome: 'Monochrome Gris & Blanc Chic'
  };

  function updateEstimator() {
    // Active creation type
    const activeTypeChip = document.querySelector('#creationTypeOptions .config-chip.active');
    const selectedTypeKey = activeTypeChip ? activeTypeChip.getAttribute('data-type') : 'amigurumi';
    const typeInfo = typeConfigData[selectedTypeKey];

    // Active palette
    const activeSwatch = document.querySelector('#palettePicker .color-swatch.active');
    const paletteKey = activeSwatch ? activeSwatch.getAttribute('data-palette') : 'pastels';

    // Calculate Price & Days
    let totalPrice = typeInfo.basePrice;
    let totalDays = typeInfo.baseDays;

    if (optName && optName.checked) {
      totalPrice += parseInt(optName.getAttribute('data-extraprice'), 10);
      totalDays += parseInt(optName.getAttribute('data-extradays'), 10);
    }

    if (optBox && optBox.checked) {
      totalPrice += parseInt(optBox.getAttribute('data-extraprice'), 10);
      totalDays += parseInt(optBox.getAttribute('data-extradays'), 10);
    }

    if (optExpress && optExpress.checked) {
      totalPrice += parseInt(optExpress.getAttribute('data-extraprice'), 10);
      totalDays += parseInt(optExpress.getAttribute('data-extradays'), 10);
    }

    if (totalDays < 2) totalDays = 2; // minimum threshold

    // Update UI elements
    previewImg.src = typeInfo.img;
    previewLabel.textContent = typeInfo.label;
    paletteLabel.textContent = `Palette : ${paletteNames[paletteKey]}`;
    estimatedPrice.textContent = `${totalPrice} €`;
    estimatedTime.textContent = `${totalDays} à ${totalDays + 2} jours`;
  }

  // Event Listeners for Chips & Controls
  typeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      typeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      updateEstimator();
    });
  });

  paletteSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      paletteSwatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      updateEstimator();
    });
  });

  if (optName) optName.addEventListener('change', updateEstimator);
  if (optBox) optBox.addEventListener('change', updateEstimator);
  if (optExpress) optExpress.addEventListener('change', updateEstimator);

  // Transfer Config to Contact Form
  if (useCustomConfigBtn) {
    useCustomConfigBtn.addEventListener('click', () => {
      const activeTypeChip = document.querySelector('#creationTypeOptions .config-chip.active');
      const activeSwatch = document.querySelector('#palettePicker .color-swatch.active');
      const paletteKey = activeSwatch ? activeSwatch.getAttribute('data-palette') : 'pastels';
      
      const typeText = activeTypeChip ? activeTypeChip.textContent.trim() : 'Doudou';
      const priceText = estimatedPrice.textContent;
      const timeText = estimatedTime.textContent;
      
      let optionsList = [];
      if (optName && optName.checked) optionsList.push('Broderie du prénom');
      if (optBox && optBox.checked) optionsList.push('Coffret Cadeau');
      if (optExpress && optExpress.checked) optionsList.push('Traitement Express');

      const optionsStr = optionsList.length > 0 ? optionsList.join(', ') : 'Aucune option payante';

      const messageBox = document.getElementById('message');
      const subjectSelect = document.getElementById('subject');

      if (subjectSelect) subjectSelect.value = 'surmesure';
      if (messageBox) {
        messageBox.value = `Bonjour Clémence,\n\nJe souhaiterais commander une création sur-mesure :\n- Type : ${typeText}\n- Palette : ${paletteNames[paletteKey]}\n- Options : ${optionsStr}\n- Estimation calculée : ${priceText} (Délai : ${timeText})\n\nVoici quelques précisions sur mon projet : `;
      }

      // Smooth scroll to contact section
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /* ------------------------------------------------------------------------
     8. TESTIMONIALS SLIDER CAROUSEL
     ------------------------------------------------------------------------ */
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const sliderDots = document.querySelectorAll('#sliderDots .dot');
  let currentSlide = 0;

  function showSlide(index) {
    testimonialCards.forEach((card, i) => {
      card.classList.remove('active');
      sliderDots[i].classList.remove('active');
    });

    currentSlide = index;
    if (testimonialCards[currentSlide]) {
      testimonialCards[currentSlide].classList.add('active');
      sliderDots[currentSlide].classList.add('active');
    }
  }

  sliderDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIdx = parseInt(dot.getAttribute('data-slide'), 10);
      showSlide(slideIdx);
    });
  });

  // Auto-play slider every 6 seconds
  setInterval(() => {
    const nextSlide = (currentSlide + 1) % testimonialCards.length;
    showSlide(nextSlide);
  }, 6000);

  /* ------------------------------------------------------------------------
     9. FAQ ACCORDION
     ------------------------------------------------------------------------ */
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const faqItem = q.parentElement;
      const isOpen = faqItem.classList.contains('open');

      // Close all items
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('open'));

      if (!isOpen) {
        faqItem.classList.add('open');
      }
    });
  });

  /* ------------------------------------------------------------------------
     10. CONTACT FORM VALIDATION & TOAST NOTIFICATION
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('contactForm');
  const toastNotification = document.getElementById('toastNotification');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        showToast('Champ incomplet', 'Veuillez remplir tous les champs obligatoires (*).', 'error');
        return;
      }

      // Simulate successful form dispatch
      showToast('Message Envoyé !', 'Merci Clémence a bien reçu votre demande et vous répondra sous 24h.', 'success');
      contactForm.reset();
    });
  }

  function showToast(title, msg, type = 'success') {
    const toastTitle = document.getElementById('toastTitle');
    const toastMsg = document.getElementById('toastMessage');
    const toastIcon = toastNotification.querySelector('.toast-icon i');

    if (toastTitle) toastTitle.textContent = title;
    if (toastMsg) toastMsg.textContent = msg;

    if (type === 'error') {
      toastIcon.className = 'fa-solid fa-circle-exclamation';
      toastIcon.style.color = '#ef4444';
    } else {
      toastIcon.className = 'fa-solid fa-circle-check';
      toastIcon.style.color = '#16a34a';
    }

    toastNotification.classList.add('show');

    setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 4500);
  }

  /* ------------------------------------------------------------------------
     11. ACTIVE NAVBAR LINK HIGHLIGHT ON SCROLL
     ------------------------------------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(sec => {
      const sectionTop = sec.offsetTop;
      const sectionHeight = sec.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

});
