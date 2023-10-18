// 가격 입력 함수
document.getElementById("form-area").style.display = 'none';


function termsAgreedCheck() {
    if (document.getElementById("agree1").checked == true && document.getElementById("agree2").checked == true) {
        document.getElementById("form-area").style.display = '';
    }
    else {
        document.getElementById("form-area").style.display = 'none';
        document.getElementById('input-ID').value = ''
        document.getElementById('input-nickname').value = ''
        document.getElementById('input-email').value = ''
        document.getElementById('input-PW').value = ''
        document.getElementById('input-PW2').value = ''
    }
    
}



function IDFormat() {
    let check = /[^a-z,A-Z,0-9]/
    if (check.test(document.getElementById("input-ID").value)) {
        document.getElementById("input-ID").value = '';
    }

    if (document.getElementById("input-ID").value == ''){
        return
    }
}
function nicknameFormat() {
    let check = /[^a-z,A-Z,0-9,가-힣,ㄱ-ㅎ,ㅏ-ㅣ]/
    if (check.test(document.getElementById("input-nickname").value)) {
        document.getElementById("input-nickname").value = '';
    }

    if (document.getElementById("input-nickname").value == ''){
        return
    }
}