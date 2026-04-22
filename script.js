// 任务完成提示框
function showModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
    
    // 3秒后自动关闭
    setTimeout(() => {
        closeModal();
    }, 3000);
}

function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
}

// 视频播放控制
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.banner-video video');
    if (video) {
        // 尝试播放视频
        video.play().catch(error => {
            console.log('视频播放失败:', error);
            // 可以在这里添加备用方案
        });
        
        // 监听视频加载事件
        video.addEventListener('loadeddata', function() {
            console.log('视频加载成功');
        });
        
        // 监听视频错误事件
        video.addEventListener('error', function(e) {
            console.log('视频错误:', e);
        });
    }
});

// 搜索功能
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`搜索: ${searchTerm}`);
            // 这里可以添加实际的搜索逻辑
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`搜索: ${searchTerm}`);
                // 这里可以添加实际的搜索逻辑
            }
        }
    });
    
    // 任务按钮点击事件
    const taskBtns = document.querySelectorAll('.task-btn:not(.completed)');
    taskBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showModal();
            // 这里可以添加实际的任务完成逻辑
        });
    });
    
    // 导航菜单点击事件
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            // 移除所有活动状态
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            // 添加当前活动状态
            this.classList.add('active');
        });
    });
    
    // 滚动动画
    function handleScroll() {
        const elements = document.querySelectorAll('.feature-card');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    // 初始检查
    handleScroll();
    
    // 响应式布局调整
    function handleResize() {
        const windowWidth = window.innerWidth;
        const bookScroll = document.querySelector('.book-scroll');
        
        if (windowWidth <= 768) {
            bookScroll.style.overflowX = 'auto';
        } else {
            bookScroll.style.overflowX = 'visible';
        }
    }
    
    window.addEventListener('resize', handleResize);
    // 初始检查
    handleResize();
});

// 动态效果
function animateElements() {
    // Banner动画
    const bannerImage = document.querySelector('.banner-image img');
    if (bannerImage) {
        bannerImage.style.animation = 'float 3s ease-in-out infinite';
    }
    
    // 进度条动画
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(progress => {
        const width = progress.style.width;
        progress.style.width = '0%';
        setTimeout(() => {
            progress.style.width = width;
        }, 500);
    });
}

// 页面加载完成后执行动画
document.addEventListener('DOMContentLoaded', animateElements);