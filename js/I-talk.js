// 연관 글 선택 기능

const idolName = document.getElementsByClassName("idol-name");
let subtitle = document.getElementsByClassName("SubTitle")[0];
for (let i = 0; i < idolName.length; i++) {
    idolName[i].addEventListener('click', function(event) {
        let targetIdolName = event.target.innerText;
        subtitle.innerText = targetIdolName + " 연관 글";
    });
}