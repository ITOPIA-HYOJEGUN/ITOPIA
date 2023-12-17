const nav_menu = document.querySelectorAll('.nav-item');
const user_info = document.getElementById('user-info');
const post_info = document.getElementById('post-info');
const post_category= document.querySelectorAll('.category-item');
const saved_post_window = document.getElementById('saved-post-info');
const talk_post_window = document.getElementById('talk-post-info');
const sales_post_window = document.getElementById('sales-post-info');
const saved_post_select_btn = document.getElementById('saved-post-select-btn');
const talk_post_select_btn = document.getElementById('talk-post-select-btn');
const sales_post_select_btn = document.getElementById('sales-post-select-btn');
// 첫 로딩 시 숨길 요소들 입력
post_info.style.display = 'none';
talk_post_window.style.display = 'none';
sales_post_window.style.display = 'none';
// 모든 마이페이지 하위 요소를 숨기는 함수
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
    saved_post_window.style.display = 'none';
    talk_post_window.style.display = 'none';
    sales_post_window.style.display = 'none';
    for (i = 0; i < post_category.length; i++) {
        post_category[i].classList.remove('active');
    }
}
// 마이페이지 하위메뉴 선택 시, 요소들 보이고 숨기기
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
// 게시글 관리 세부 카테고리 선택
post_category.forEach(function(menu, index) {
    menu.addEventListener('click', function(e) {
        hideAllPost(); // 먼저 모든 요소를 숨깁니다.
        if (index === 0) {
            saved_post_window.style.display = ''; 
            menu.classList.add('active');
        } else if (index === 1) {
            talk_post_window.style.display = ''; 
            menu.classList.add('active');
        }
        else if (index === 2) {
            sales_post_window.style.display = ''; 
            menu.classList.add('active');
        }
    });
});
// ---------------------- 저장한 게시글 선택 버튼 이벤트
let saved_posts = document.querySelectorAll('#saved-post-info .post-card');
saved_post_select_btn.addEventListener('click', function(e) {
    let checkboxes = document.querySelectorAll('#saved-post-info .post-checkbox');
    let more_menu_btns = document.querySelectorAll('#saved-post-info .more-menu-btn');
    let sort_btn = document.querySelector('#saved-post-info #post-sort-dropdown-btn');
    let select_option_btns = document.querySelectorAll('#saved-post-info .select-option-btn');

    // 선택 버튼이 눌린 상태에서 다시 누르면,
    if (saved_post_select_btn.classList.contains("pushed")) {
        saved_post_select_btn.classList.remove("pushed");
        checkboxes.forEach(function(checkbox) {
            checkbox.style.display = 'none';
        })
        more_menu_btns.forEach(function(btn) {
            btn.style.display = '';
        })
        saved_posts.forEach(function(post) {
            post.style.cursor = 'default'
        })
        select_option_btns.forEach(function(option_btn) {
            option_btn.style.display = 'none';
        })
        sort_btn.style.display = '';
    }
    else {
        saved_post_select_btn.classList.add('pushed');
        checkboxes.forEach(function(checkbox) {
            checkbox.style.display = '';
        })
        more_menu_btns.forEach(function(btn) {
            btn.style.display = 'none';
        })
        saved_posts.forEach(function(post) {
            post.style.cursor = 'pointer'
        })
        select_option_btns.forEach(function(option_btn) {
            option_btn.style.display = '';
        })
        sort_btn.style.display = 'none';
    }
})
// 저장한 게시글 선택 모드일 경우, 어딜 클릭해도 선택되게 변경
saved_posts.forEach(function(post) {
    post.addEventListener('click', function(e) {
        if (saved_post_select_btn.classList.contains("pushed")) {
            let single_checkbox = post.querySelector('.post-checkbox .form-check-input');
            single_checkbox.checked = !single_checkbox.checked;

        }
    })

    let single_checkbox = post.querySelector('.post-checkbox .form-check-input');
    single_checkbox.addEventListener('click', function(e) {
        e.stopPropagation();
    })
})
// 전체 선택 버튼 누르면 게시글 모두 선택되게 함
let saved_post_select_all_btn = document.querySelector('#saved-post-info #select-all-btn');
saved_post_select_all_btn.addEventListener("click", function(e) {
    let checkbox_all = document.querySelectorAll('#saved-post-info .form-check-input');
    // 모든 체크박스가 체크되어 있는지 확인합니다.
    let allChecked = Array.from(checkbox_all).every(checkbox => checkbox.checked);
    checkbox_all.forEach(function(single_box) {
        // 모든 체크박스가 체크되어 있다면 체크를 해제하고, 그렇지 않다면 체크합니다.
        single_box.checked = !allChecked;
    })
})
// 정렬 버튼 아이템 클릭 시 변경
let saved_post_sort_by_btn = document.querySelector('#saved-post-info #post-sort-dropdown-btn');
let saved_post_sort_by_items = document.querySelectorAll('#saved-post-info .sort-by-item')
// ---------------------- I*TALK 게시글 선택 버튼 이벤트
let talk_posts = document.querySelectorAll('#talk-post-info .post-card');
talk_post_select_btn.addEventListener('click', function(e) {
    let checkboxes = document.querySelectorAll('#talk-post-info .post-checkbox');
    let more_menu_btns = document.querySelectorAll('#talk-post-info .more-menu-btn');
    let sort_btn = document.querySelector('#talk-post-info #post-sort-dropdown-btn');
    let select_option_btns = document.querySelectorAll('#talk-post-info .select-option-btn');

    // 선택 버튼이 눌린 상태에서 다시 누르면,
    if (talk_post_select_btn.classList.contains("pushed")) {
        talk_post_select_btn.classList.remove("pushed");
        checkboxes.forEach(function(checkbox) {
            checkbox.style.display = 'none';
        })
        more_menu_btns.forEach(function(btn) {
            btn.style.display = '';
        })
        talk_posts.forEach(function(post) {
            post.style.cursor = 'default'
        })
        select_option_btns.forEach(function(option_btn) {
            option_btn.style.display = 'none';
        })
        sort_btn.style.display = '';
    }
    else {
        talk_post_select_btn.classList.add('pushed');
        checkboxes.forEach(function(checkbox) {
            checkbox.style.display = '';
        })
        more_menu_btns.forEach(function(btn) {
            btn.style.display = 'none';
        })
        talk_posts.forEach(function(post) {
            post.style.cursor = 'pointer'
        })
        select_option_btns.forEach(function(option_btn) {
            option_btn.style.display = '';
        })
        sort_btn.style.display = 'none';
    }
})
// I*TALK 게시글 선택 모드일 경우, 어딜 클릭해도 선택되게 변경
talk_posts.forEach(function(post) {
    post.addEventListener('click', function(e) {
        if (talk_post_select_btn.classList.contains("pushed")) {
            let single_checkbox = post.querySelector('.post-checkbox .form-check-input');
            single_checkbox.checked = !single_checkbox.checked;

        }
    })
    let single_checkbox = post.querySelector('.post-checkbox .form-check-input');
    single_checkbox.addEventListener('click', function(e) {
        e.stopPropagation();
    })
})
// 전체 선택 버튼 누르면 게시글 모두 선택되게 함
let talk_post_select_all_btn = document.querySelector('#talk-post-info #select-all-btn');
talk_post_select_all_btn.addEventListener("click", function(e) {
    let checkbox_all = document.querySelectorAll('#talk-post-info .form-check-input');
    // 모든 체크박스가 체크되어 있는지 확인합니다.
    let allChecked = Array.from(checkbox_all).every(checkbox => checkbox.checked);
    checkbox_all.forEach(function(single_box) {
        // 모든 체크박스가 체크되어 있다면 체크를 해제하고, 그렇지 않다면 체크합니다.
        single_box.checked = !allChecked;
    })
})

