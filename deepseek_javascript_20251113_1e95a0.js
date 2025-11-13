// 显示部署时间
document.getElementById('deploy-time').textContent = new Date().toLocaleString();

// 交互功能
function changeColor() {
    const button = document.querySelector('button');
    button.classList.add('color-change');
    
    setTimeout(() => {
        button.classList.remove('color-change');
    }, 1000);
    
    // 显示成功消息
    alert('🎊 交互功能正常工作！');
}

// 页面加载完成后的操作
window.addEventListener('load', function() {
    console.log('🚀 网站已成功加载');
});