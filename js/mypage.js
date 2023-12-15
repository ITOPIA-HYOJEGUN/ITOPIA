const nav_menu = document.querySelectorAll('.nav-item');
const user_info = document.getElementById('user-info');
const post_info = document.getElementById('post-info');
// 모든 요소를 숨기는 함수
function hideAll() {
    user_info.style.display = 'none';
    post_info.style.display = 'none';
    
    // 나머지 요소들도 이런 식으로 추가해주세요.
    for (i = 0; i < nav_menu.length; i++) {
        nav_menu[i].classList.remove('selected');
    }
}

// 게시글 관리 모든 요소 숨김
function hideAllPost() {
    saved_post_window = document.getElementById('saved-post-info');
    talk_post_window = document.getElementById('talk-post-window');
    sales_post_window = document.getElementById('sales-post-window');
    saved_post_window.style.display = 'none';
    talk_post_window.style.display = 'none';
    sales_post_window.style.display = 'none';
}

nav_menu.forEach(function(menu, index) {
    menu.addEventListener('click', function(e) {
        hideAll(); // 먼저 모든 요소를 숨깁니다.
        if (index === 0) {
            user_info.style.display = ''; // 0번 메뉴 클릭 시 user_info 요소만 보입니다.
            menu.classList.add('selected');
        } else if (index === 1) {
            post_info.style.display = ''; // 1번 메뉴 클릭 시 post_info 요소만 보입니다.
            menu.classList.add('selected');
        }
        // 나머지 요소들도 이런 식으로 추가해주세요.
    });
});