// ----------------- 거래게시글 선택 버튼 이벤트
let sales_posts = document.querySelectorAll('#sales-post-info .post-card');
sales_post_select_btn.addEventListener('click', function(e) {
    let checkboxes = document.querySelectorAll('#sales-post-info .post-checkbox');
    let more_menu_btns = document.querySelectorAll('#sales-post-info .more-menu-btn');
    let sort_btn = document.querySelector('#sales-post-info #post-sort-dropdown-btn');
    let select_option_btns = document.querySelectorAll('#sales-post-info .select-option-btn');

    // 선택 버튼이 눌린 상태에서 다시 누르면,
    if (sales_post_select_btn.classList.contains("pushed")) {
        sales_post_select_btn.classList.remove("pushed");
        checkboxes.forEach(function(checkbox) {
            checkbox.style.display = 'none';
        })
        more_menu_btns.forEach(function(btn) {
            btn.style.display = '';
        })
        sales_posts.forEach(function(post) {
            post.style.cursor = 'default'
        })
        select_option_btns.forEach(function(option_btn) {
            option_btn.style.display = 'none';
        })
        sort_btn.style.display = '';
    }
    else {
        sales_post_select_btn.classList.add('pushed');
        checkboxes.forEach(function(checkbox) {
            checkbox.style.display = '';
        })
        more_menu_btns.forEach(function(btn) {
            btn.style.display = 'none';
        })
        sales_posts.forEach(function(post) {
            post.style.cursor = 'pointer'
        })
        select_option_btns.forEach(function(option_btn) {
            option_btn.style.display = '';
        })
        sort_btn.style.display = 'none';
    }
})
// 거래게시글 선택 모드일 경우, 어딜 클릭해도 선택되게 변경
sales_posts.forEach(function(post) {
    post.addEventListener('click', function(e) {
        if (sales_post_select_btn.classList.contains("pushed")) {
            let single_checkbox = post.querySelector('.post-checkbox .form-check-input');
            single_checkbox.checked = !single_checkbox.checked;

        }
    })
    let single_checkbox = post.querySelector('.post-checkbox .form-check-input');
    single_checkbox.addEventListener('click', function(e) {
        e.stopPropagation();
    })
})
// 전체 선택 버튼 누르면 게시글 모두 선택되게 함
let sales_post_select_all_btn = document.querySelector('#sales-post-info #select-all-btn');
sales_post_select_all_btn.addEventListener("click", function(e) {
    let checkbox_all = document.querySelectorAll('#sales-post-info .form-check-input');
    // 모든 체크박스가 체크되어 있는지 확인합니다.
    let allChecked = Array.from(checkbox_all).every(checkbox => checkbox.checked);
    checkbox_all.forEach(function(single_box) {
        // 모든 체크박스가 체크되어 있다면 체크를 해제하고, 그렇지 않다면 체크합니다.
        single_box.checked = !allChecked;
    })
})
