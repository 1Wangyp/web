// 返回上一级
function goBack() {
    if (history.length > 1) {
        history.back();
    } else {
        window.location.href = 'index.html';
    }
}

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
    
    if (searchInput && searchBtn) {
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
    }
    
    // 任务按钮点击事件
    const taskBtns = document.querySelectorAll('.task-btn:not(.completed)');
    taskBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showModal();
            // 这里可以添加实际的任务完成逻辑
        });
    });
    
    // 导航菜单点击事件
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // 移除所有活动状态
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            // 添加当前活动状态
            this.classList.add('active');
        });
    });
    
    // 功能模块点击事件
    const featureLinks = document.querySelectorAll('.feature-link');
    featureLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const featureName = this.closest('.feature-card').querySelector('h3').textContent;
            // 跳转到功能详情页面
            window.location.href = `feature.html?name=${encodeURIComponent(featureName)}`;
        });
    });
    
    // 图书卡片点击事件
    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach(item => {
        item.addEventListener('click', function() {
            const bookName = this.querySelector('h4').textContent;
            // 跳转到图书详情页面
            window.location.href = `book.html?name=${encodeURIComponent(bookName)}`;
        });
    });
    
    // 底部导航点击事件
    const footerLinks = document.querySelectorAll('.footer-nav a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent;
            // 跳转到相应页面
            let page = '';
            switch(linkText) {
                case '趣味启蒙':
                case '互动绘本':
                case '儿歌动画':
                case '家长中心':
                    page = 'product.html';
                    break;
                case '公司简介':
                case '团队介绍':
                case '新闻动态':
                case '加入我们':
                    page = 'about.html';
                    break;
                default:
                    page = 'index.html';
            }
            window.location.href = page;
        });
    });
    
    // 社交媒体图标点击事件
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const socialPlatform = this.querySelector('i').classList[1].replace('fa-', '');
            // 跳转到社交媒体页面
            window.open(`https://${socialPlatform}.com`, '_blank');
        });
    });
    
    // 登录/注册按钮点击事件
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const btnText = this.textContent;
            // 跳转到登录/注册页面
            window.location.href = btnText === '登录' ? 'login.html' : 'register.html';
        });
    });
    
    // Banner按钮点击事件
    const bannerBtns = document.querySelectorAll('.banner-btn');
    bannerBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const btnText = this.textContent;
            // 跳转到相应页面
            window.location.href = btnText === '了解产品' ? 'product.html' : 'trial.html';
        });
    });
    
    // 滚动动画
    function handleScroll() {
        const elements = document.querySelectorAll('.feature-card, .advantage-item, .book-item');
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
        
        if (bookScroll) {
            if (windowWidth <= 768) {
                bookScroll.style.overflowX = 'auto';
            } else {
                bookScroll.style.overflowX = 'visible';
            }
        }
    }
    
    window.addEventListener('resize', handleResize);
    // 初始检查
    handleResize();
    
    // 产品优势悬停效果
    const advantageItems = document.querySelectorAll('.advantage-item');
    advantageItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// 动态效果
function animateElements() {
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