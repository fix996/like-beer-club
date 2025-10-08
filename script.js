// Datos de ejemplo para la página
let beersData = [
  {
    id: 1,
    name: "Hoppy Amber Ale",
    category: "ale",
    description: "Una ale ámbar equilibrada con un carácter maltoso y un amargor lupulado moderado.",
    abv: "5.8%",
    price: "$6.500",
    image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    name: "Double IPA",
    category: "ipa",
    description: "Una IPA doble intensamente lupulada con notas cítricas y tropicales.",
    abv: "8.5%",
    price: "$7.500",
    image: "https://images.unsplash.com/photo-1598983062493-8d0e0b89970e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    name: "Imperial Stout",
    category: "stout",
    description: "Una stout imperial rica y compleja con notas de café, chocolate y regaliz.",
    abv: "9.2%",
    price: "$8.000",
    image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  }
];

let foodData = {
  hamburguesas: [
    {
      id: 1,
      name: "Hamburguesa Like Beer",
      description: "Carne de res premium, queso cheddar, tocino, lechuga, tomate y nuestra salsa especial.",
      price: "$19.000",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1098&q=80",
      tags: ["Recomendado"]
    },
    {
      id: 2,
      name: "Hamburguesa BBQ",
      description: "Carne de res, queso, cebolla caramelizada y salsa barbacoa casera.",
      price: "$18.500",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1098&q=80",
      tags: ["Especialidad"]
    }
  ],
  sandwiches: [
    {
      id: 3,
      name: "Sándwich de Pollo Crispy",
      description: "Pollo crispy, lechuga, tomate, mayonesa de ajo en pan artesanal.",
      price: "$15.000",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Recomendado"]
    },
    {
      id: 4,
      name: "Sándwich Club",
      description: "Pavo, tocino, lechuga, tomate, mayonesa y pan tostado.",
      price: "$16.500",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Clásico"]
    }
  ],
  carnes: [
    {
      id: 5,
      name: "Bife de Chorizo",
      description: "Corte premium de bife de chorizo a la parrilla, servido con papas fritas o ensalada.",
      price: "$24.000",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      tags: ["Especialidad"]
    },
    {
      id: 6,
      name: "Costillas BBQ",
      description: "Costillas de cerdo slow-cooked con nuestra salsa barbacoa casera.",
      price: "$22.000",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      tags: ["Recomendado"]
    }
  ],
  entradas: [
    {
      id: 7,
      name: "Tabla de Embutidos y Quesos",
      description: "Selección de embutidos ibéricos, quesos artesanales y acompañamientos.",
      price: "$18.000",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      tags: ["Compartir", "Recomendado"]
    },
    {
      id: 8,
      name: "Alitas de Pollo Búfalo",
      description: "Alitas de pollo crujientes bañadas en salsa búfala, servidas con apio y aderezo azul.",
      price: "$12.500",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      tags: ["Picante"]
    }
  ],
  postres: [
    {
      id: 9,
      name: "Brownie con Helado",
      description: "Brownie de chocolate caliente con helado de vainilla y salsa de chocolate.",
      price: "$8.500",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      tags: ["Recomendado"]
    },
    {
      id: 10,
      name: "Cheesecake de Frutos Rojos",
      description: "Cheesecake cremoso con coulis de frutos rojos y frambuesas frescas.",
      price: "$9.000",
      image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Especialidad"]
    }
  ]
};

let eventsData = [
  {
    id: 1,
    title: "Noche de IPA",
    description: "Una noche dedicada a nuestras IPAs, con degustaciones especiales y el lanzamiento de nuestra nueva Double IPA.",
    date: "15 Oct 2023",
    time: "7:00 PM",
    location: "Salón Principal",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Cata con el Maestro Cervecero",
    description: "Una experiencia exclusiva donde nuestro maestro cervecero guiará una cata de nuestras cervezas especiales.",
    date: "22 Oct 2023",
    time: "6:30 PM",
    location: "Sala Privada",
    image: "https://images.unsplash.com/photo-1572119865084-43d6c93d5d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

// Estado de la aplicación
let currentUser = null;
let editingBeerId = null;
let editingFoodId = null;
let editingEventId = null;

// Funciones principales
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar todos los componentes
  initNavigation();
  initBeersSection();
  initMenuSection();
  initEventsSection();
  initAdminPanel();
  initScrollEffects();
  initBackToTop();
  initAnimations();
  
  console.log('Like Beer Club - Página cargada correctamente');
});

