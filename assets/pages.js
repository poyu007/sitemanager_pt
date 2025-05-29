// 目錄展開/縮起功能
document.addEventListener('DOMContentLoaded', function() {
    const parents = document.querySelectorAll('[data-parent]');
    
    parents.forEach(parent => {
        if (parent.querySelector('.p_directory-list__parent')) {
            parent.addEventListener('click', function() {
                const parentId = this.dataset.parent;
                const toggle = this.querySelector('.p_directory-list__toggle');
                const children = document.querySelectorAll(`.p_directory-list__child[data-parent="${parentId}"]`);
                
                toggle.classList.toggle('expanded');
                children.forEach(child => {
                    child.classList.toggle('expanded');
                });
            });
        }
    });

    // 新增目錄按鈕點擊事件
    const addButton = document.querySelector('.main-panel-action__button');
    addButton.addEventListener('click', function() {
        showDirectoryModal();
    });
});

// 顯示新增目錄彈窗
function showDirectoryModal() {
    const modal = document.createElement('div');
    modal.className = 'p_directory-modal';
    modal.innerHTML = `
        <div class="p_directory-modal__content">
            <div class="p_directory-modal__header">
                <h3>新增目錄</h3>
                <button class="p_directory-modal__close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="p_directory-modal__body">
                <div class="p_directory-modal__form-group">
                    <label>目錄類別</label>
                    <select class="p_directory-modal__select" id="categorySelect">
                        <option value="" disabled selected>選擇目錄類別</option>
                        <option value="single">單頁</option>
                        <option value="category">分類文章</option>
                        <option value="github">github 模組</option>
                        <option value="form">表單</option>
                    </select>
                </div>
                <div class="p_directory-modal__form-group">
                    <label>子類別</label>
                    <select class="p_directory-modal__select" id="subCategorySelect" disabled>
                        <option value="" disabled selected>選擇子類別</option>
                    </select>
                </div>
            </div>
            <div class="p_directory-modal__footer">
                <button class="p_directory-modal__button p_directory-modal__button--cancel">取消</button>
                <button class="p_directory-modal__button p_directory-modal__button--confirm">確認</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // 綁定事件
    const categorySelect = modal.querySelector('#categorySelect');
    const subCategorySelect = modal.querySelector('#subCategorySelect');
    const closeButton = modal.querySelector('.p_directory-modal__close');
    const cancelButton = modal.querySelector('.p_directory-modal__button--cancel');
    const confirmButton = modal.querySelector('.p_directory-modal__button--confirm');

    const subCategories = {
        single: ['關於我們', '聯絡我們', '服務項目'],
        category: ['最新消息', '產品展示', '成功案例'],
        github: ['元件庫', 'API文檔', '開源專案'],
        form: ['聯絡表單', '預約表單', '回饋表單']
    };

    categorySelect.addEventListener('change', function() {
        const selected = this.value;
        subCategorySelect.innerHTML = '<option value="" disabled selected>選擇子類別</option>';
        subCategorySelect.disabled = !selected;
        
        if (selected && subCategories[selected]) {
            subCategories[selected].forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                subCategorySelect.appendChild(option);
            });
        }
    });

    const closeModal = () => {
        document.body.removeChild(modal);
    };

    closeButton.addEventListener('click', closeModal);
    cancelButton.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
}
// 目錄類別選單聯動
document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.querySelectorAll('.p_directory-select')[0];
    const subCategorySelect = document.querySelectorAll('.p_directory-select')[1];
    
    const subCategories = {
        single: ['關於我們', '聯絡我們', '服務項目'],
        category: ['最新消息', '產品展示', '成功案例'],
        github: ['元件庫', 'API文檔', '開源專案'],
        form: ['聯絡表單', '預約表單', '回饋表單']
    };
    
    categorySelect.addEventListener('change', function() {
        const selected = this.value;
        subCategorySelect.innerHTML = '<option value="" disabled selected>選擇子類別</option>';
        
        if (selected && subCategories[selected]) {
            subCategories[selected].forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                subCategorySelect.appendChild(option);
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.p_tab-btn');
    const contentAreas = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有active類
            tabs.forEach(t => t.classList.remove('active'));
            contentAreas.forEach(content => content.classList.add('hidden'));

            // 為當前點擊的tab添加active類
            this.classList.add('active');

            // 獲取當前選中的tab類型
            const tabType = this.getAttribute('data-tab');

            // 顯示對應的內容區域
            document.querySelector(`#${tabType}`).classList.remove('hidden');

            // 添加點擊動畫效果
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
});
