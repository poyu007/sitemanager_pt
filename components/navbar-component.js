class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    
    this.style.flexShrink = '0';
    this.style.height = '100vh';
    this.attachShadow({ mode: 'open' });
    
    // 創建 link 元素引入 Font Awesome
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    this.shadowRoot.appendChild(link);
    
    this.shadowRoot.innerHTML += `
      <style>
        .navbar {
          background-color: white;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
          width: 256px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .navbar__header {
          height: 4rem;
          display: flex;
          align-items: center;
          padding-left: 1rem;
        }
        .navbar__title {
          font-size: var(--font-size-xl);
          font-weight: 900;
          color: #1f2937;
        }
        .navbar__links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0 1rem;
        }
        .navbar__link {
          border-left-width: 4px;
          border-color: transparent;
          border-style: solid;
          color: #6b7280;
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.15s ease-out;
        }
        .nav-link i {
          margin-right: 0.5rem;
          width: 1rem;
          text-align: center;
          font-size: 1rem;
          transition: all 0.15s ease-out;
        }
        .nav-link i.active-icon {
          display: none;
          opacity: 0;
          transition: opacity 0.15s ease-out;
        }
        .nav-link.active i.default-icon {
          display: none;
          opacity: 0;
        }
        .nav-link.active i.active-icon {
          display: inline;
          opacity: 1;
        }
        .nav-link.active {
          border-left-color: #6366f1;
          color: #111827;
          background-color: #f3f4f6;
          font-weight: 600;
        }
        .nav-link:hover {
          background-color: #f9fafb;
          color: #374151;
        }
      </style>
      <nav class="navbar">
        <div class="navbar__header">
          <span class="navbar__title">Site Manager</span>
        </div>
        <div class="navbar__links">
          <a href="directory.html" class="navbar__link">
            <i class="fas fa-folder navbar__icon--default"></i>
            <i class="fas fa-folder-open navbar__icon--active"></i>
            網站目錄
          </a>
          <a href="articles.html" class="nav-link">
            <i class="fas fa-newspaper default-icon"></i>
            <i class="fas fa-file-alt active-icon"></i>
            文章管理
          </a>
          <div class="nav-submenu">
            <a href="/institute.html" class="nav-link nav-subitem">
              <i class="fas fa-certificate"></i>
              認證院所
            </a>
            <a href="/appo-list.html" class="nav-link nav-subitem">
              <i class="fas fa-calendar-alt"></i>
              預約列表管理
            </a>
            <a href="/testimonials.html" class="nav-link nav-subitem">
              <i class="fas fa-comment-medical"></i>
              見證管理
            </a>
          </div>
          <a href="medialib.html" class="nav-link">
            <i class="fas fa-images default-icon"></i>
            <i class="fas fa-image active-icon"></i>
            媒體庫
          </a>
          <div class="nav-submenu">
            <a href="list.html" class="nav-link nav-subitem">
              <i class="fas fa-list-ul"></i>
              網站總表
            </a>
          </div>
        </div>
      </nav>
    `;
    
    // 設置當前活動鏈接
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = this.shadowRoot.querySelectorAll('.nav-link');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  }
}

customElements.define('navbar-component', NavbarComponent);