// Navegación
function initNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.querySelector('.header');
  const adminLoginBtn = document.getElementById('admin-login-btn');
  
  // Toggle del menú móvil
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }
  
  // Cerrar menú al hacer clic en un enlace (móvil)
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  });
  
  // Cambiar estilo del header al hacer scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Navegación suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Botón de login administrativo
  if (adminLoginBtn) {
    adminLoginBtn.addEventListener('click', function() {
      openLoginModal();
    });
  }
}

// Sección de Cervezas
function initBeersSection() {
  const beersGrid = document.querySelector('.beers-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // Renderizar todas las cervezas inicialmente
  renderBeers(beersData);
  
  // Filtrado de cervezas
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Actualizar botones activos
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      if (filter === 'all') {
        renderBeers(beersData);
      } else {
        const filteredBeers = beersData.filter(beer => beer.category === filter);
        renderBeers(filteredBeers);
      }
    });
  });
  
  function renderBeers(beers) {
    if (!beersGrid) return;
    
    beersGrid.innerHTML = '';
    
    if (beers.length === 0) {
      beersGrid.innerHTML = '<p class="no-beers">No hay cervezas disponibles en esta categoría.</p>';
      return;
    }
    
    beers.forEach(beer => {
      const beerCard = document.createElement('div');
      beerCard.className = 'beer-card fade-in';
      beerCard.innerHTML = `
        <div class="beer-image">
          <img src="${beer.image}" alt="${beer.name}" loading="lazy">
        </div>
        <div class="beer-content">
          <span class="beer-category">${beer.category.toUpperCase()}</span>
          <h3 class="beer-name">${beer.name}</h3>
          <p class="beer-description">${beer.description}</p>
          <div class="beer-details">
            <span class="beer-abv">${beer.abv} ABV</span>
            <span class="beer-price">${beer.price}</span>
          </div>
        </div>
      `;
      
      beersGrid.appendChild(beerCard);
    });
  }
}

// Sección del Menú
function initMenuSection() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  // Cambio de pestañas
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Actualizar botones activos
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Mostrar panel correspondiente
      tabPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `${targetTab}-panel`) {
          panel.classList.add('active');
        }
      });
      
      // Cargar contenido del menú si es necesario
      if (targetTab && document.querySelector(`#${targetTab}-panel .menu-items`).children.length === 0) {
        renderMenuCategory(targetTab);
      }
    });
  });
  
  // Cargar hamburguesas por defecto
  renderMenuCategory('hamburguesas');
  
  function renderMenuCategory(category) {
    const panel = document.querySelector(`#${category}-panel`);
    if (!panel) return;
    
    const menuItemsContainer = panel.querySelector('.menu-items');
    if (!menuItemsContainer) return;
    
    menuItemsContainer.innerHTML = '';
    
    const items = foodData[category] || [];
    
    if (items.length === 0) {
      menuItemsContainer.innerHTML = '<p class="no-items">No hay items disponibles en esta categoría.</p>';
      return;
    }
    
    items.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'menu-item fade-in';
      itemElement.innerHTML = `
        <div class="item-image">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="item-content">
          <div class="item-header">
            <h4 class="item-name">${item.name}</h4>
            <span class="item-price">${item.price}</span>
          </div>
          <p class="item-description">${item.description}</p>
          <div class="item-tags">
            ${item.tags.map(tag => `<span class="item-tag">${tag}</span>`).join('')}
          </div>
        </div>
      `;
      
      menuItemsContainer.appendChild(itemElement);
    });
  }
}

// Sección de Eventos
function initEventsSection() {
  const eventsScroll = document.querySelector('.events-scroll');
  
  // Renderizar eventos
  function renderEvents() {
    if (!eventsScroll) return;
    
    eventsScroll.innerHTML = '';
    
    eventsData.forEach(event => {
      const eventCard = document.createElement('div');
      eventCard.className = 'event-card fade-in';
      eventCard.innerHTML = `
        <div class="event-image">
          <img src="${event.image}" alt="${event.title}" loading="lazy">
        </div>
        <div class="event-content">
          <span class="event-date">${event.date}</span>
          <h3 class="event-title">${event.title}</h3>
          <p class="event-description">${event.description}</p>
          <div class="event-details">
            <div class="event-time">
              <i class="far fa-clock"></i>
              <span>${event.time}</span>
            </div>
            <div class="event-location">
              <i class="fas fa-map-marker-alt"></i>
              <span>${event.location}</span>
            </div>
          </div>
        </div>
      `;
      
      eventsScroll.appendChild(eventCard);
    });
  }
  
  // Inicializar eventos
  renderEvents();
}

