// เลื่อนขึ้นด้านบน
document.getElementById('backToTop').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
