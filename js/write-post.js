// 카테고리 선택할 시, 강조해주는 코드

let categorySelect = document.getElementsByClassName("post-category-item");
let categorySelectValue = "None";

document.getElementById("priceset-title").style.display = 'none';
document.getElementById("price-input").style.display = 'none';




categorySelect[0].addEventListener("click", (e) => {
    if (categorySelectValue != "잡담"){
        e.target.style.backgroundColor = "#FFEFD5";
        categorySelectValue = "잡담";
        for (var i = 1; i <= 6; i++) {
            categorySelect[i].style.backgroundColor = "transparent";
        }
        document.getElementById("priceset-title").style.display = 'none';
        document.getElementById("price-input").style.display = 'none';
        document.getElementById("price-input").value = '';
    }

});
categorySelect[1].addEventListener("click", (e) => {
    if (categorySelectValue != "사진/영상"){
        e.target.style.backgroundColor = "#FFEFD5";
        categorySelectValue = "사진/영상";
        for (var i = 2; i <= 6; i++) {
            categorySelect[i].style.backgroundColor = "transparent";
        }
        categorySelect[0].style.backgroundColor = "transparent";
        document.getElementById("priceset-title").style.display = 'none';
        document.getElementById("price-input").style.display = 'none';
        document.getElementById("price-input").value = '';
    }
}); 
categorySelect[2].addEventListener("click", (e) => {
    if (categorySelectValue != "정보"){
        e.target.style.backgroundColor = "#FFEFD5";
        categorySelectValue = "정보";
        for (var i = 0; i <= 1; i++) {
            categorySelect[i].style.backgroundColor = "transparent";
        }
        for (var i = 3; i <= 6; i++) {
            categorySelect[i].style.backgroundColor = "transparent";
        }
        document.getElementById("priceset-title").style.display = 'none';
        document.getElementById("price-input").style.display = 'none';
        document.getElementById("price-input").value = '';
    }
}); 
categorySelect[3].addEventListener("click", (e) => {
    if (categorySelectValue != "질문"){
        e.target.style.backgroundColor = "#FFEFD5";
        categorySelectValue = "질문";
        for (var i = 0; i <= 2; i++) {
            categorySelect[i].style.backgroundColor = "transparent";
        }
        for (var i = 4; i <= 6; i++) {
            categorySelect[i].style.backgroundColor = "transparent";
        }
        document.getElementById("priceset-title").style.display = 'none';
        document.getElementById("price-input").style.display = 'none';
        document.getElementById("price-input").value = '';
    }
}); 
categorySelect[4].addEventListener("click", (e) => {
    if (categorySelectValue != "후기"){
        e.target.style.backgroundColor = "#FFEFD5";
        categorySelectValue = "후기";
        for (var i = 0; i <= 3; i++) {
            categorySelect[i].style.backgroundColor = "transparent";
        }
        for (var i = 5; i <= 6; i++) {
            categorySelect[i].style.backgroundColor = "transparent";
        }
        document.getElementById("priceset-title").style.display = 'none';
        document.getElementById("price-input").style.display = 'none';
        document.getElementById("price-input").value = '';
    }
});
categorySelect[5].addEventListener("click", (e) => {
    if (categorySelectValue != "판매"){
        e.target.style.backgroundColor = "#FFEFD5";
        categorySelectValue = "판매";
        for (var i = 0; i <= 4; i++) {
            categorySelect[i].style.backgroundColor = "transparent";
        }
        categorySelect[6].style.backgroundColor = "transparent";
        document.getElementById("priceset-title").style.display = '';
        document.getElementById("price-input").style.display = '';

    }
});
categorySelect[6].addEventListener("click", (e) => {
    if (categorySelectValue != "구매"){
        e.target.style.backgroundColor = "#FFEFD5";
        categorySelectValue = "구매";
        for (var i = 0; i <= 5; i++) {
            categorySelect[i].style.backgroundColor = "transparent";
        }
        document.getElementById("priceset-title").style.display = '';
        document.getElementById("price-input").style.display = '';

    }
});
document.getElementById("post-confirm").onclick = function writeButtonAction() {
    if (categorySelectValue == "None"){
        alert("게시글 카테고리를 선택해주세요.")
        console.log(categorySelectValue)
    }
    
}
// Summernote Script
$(document).ready(function() {
    $('#summernote').summernote({
        toolbar: [
        // [groupName, [list of button]]
        ['fontname', ['fontname']],
        ['fontsize', ['fontsize']],
        ['style', ['bold', 'italic', 'underline','strikethrough', 'clear']],
        ['color', ['forecolor','color']],
        ['table', ['table']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']],
        ['insert',['picture','link','video']],
        ['view', ['help']]
    ],
    fontNames: ['Nanum Gothic','맑은 고딕','궁서','굴림체','굴림','돋움체','바탕체'],
    fontSizes: ['8','9','10','11','12','14','16','18','20','22','24','28','30','36','50','72'],
        height: 600,
        minHeight: 600,
        maxHeight: 700,
        focus: false,
        lang: "ko-KR",
        placeholder: '내용을 입력하세요. ( 문단 바꾸기가 아닌 줄바꿈은 SHIFT+ENTER로 해주세요! )'
    });
    // 기본 로드 폰트: 나눔고딕으로 설정
    $('.note-current-fontname').css('font-family','Nanum Gothic').text('Nanum Gothic');
    $('.note-editable').css('font-family','Nanum Gothic');
    $('.note-current-fontsize').text('18');
    $('.note-editable').css('font-size','18px');
});

// 가격 입력 함수
function priceFormat() {
    let check = /[^₩,0-9]/
    if (check.test(document.getElementById("price-input").value)) {
        document.getElementById("price-input").value = document.getElementById("price-input").value.slice(0, -1);
    }

    if (document.getElementById("price-input").value == ''){
        return
    }
    else if (document.getElementById("price-input").value == ',') {
        document.getElementById("price-input").value = '';
    }
    else if (document.getElementById("price-input").value == '₩') {
        document.getElementById("price-input").value = '';
    }
    else {
        let price = document.getElementById("price-input").value;
        let res = '';
        price = price.match(/[0-9]/g);
        for (let i = 0; i < price.length; i++){
            res = res + price[i];
        }
        document.getElementById("price-input").value = parseInt(res).toLocaleString('ko-KR', { style: 'currency', currency: 'KRW'});
    }
}