const nav_menu = document.querySelectorAll('.menu .nav-item');
const user_info = document.getElementById('user-info');
const post_info = document.getElementById('post-info');
const comment_info = document.getElementById('comment-info');
const noti_info = document.getElementById('noti-info');
const blocked_info = document.getElementById('blocked-info');
const point_info = document.getElementById('point-info');
const favorite_info = document.getElementById('favorite-info');
const post_category= document.querySelectorAll('.category-item');
const saved_post_window = document.getElementById('saved-post-info');
const talk_post_window = document.getElementById('talk-post-info');
const sales_post_window = document.getElementById('sales-post-info');
const saved_post_select_btn = document.getElementById('saved-post-select-btn');
const talk_post_select_btn = document.getElementById('talk-post-select-btn');
const sales_post_select_btn = document.getElementById('sales-post-select-btn');
const comment_select_btn = document.getElementById('comment-select-btn');

// 첫 로딩 시 숨길 요소들 입력
post_info.style.display = 'none';
talk_post_window.style.display = 'none';
sales_post_window.style.display = 'none';
comment_info.style.display = 'none';
noti_info.style.display = 'none';
blocked_info.style.display = 'none';
point_info.style.display = 'none';
favorite_info.style.display = 'none';
// ---------------- 회원정보 -----------------
const icons_sortby_btn = document.getElementById('icons-search-dropdown-btn');
const icons_sortby_dropdown = document.querySelectorAll('#icons-dropdown-menu .sortby-item');
const icons_unique = document.querySelector('.icons-unique');
const icons_super_rare = document.querySelector('.icons-super-rare');
const icons_rare = document.querySelector('.icons-rare');
const icons_uncommon = document.querySelector('.icons-uncommon');
const icons_common = document.querySelector('.icons-common');

icons_sortby_dropdown.forEach(function(item) {
    item.addEventListener('click', function(e) {
        icons_sortby_btn.innerText = e.target.innerText;

        if (icons_sortby_btn.innerText == '전체') {
            icons_unique.style.display = '';
            icons_super_rare.style.display = '';
            icons_rare.style.display = '';
            icons_uncommon.style.display = '';
            icons_common.style.display = '';
        }
        else if (icons_sortby_btn.innerText == '매우 희귀') {
            icons_unique.style.display = '';
            icons_super_rare.style.display = 'none';
            icons_rare.style.display = 'none';
            icons_uncommon.style.display = 'none';
            icons_common.style.display = 'none';
        }
    })
});

// 모든 마이페이지 하위 요소를 숨기는 함수
function hideAll() {
    user_info.style.display = 'none';
    post_info.style.display = 'none';
    comment_info.style.display = 'none';
    noti_info.style.display = 'none';
    blocked_info.style.display = 'none';
    point_info.style.display = 'none';
    favorite_info.style.display = 'none';
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
        } else if (index === 2) {
            comment_info.style.display = ''; // 2번 메뉴 클릭 시 comment_info 요소만 보입니다.
            menu.classList.add('selected');
        } else if (index === 3) {
            noti_info.style.display = ''; // 3번 메뉴 클릭 시 noti_info 요소만 보입니다.
            menu.classList.add('selected');
        } else if (index === 4) {
            blocked_info.style.display = ''; // 4번 메뉴 클릭 시 blocked_info 요소만 보입니다.
            menu.classList.add('selected');
        } else if (index === 5) {
            point_info.style.display = ''; // 5번 메뉴 클릭 시 point_info 요소만 보입니다.
            menu.classList.add('selected');
        } else if (index === 6) {
            favorite_info.style.display = ''; // 6번 메뉴 클릭 시 point_info 요소만 보입니다.
            menu.classList.add('selected');
        }
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
    let sort_btn = document.querySelector('#saved-sortby-dropdown-btn');
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
    });

    let single_checkbox = post.querySelector('.post-checkbox .form-check-input');
    single_checkbox.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
