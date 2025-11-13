// 显示欢迎消息
console.log('🚀 网站加载成功！');

// 更新当前时间函数
function updateCurrentTime() {
    const now = new Date();
    // 格式化为您想要的时间字符串
    const timeString = now.toLocaleString('zh-CN', { 
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
    }) + ' 星期' + '日一二三四五六'.charAt(now.getDay());

    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// 当页面加载完成后开始更新时间
document.addEventListener('DOMContentLoaded', function() {
    updateCurrentTime(); // 立即执行一次
    setInterval(updateCurrentTime, 1000); // 每秒更新一次
});

// 交互功能
function showMessage() {
    const messageElement = document.getElementById('demo-message');
    const messages = [
        '🎉 恭喜！JavaScript功能正常工作！',
        '✨ 网站交互功能测试成功！',
        '🚀 您的网站系统运行正常！',
        '💫 前端功能一切就绪！'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage + ' - ' + new Date().toLocaleString();
    
    // 添加动画效果
    messageElement.style.opacity = '0';
    setTimeout(() => {
        messageElement.style.transition = 'opacity 0.5s';
        messageElement.style.opacity = '1';
    }, 100);
}

// 平滑滚动导航
document.addEventListener('DOMContentLoaded', function() {
    // 初始化时间显示
    updateCurrentTime();
    
    // 每秒更新时间
    setInterval(updateCurrentTime, 1000);
    
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 显示加载完成时间
    console.log('页面加载完成时间:', new Date().toLocaleString());
});
