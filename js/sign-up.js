function termsAgreedCheck() {
    if (document.getElementById("agree1").checked != true || document.getElementById("agree2").checked != true) {

        alert("약관에 모두 동의하셔야 회원가입이 가능합니다.");
        return false;
        
    }
    else {
        return true;
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