// 전체 선택 버튼 누르면 게시글 모두 선택되게 함
let saved_post_select_all_btn = document.querySelector('#saved-post-info #select-all-btn');
saved_post_select_all_btn.addEventListener("click", function(e) {
    let checkbox_all = document.querySelectorAll('#saved-post-info .form-check-input');
    // 모든 체크박스가 체크되어 있는지 확인합니다.
    let allChecked = Array.from(checkbox_all).every(checkbox => checkbox.checked);
    checkbox_all.forEach(function(single_box) {
        // 모든 체크박스가 체크되어 있다면 체크를 해제하고, 그렇지 않다면 체크합니다.
        single_box.checked = !allChecked;
    });
});

// ---------------------- I*TALK 게시글 선택 버튼 이벤트
let talk_posts = document.querySelectorAll('#talk-post-info .post-card');
talk_post_select_btn.addEventListener('click', function(e) {
    let checkboxes = document.querySelectorAll('#talk-post-info .post-checkbox');
    let more_menu_btns = document.querySelectorAll('#talk-post-info .more-menu-btn');
    let sort_btn = document.querySelector('#talk-sortby-dropdown-btn');
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
    let sort_btn = document.querySelector('#sales-sortby-dropdown-btn');
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
// 검색창 및 상단 카테고리 선택 기능
const saved_post_search_btn = document.getElementById('saved-post-search-dropdown-btn');
const talk_post_search_btn = document.getElementById('talk-post-search-dropdown-btn');
const sales_post_search_btn = document.getElementById('sales-post-search-dropdown-btn');
const saved_post_search_dropdown = document.querySelectorAll('#saved-search-dropdown-menu .sortby-item');
const talk_post_search_dropdown = document.querySelectorAll('#talk-search-dropdown-menu .sortby-item');
const sales_post_search_dropdown = document.querySelectorAll('#sales-search-dropdown-menu .sortby-item');

const saved_sortby_btn = document.getElementById('saved-sortby-dropdown-btn');
const talk_sortby_btn = document.getElementById('talk-sortby-dropdown-btn');
const sales_sortby_btn = document.getElementById('sales-sortby-dropdown-btn');
const saved_sortby_dropdown = document.querySelectorAll('#saved-sortby-dropdown-menu .sortby-item');
const talk_sortby_dropdown = document.querySelectorAll('#talk-sortby-dropdown-menu .sortby-item');
const sales_sortby_dropdown = document.querySelectorAll('#sales-sortby-dropdown-menu .sortby-item');

saved_post_search_dropdown.forEach(function(item) {
    item.addEventListener('click', function(e) {
        saved_post_search_btn.innerText = e.target.innerText;
    })
});
talk_post_search_dropdown.forEach(function(item) {
    item.addEventListener('click', function(e) {
        talk_post_search_btn.innerText = e.target.innerText;
    })
});
sales_post_search_dropdown.forEach(function(item) {
    item.addEventListener('click', function(e) {
        sales_post_search_btn.innerText = e.target.innerText;
    })
});

saved_sortby_dropdown.forEach(function(item) {
    item.addEventListener('click', function(e) {
        saved_sortby_btn.innerText = e.target.innerText;
    })
});
talk_sortby_dropdown.forEach(function(item) {
    item.addEventListener('click', function(e) {
        talk_sortby_btn.innerText = e.target.innerText;
    })
});
sales_sortby_dropdown.forEach(function(item) {
    item.addEventListener('click', function(e) {
        sales_sortby_btn.innerText = e.target.innerText;
    })
});

// 달력 버튼 모달 내부 코드
const saved_post_period_check = document.querySelector('#saved-post-period-checkbox');
const talk_post_period_check = document.querySelector('#talk-post-period-checkbox');
const sales_post_period_check = document.querySelector('#sales-post-period-checkbox');
const saved_post_period_from = document.querySelector('#saved-post-info .period-from');
const saved_post_period_to = document.querySelector('#saved-post-info .period-to');
const talk_post_period_from = document.querySelector('#talk-post-info .period-from');
const talk_post_period_to = document.querySelector('#talk-post-info .period-to');
const sales_post_period_from = document.querySelector('#sales-post-info .period-from');
const sales_post_period_to = document.querySelector('#sales-post-info .period-to');
const saved_post_period_check_label = document.querySelector('#saved-post-info .modal-body .form-check');
const talk_post_period_check_label = document.querySelector('#talk-post-info .modal-body .form-check');
const sales_post_period_check_label = document.querySelector('#sales-post-info .modal-body .form-check');

saved_post_period_check_label.addEventListener('click', function(e) {
    let saved_date_btn = document.querySelector('#saved-post-info .calendar-btn');
    if (e.target !== saved_post_period_check_label) {
            if (saved_post_period_check.checked == false) {
            saved_post_period_from.disabled = false;
            saved_post_period_to.disabled = false;
            now = new Date();
            year = now.getFullYear();
            month = now.getMonth() + 1; // 자바스크립트 월 0부터 시작함.
            saved_post_period_from.value = year + '-' + month;
            saved_post_period_to.value = year + '-' + month;
            saved_date_btn.setAttribute('style', 'background-color: #245c9c');
        }
        else {
            saved_post_period_from.value = '';
            saved_post_period_to.value = '';
            saved_post_period_from.disabled = true;
            saved_post_period_to.disabled = true;
            saved_date_btn.setAttribute('style', 'background-color: #313131');
        }
        return;
    }
    if (saved_post_period_check.checked == true) {
        saved_post_period_check.checked = false;
        saved_post_period_from.disabled = false;
        saved_post_period_to.disabled = false;
        now = new Date();
        year = now.getFullYear();
        month = now.getMonth() + 1; // 자바스크립트 월 0부터 시작함.
        saved_post_period_from.value = year + '-' + month;
        saved_post_period_to.value = year + '-' + month;
        saved_date_btn.setAttribute('style', 'background-color: #245c9c');
    }
    else {
        saved_post_period_check.checked = true;
        saved_post_period_from.value = '';
        saved_post_period_to.value = '';
        saved_post_period_from.disabled = true;
        saved_post_period_to.disabled = true;
        saved_date_btn.setAttribute('style', 'background-color: #313131');
    }
});
saved_post_period_from.addEventListener('change', function() {
    if (saved_post_period_from.value > saved_post_period_to.value) {
        alert('시작 날짜는 끝 날짜보다 클 수 없습니다.');
        saved_post_period_from.value = saved_post_period_to.value;
    }
});
saved_post_period_to.addEventListener('change', function() {
    if (saved_post_period_from.value > saved_post_period_to.value) {
        alert('끝 날짜는 시작 날짜보다 작을 수 없습니다.');
        saved_post_period_to.value = saved_post_period_from.value;
    }
});

talk_post_period_check_label.addEventListener('click', function(e) {
    let talk_date_btn = document.querySelector('#talk-post-info .calendar-btn');
    if (e.target !== talk_post_period_check_label) {
            if (talk_post_period_check.checked == false) {
            talk_post_period_from.disabled = false;
            talk_post_period_to.disabled = false;
            now = new Date();
            year = now.getFullYear();
            month = now.getMonth() + 1; // 자바스크립트 월 0부터 시작함.
            talk_post_period_from.value = year + '-' + month;
            talk_post_period_to.value = year + '-' + month;
            talk_date_btn.setAttribute('style', 'background-color: #245c9c');
        }
        else {
            talk_post_period_from.value = '';
            talk_post_period_to.value = '';
            talk_post_period_from.disabled = true;
            talk_post_period_to.disabled = true;
            talk_date_btn.setAttribute('style', 'background-color: #313131');
        }
        return;
    }
    if (talk_post_period_check.checked == true) {
        talk_post_period_check.checked = false;
        talk_post_period_from.disabled = false;
        talk_post_period_to.disabled = false;
        now = new Date();
        year = now.getFullYear();
        month = now.getMonth() + 1; // 자바스크립트 월 0부터 시작함.
        talk_post_period_from.value = year + '-' + month;
        talk_post_period_to.value = year + '-' + month;
        talk_date_btn.setAttribute('style', 'background-color: #245c9c');
    }
    else {
        talk_post_period_check.checked = true;
        talk_post_period_from.value = '';
        talk_post_period_to.value = '';
        talk_post_period_from.disabled = true;
        talk_post_period_to.disabled = true;
        talk_date_btn.setAttribute('style', 'background-color: #313131');
    }
});
talk_post_period_from.addEventListener('change', function() {
    if (talk_post_period_from.value > talk_post_period_to.value) {
        alert('시작 날짜는 끝 날짜보다 클 수 없습니다.');
        talk_post_period_from.value = talk_post_period_to.value;
    }
});
talk_post_period_to.addEventListener('change', function() {
    if (talk_post_period_from.value > talk_post_period_to.value) {
        alert('끝 날짜는 시작 날짜보다 작을 수 없습니다.');
        talk_post_period_to.value = talk_post_period_from.value;
    }
});

sales_post_period_check_label.addEventListener('click', function(e) {
    let sales_date_btn = document.querySelector('#sales-post-info .calendar-btn');
    if (e.target !== sales_post_period_check_label) {
            if (sales_post_period_check.checked == false) {
            sales_post_period_from.disabled = false;
            sales_post_period_to.disabled = false;
            now = new Date();
            year = now.getFullYear();
            month = now.getMonth() + 1; // 자바스크립트 월 0부터 시작함.
            sales_post_period_from.value = year + '-' + month;
            sales_post_period_to.value = year + '-' + month;
            sales_date_btn.setAttribute('style', 'background-color: #245c9c');
        }
        else {
            sales_post_period_from.value = '';
            sales_post_period_to.value = '';
            sales_post_period_from.disabled = true;
            sales_post_period_to.disabled = true;
            sales_date_btn.setAttribute('style', 'background-color: #313131');
        }
        return;
    }
    if (sales_post_period_check.checked == true) {
        sales_post_period_check.checked = false;
        sales_post_period_from.disabled = false;
        sales_post_period_to.disabled = false;
        now = new Date();
        year = now.getFullYear();
        month = now.getMonth() + 1; // 자바스크립트 월 0부터 시작함.
        sales_post_period_from.value = year + '-' + month;
        sales_post_period_to.value = year + '-' + month;
        sales_date_btn.setAttribute('style', 'background-color: #245c9c');
    }
    else {
        sales_post_period_check.checked = true;
        sales_post_period_from.value = '';
        sales_post_period_to.value = '';
        sales_post_period_from.disabled = true;
        sales_post_period_to.disabled = true;
        sales_date_btn.setAttribute('style', 'background-color: #313131');
    }
});
sales_post_period_from.addEventListener('change', function() {
    if (sales_post_period_from.value > sales_post_period_to.value) {
        alert('시작 날짜는 끝 날짜보다 클 수 없습니다.');
        sales_post_period_from.value = sales_post_period_to.value;
    }
});
sales_post_period_to.addEventListener('change', function() {
    if (sales_post_period_from.value > sales_post_period_to.value) {
        alert('끝 날짜는 시작 날짜보다 작을 수 없습니다.');
        sales_post_period_to.value = sales_post_period_from.value;
    }
});

// -------------------- 댓글 관리 --------------------------
// 검색창 및 상단 카테고리 선택 기능
const comment_search_btn = document.getElementById('comment-search-dropdown-btn');
const comment_search_dropdown = document.querySelectorAll('#comment-search-dropdown-menu .sortby-item');

const comment_sortby_btn = document.getElementById('comment-sortby-dropdown-btn');
const comment_sortby_dropdown = document.querySelectorAll('#comment-sortby-dropdown-menu .sortby-item');

comment_search_dropdown.forEach(function(item) {
    item.addEventListener('click', function(e) {
        comment_search_btn.innerText = e.target.innerText;
    })
});
comment_sortby_dropdown.forEach(function(item) {
    item.addEventListener('click', function(e) {
        comment_sortby_btn.innerText = e.target.innerText;
    })
});

// 달력 버튼 모달 내부 코드
const comment_period_check = document.querySelector('#comment-period-checkbox');
const comment_period_from = document.querySelector('#comment-info .period-from');
const comment_period_to = document.querySelector('#comment-info .period-to');
const comment_period_check_label = document.querySelector('#comment-info .modal-body .form-check');
comment_period_check_label.addEventListener('click', function(e) {
    let sales_date_btn = document.querySelector('#sales-post-info .calendar-btn');
    if (e.target !== comment_period_check_label) {
            if (comment_period_check.checked == false) {
            comment_period_from.disabled = false;
            comment_period_to.disabled = false;
            now = new Date();
            year = now.getFullYear();
            month = now.getMonth() + 1; // 자바스크립트 월 0부터 시작함.
            comment_period_from.value = year + '-' + month;
            comment_period_to.value = year + '-' + month;
            sales_date_btn.setAttribute('style', 'background-color: #245c9c');
        }
        else {
            comment_period_from.value = '';
            comment_period_to.value = '';
            comment_period_from.disabled = true;
            comment_period_to.disabled = true;
            sales_date_btn.setAttribute('style', 'background-color: #313131');
        }
        return;
    }
    if (comment_period_check.checked == true) {
        comment_period_check.checked = false;
        comment_period_from.disabled = false;
        comment_period_to.disabled = false;
        now = new Date();
        year = now.getFullYear();
        month = now.getMonth() + 1; // 자바스크립트 월 0부터 시작함.
        comment_period_from.value = year + '-' + month;
        comment_period_to.value = year + '-' + month;
        sales_date_btn.setAttribute('style', 'background-color: #245c9c');
    }
    else {
        comment_period_check.checked = true;
        comment_period_from.value = '';
        comment_period_to.value = '';
        comment_period_from.disabled = true;
        comment_period_to.disabled = true;
        sales_date_btn.setAttribute('style', 'background-color: #313131');
    }
});
comment_period_from.addEventListener('change', function() {
    if (comment_period_from.value > comment_period_to.value) {
        alert('시작 날짜는 끝 날짜보다 클 수 없습니다.');
        comment_period_from.value = comment_period_to.value;
    }
});
comment_period_to.addEventListener('change', function() {
    if (comment_period_from.value > comment_period_to.value) {
        alert('끝 날짜는 시작 날짜보다 작을 수 없습니다.');
        comment_period_to.value = comment_period_from.value;
    }
});

// 댓글 선택 버튼 이벤트
let comments = document.querySelectorAll('#comment-info .comment-card');
comment_select_btn.addEventListener('click', function(e) {
    let checkboxes = document.querySelectorAll('#comment-info .comment-checkbox');
    let more_menu_btns = document.querySelectorAll('#comment-info .more-menu-btn');
    let sort_btn = document.querySelector('#comment-sortby-dropdown-btn');
    let select_option_btns = document.querySelectorAll('#comment-info .select-option-btn');

    // 선택 버튼이 눌린 상태에서 다시 누르면,
    if (comment_select_btn.classList.contains("pushed")) {
        comment_select_btn.classList.remove("pushed");
        checkboxes.forEach(function(checkbox) {
            checkbox.style.display = 'none';
        })
        more_menu_btns.forEach(function(btn) {
            btn.style.display = '';
        })
        comments.forEach(function(comment) {
            comment.style.cursor = 'default'
        })
        select_option_btns.forEach(function(option_btn) {
            option_btn.style.display = 'none';
        })
        sort_btn.style.display = '';
    }
    else {
        comment_select_btn.classList.add('pushed');
        checkboxes.forEach(function(checkbox) {
            checkbox.style.display = '';
        })
        more_menu_btns.forEach(function(btn) {
            btn.style.display = 'none';
        })
        comments.forEach(function(comment) {
            comment.style.cursor = 'pointer'
        })
        select_option_btns.forEach(function(option_btn) {
            option_btn.style.display = '';
        })
        sort_btn.style.display = 'none';
    }
})
// 댓글 선택 모드일 경우, 어딜 클릭해도 선택되게 변경
comments.forEach(function(comment) {
    comment.addEventListener('click', function(e) {
        if (comment_select_btn.classList.contains("pushed")) {
            let single_checkbox = comment.querySelector('.comment-checkbox .form-check-input');
            single_checkbox.checked = !single_checkbox.checked;
        }
    });

    let single_checkbox = comment.querySelector('.comment-checkbox .form-check-input');
    single_checkbox.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
// 전체 선택 버튼 누르면 게시글 모두 선택되게 함
let comment_select_all_btn = document.querySelector('#comment-info #select-all-btn');
comment_select_all_btn.addEventListener("click", function(e) {
    let checkbox_all = document.querySelectorAll('#comment-info .form-check-input');
    // 모든 체크박스가 체크되어 있는지 확인합니다.
    let allChecked = Array.from(checkbox_all).every(checkbox => checkbox.checked);
    checkbox_all.forEach(function(single_box) {
        // 모든 체크박스가 체크되어 있다면 체크를 해제하고, 그렇지 않다면 체크합니다.
        single_box.checked = !allChecked;
    });
});

// -------------------- 알림 관리 --------------------------
// 알림 종류 선택 표시
const notification_sortby_btn = document.getElementById('notification-sortby-dropdown-btn');
const notification_sortby_dropdown = document.querySelectorAll('#notification-sortby-dropdown-menu .sortby-item');
notification_sortby_dropdown.forEach(function(item) {
    item.addEventListener('click', function(e) {
        notification_sortby_btn.innerText = e.target.innerText;
    })
});
// 라벨 클릭해도 체크 표시 되도록 변경
const noti_switch = document.getElementById('noti-switch');
const DM_switch = document.getElementById('DM-switch');
const noti_switch_label = document.getElementById('noti-switch-label');
const DM_switch_label = document.getElementById('DM-switch-label');

noti_switch_label.addEventListener('click', function() {
    noti_switch.checked = !noti_switch.checked;
});
DM_switch_label.addEventListener('click', function() {
    DM_switch.checked = !DM_switch.checked
})

// ------------------ 차단 관리 -------------------------
// 전체 선택 버튼 누르면 차단 유저 모두 선택되게 함
const blocked_select_all_btn = document.querySelector('#blocked-info #select-all-btn');
blocked_select_all_btn.addEventListener("click", function(e) {
    let checkbox_all = document.querySelectorAll('#blocked-info .form-check-input');
    // 모든 체크박스가 체크되어 있는지 확인합니다.
    let allChecked = Array.from(checkbox_all).every(checkbox => checkbox.checked);
    checkbox_all.forEach(function(single_box) {
        // 모든 체크박스가 체크되어 있다면 체크를 해제하고, 그렇지 않다면 체크합니다.
        single_box.checked = !allChecked;
    });
});
// 차단 유저 어느곳이든 클릭하면 체크되게 설정
const blocked_user_info = document.querySelectorAll('.blocked-user-info');
blocked_user_info.forEach(function(item) {
    item.addEventListener('click', function() {
        let single_checkbox = item.querySelector('.blocked-checkbox .form-check-input');
        single_checkbox.checked = !single_checkbox.checked;
    })
});
// --------------------- 포인트 관리 -----------------------
// 포인트 내역 종류 선택 표시
const point_sortby_btn = document.getElementById('point-sortby-dropdown-btn');
const point_sortby_dropdown = document.querySelectorAll('#point-sortby-dropdown-menu .sortby-item');
point_sortby_dropdown.forEach(function(item) {
    item.addEventListener('click', function(e) {
        point_sortby_btn.innerText = e.target.innerText;
    })
});