// Panel de Administración
function initAdminPanel() {
  const loginModal = document.getElementById('login-modal');
  const adminPanel = document.getElementById('admin-panel');
  const logoutBtn = document.getElementById('logout-btn');
  const adminTabBtns = document.querySelectorAll('.admin-tab-btn');
  const addBeerBtn = document.getElementById('add-beer-btn');
  const addFoodBtn = document.getElementById('add-food-btn');
  const addEventBtn = document.getElementById('add-event-btn');
  const beerModal = document.getElementById('beer-modal');
  const foodModal = document.getElementById('food-modal');
  const eventModal = document.getElementById('event-modal');
  const beerForm = document.getElementById('beer-form');
  const foodForm = document.getElementById('food-form');
  const eventForm = document.getElementById('event-form');
  
  // Cerrar modales
  document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      this.closest('.modal').classList.remove('active');
    });
  });
  
  // Cerrar modales al hacer clic fuera
  window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('active');
    }
  });
  
  // Login form
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Credenciales simples (en un caso real, esto sería más seguro)
    if (username === 'admin' && password === 'admin123') {
      currentUser = { username: 'admin' };
      loginModal.classList.remove('active');
      adminPanel.classList.add('active');
      loadAdminData();
      showNotification('Sesión iniciada correctamente', 'success');
    } else {
      showNotification('Credenciales incorrectas', 'error');
    }
  });
  
  // Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      currentUser = null;
      adminPanel.classList.remove('active');
      showNotification('Sesión cerrada', 'success');
    });
  }
  
  // Tabs del panel de administración
  adminTabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Actualizar botones activos
      adminTabBtns.forEach(tabBtn => tabBtn.classList.remove('active'));
      this.classList.add('active');
      
      // Mostrar panel correspondiente
      document.querySelectorAll('.admin-tab-panel').forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `${targetTab}-panel`) {
          panel.classList.add('active');
        }
      });
    });
  });
  
  // Agregar cerveza
  if (addBeerBtn) {
    addBeerBtn.addEventListener('click', function() {
      editingBeerId = null;
      document.getElementById('beer-modal-title').textContent = 'Agregar Cerveza';
      document.getElementById('beer-form').reset();
      beerModal.classList.add('active');
    });
  }
  
  // Agregar comida
  if (addFoodBtn) {
    addFoodBtn.addEventListener('click', function() {
      editingFoodId = null;
      document.getElementById('food-modal-title').textContent = 'Agregar Comida';
      document.getElementById('food-form').reset();
      foodModal.classList.add('active');
    });
  }
  
  // Agregar evento
  if (addEventBtn) {
    addEventBtn.addEventListener('click', function() {
      editingEventId = null;
      document.getElementById('event-modal-title').textContent = 'Agregar Evento';
      document.getElementById('event-form').reset();
      eventModal.classList.add('active');
    });
  }
  
  // Formulario de cerveza
  if (beerForm) {
    beerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const beerData = {
        id: editingBeerId || Date.now(),
        name: document.getElementById('beer-name').value,
        category: document.getElementById('beer-category').value,
        description: document.getElementById('beer-description').value,
        abv: `${document.getElementById('beer-abv').value}%`,
        price: `$${parseFloat(document.getElementById('beer-price').value).toLocaleString('es-AR')}`,
        image: document.getElementById('beer-image').value || 'https://images.unsplash.com/photo-1572119865084-43d6c93d5d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      };
      
      if (editingBeerId) {
        // Editar cerveza existente
        const index = beersData.findIndex(b => b.id === editingBeerId);
        if (index !== -1) {
          beersData[index] = beerData;
        }
      } else {
        // Agregar nueva cerveza
        beersData.push(beerData);
      }
      
      beerModal.classList.remove('active');
      loadAdminData();
      initBeersSection();
      showNotification(`Cerveza ${editingBeerId ? 'actualizada' : 'agregada'} correctamente`, 'success');
    });
  }
  
  // Formulario de comida
  if (foodForm) {
    foodForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const foodData = {
        id: editingFoodId || Date.now(),
        name: document.getElementById('food-name').value,
        category: document.getElementById('food-category').value,
        description: document.getElementById('food-description').value,
        price: `$${parseFloat(document.getElementById('food-price').value).toLocaleString('es-AR')}`,
        image: document.getElementById('food-image').value || 'https://images.unsplash.com/photo-1572119865084-43d6c93d5d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        tags: document.getElementById('food-tags').value ? document.getElementById('food-tags').value.split(',').map(tag => tag.trim()) : []
      };
      
      if (editingFoodId) {
        // Editar comida existente
        let found = false;
        for (const category in foodData) {
          const index = foodData[category].findIndex(f => f.id === editingFoodId);
          if (index !== -1) {
            // Remover de la categoría anterior
            foodData[category].splice(index, 1);
            found = true;
            break;
          }
        }
        
        // Agregar a la nueva categoría
        if (!foodData[foodData.category]) {
          foodData[foodData.category] = [];
        }
        foodData[foodData.category].push(foodData);
      } else {
        // Agregar nueva comida
        if (!foodData[foodData.category]) {
          foodData[foodData.category] = [];
        }
        foodData[foodData.category].push(foodData);
      }
      
      foodModal.classList.remove('active');
      loadAdminData();
      initMenuSection();
      showNotification(`Comida ${editingFoodId ? 'actualizada' : 'agregada'} correctamente`, 'success');
    });
  }
  
  // Formulario de evento
  if (eventForm) {
    eventForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const eventData = {
        id: editingEventId || Date.now(),
        title: document.getElementById('event-title').value,
        description: document.getElementById('event-description').value,
        date: formatDate(document.getElementById('event-date').value),
        time: document.getElementById('event-time').value,
        location: document.getElementById('event-location').value,
        image: document.getElementById('event-image').value || 'https://images.unsplash.com/photo-1572119865084-43d6c93d5d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      };
      
      if (editingEventId) {
        // Editar evento existente
        const index = eventsData.findIndex(e => e.id === editingEventId);
        if (index !== -1) {
          eventsData[index] = eventData;
        }
      } else {
        // Agregar nuevo evento
        eventsData.push(eventData);
      }
      
      eventModal.classList.remove('active');
      loadAdminData();
      initEventsSection();
      showNotification(`Evento ${editingEventId ? 'actualizado' : 'agregado'} correctamente`, 'success');
    });
  }
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric' });
  }
  
  function loadAdminData() {
    // Cargar cervezas en la tabla
    const beersTableBody = document.getElementById('beers-table-body');
    if (beersTableBody) {
      beersTableBody.innerHTML = '';
      
      beersData.forEach(beer => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${beer.name}</td>
          <td>${beer.category}</td>
          <td>${beer.price}</td>
          <td class="admin-actions">
            <button class="admin-action-btn edit" data-id="${beer.id}">
              <i class="fas fa-edit"></i>
            </button>
            <button class="admin-action-btn delete" data-id="${beer.id}">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        `;
        
        beersTableBody.appendChild(row);
      });
      
      // Agregar event listeners a los botones de editar/eliminar
      document.querySelectorAll('#beers-table-body .admin-action-btn.edit').forEach(btn => {
        btn.addEventListener('click', function() {
          const beerId = parseInt(this.getAttribute('data-id'));
          editBeer(beerId);
        });
      });
      
      document.querySelectorAll('#beers-table-body .admin-action-btn.delete').forEach(btn => {
        btn.addEventListener('click', function() {
          const beerId = parseInt(this.getAttribute('data-id'));
          deleteBeer(beerId);
        });
      });
    }
    
    // Cargar comidas en la tabla
    const foodTableBody = document.getElementById('food-table-body');
    if (foodTableBody) {
      foodTableBody.innerHTML = '';
      
      // Recorrer todas las categorías de comida
      for (const category in foodData) {
        foodData[category].forEach(food => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${food.name}</td>
            <td>${category}</td>
            <td>${food.price}</td>
            <td class="admin-actions">
              <button class="admin-action-btn edit" data-id="${food.id}">
                <i class="fas fa-edit"></i>
              </button>
              <button class="admin-action-btn delete" data-id="${food.id}">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          `;
          
          foodTableBody.appendChild(row);
        });
      }
      
      // Agregar event listeners a los botones de editar/eliminar
      document.querySelectorAll('#food-table-body .admin-action-btn.edit').forEach(btn => {
        btn.addEventListener('click', function() {
          const foodId = parseInt(this.getAttribute('data-id'));
          editFood(foodId);
        });
      });
      
      document.querySelectorAll('#food-table-body .admin-action-btn.delete').forEach(btn => {
        btn.addEventListener('click', function() {
          const foodId = parseInt(this.getAttribute('data-id'));
          deleteFood(foodId);
        });
      });
    }
    
    // Cargar eventos en la tabla
    const eventsTableBody = document.getElementById('events-table-body');
    if (eventsTableBody) {
      eventsTableBody.innerHTML = '';
      
      eventsData.forEach(event => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${event.title}</td>
          <td>${event.date}</td>
          <td>${event.time}</td>
          <td class="admin-actions">
            <button class="admin-action-btn edit" data-id="${event.id}">
              <i class="fas fa-edit"></i>
            </button>
            <button class="admin-action-btn delete" data-id="${event.id}">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        `;
        
        eventsTableBody.appendChild(row);
      });
      
      // Agregar event listeners a los botones de editar/eliminar
      document.querySelectorAll('#events-table-body .admin-action-btn.edit').forEach(btn => {
        btn.addEventListener('click', function() {
          const eventId = parseInt(this.getAttribute('data-id'));
          editEvent(eventId);
        });
      });
      
      document.querySelectorAll('#events-table-body .admin-action-btn.delete').forEach(btn => {
        btn.addEventListener('click', function() {
          const eventId = parseInt(this.getAttribute('data-id'));
          deleteEvent(eventId);
        });
      });
    }
  }
  
  function editBeer(beerId) {
    const beer = beersData.find(b => b.id === beerId);
    if (beer) {
      editingBeerId = beerId;
      document.getElementById('beer-modal-title').textContent = 'Editar Cerveza';
      document.getElementById('beer-id').value = beer.id;
      document.getElementById('beer-name').value = beer.name;
      document.getElementById('beer-category').value = beer.category;
      document.getElementById('beer-description').value = beer.description;
      
      // Extraer el valor numérico del ABV
      const abvValue = beer.abv.replace('%', '');
      document.getElementById('beer-abv').value = parseFloat(abvValue);
      
      // Extraer el valor numérico del precio (eliminar el $ y los puntos)
      const priceValue = beer.price.replace('$', '').replace(/\./g, '');
      document.getElementById('beer-price').value = parseFloat(priceValue);
      
      document.getElementById('beer-image').value = beer.image;
      document.getElementById('beer-modal').classList.add('active');
    }
  }
  
  function deleteBeer(beerId) {
    if (confirm('¿Estás seguro de que quieres eliminar esta cerveza?')) {
      beersData = beersData.filter(b => b.id !== beerId);
      loadAdminData();
      initBeersSection();
      showNotification('Cerveza eliminada correctamente', 'success');
    }
  }
  
  function editFood(foodId) {
    // Buscar la comida en todas las categorías
    let foodItem = null;
    let foodCategory = null;
    
    for (const category in foodData) {
      const found = foodData[category].find(f => f.id === foodId);
      if (found) {
        foodItem = found;
        foodCategory = category;
        break;
      }
    }
    
    if (foodItem) {
      editingFoodId = foodId;
      document.getElementById('food-modal-title').textContent = 'Editar Comida';
      document.getElementById('food-id').value = foodItem.id;
      document.getElementById('food-name').value = foodItem.name;
      document.getElementById('food-category').value = foodCategory;
      document.getElementById('food-description').value = foodItem.description;
      
      // Extraer el valor numérico del precio (eliminar el $ y los puntos)
      const priceValue = foodItem.price.replace('$', '').replace(/\./g, '');
      document.getElementById('food-price').value = parseFloat(priceValue);
      
      document.getElementById('food-image').value = foodItem.image;
      document.getElementById('food-tags').value = foodItem.tags.join(', ');
      document.getElementById('food-modal').classList.add('active');
    }
  }
  
  function deleteFood(foodId) {
    if (confirm('¿Estás seguro de que quieres eliminar esta comida?')) {
      // Buscar y eliminar la comida de todas las categorías
      for (const category in foodData) {
        foodData[category] = foodData[category].filter(f => f.id !== foodId);
      }
      
      loadAdminData();
      initMenuSection();
      showNotification('Comida eliminada correctamente', 'success');
    }
  }
  
  function editEvent(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (event) {
      editingEventId = eventId;
      document.getElementById('event-modal-title').textContent = 'Editar Evento';
      document.getElementById('event-id').value = event.id;
      document.getElementById('event-title').value = event.title;
      document.getElementById('event-description').value = event.description;
      
      // Convertir la fecha al formato YYYY-MM-DD
      const dateParts = event.date.split(' ');
      const months = {
        'ene': '01', 'feb': '02', 'mar': '03', 'abr': '04', 'may': '05', 'jun': '06',
        'jul': '07', 'ago': '08', 'sep': '09', 'oct': '10', 'nov': '11', 'dic': '12'
      };
      const formattedDate = `20${dateParts[2]}-${months[dateParts[1]]}-${dateParts[0].padStart(2, '0')}`;
      
      document.getElementById('event-date').value = formattedDate;
      document.getElementById('event-time').value = event.time;
      document.getElementById('event-location').value = event.location;
      document.getElementById('event-image').value = event.image;
      document.getElementById('event-modal').classList.add('active');
    }
  }
  
  function deleteEvent(eventId) {
    if (confirm('¿Estás seguro de que quieres eliminar este evento?')) {
      eventsData = eventsData.filter(e => e.id !== eventId);
      loadAdminData();
      initEventsSection();
      showNotification('Evento eliminado correctamente', 'success');
    }
  }
}

// Funciones auxiliares
function openLoginModal() {
  document.getElementById('login-modal').classList.add('active');
}

function showNotification(message, type) {
  // Crear elemento de notificación
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <span class="notification-message">${message}</span>
    <button class="notification-close"><i class="fas fa-times"></i></button>
  `;
  
  // Estilos para la notificación
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    gap: 1rem;
    z-index: 10000;
    max-width: 400px;
    animation: slideInRight 0.3s ease;
  `;
  
  // Botón de cerrar
  const closeButton = notification.querySelector('.notification-close');
  closeButton.addEventListener('click', function() {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  });
  
  // Auto-eliminar después de 5 segundos
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }
  }, 5000);
  
  document.body.appendChild(notification);
  
  // Animaciones CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

// Efectos de Scroll
function initScrollEffects() {
  // Revelar elementos al hacer scroll
  const revealElements = document.querySelectorAll('.fade-in');
  
  const revealOnScroll = function() {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Configurar elementos inicialmente
  revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Ejecutar al cargar y al hacer scroll
  window.addEventListener('load', revealOnScroll);
  window.addEventListener('scroll', revealOnScroll);
  
  // Activar enlaces de navegación según la sección visible
  const sections = document.querySelectorAll('section[id]');
  
  const activateNavLink = function() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
      } else {
        document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active');
      }
    });
  };
  
  window.addEventListener('scroll', activateNavLink);
}

// Botón Volver Arriba
function initBackToTop() {
  const backToTopButton = document.getElementById('back-to-top');
  
  if (backToTopButton) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Animaciones Adicionales
function initAnimations() {
  // Efecto de escritura en el título hero
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = function() {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    // Iniciar después de un breve retraso
    setTimeout(typeWriter, 500);
  }
  
  // Contadores animados en estadísticas
  const stats = document.querySelectorAll('.stat-number');
  
  const animateCounters = function() {
    stats.forEach(stat => {
      const target = parseInt(stat.textContent);
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          stat.textContent = target + '+';
          clearInterval(timer);
        } else {
          stat.textContent = Math.floor(current) + '+';
        }
      }, 20);
    });
  };
  
  // Ejecutar cuando la sección about sea visible
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(aboutSection);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(aboutSection);
  }
  
  // Efecto de parallax en el hero
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-background');
    
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
}

// Utilidades adicionales
function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Manejo de errores de imágenes
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjOTk5Ij5JbWFnZW4gbm8gZGlzcG9uaWJsZTwvdGV4dD48L3N2Zz4=';
      this.alt = 'Imagen no disponible';
    });
  });
});

// Exportar funciones para uso global (si es necesario)
window.LikeBeerClub = {
  initNavigation,
  initBeersSection,
  initMenuSection,
  initEventsSection,
  initAdminPanel,
  initScrollEffects,
  initBackToTop,
  initAnimations
};