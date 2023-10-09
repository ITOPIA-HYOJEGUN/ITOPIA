let sortBy = document.getElementById('sortByMenuButton');
let sortByItems = document.getElementsByClassName('sortby-item');
let value = sortBy.innerText;

sortByItems[0].addEventListener("click", (e) => {
    if (value != "추천비율순" && e.target.innerText == "추천비율순") {
        document.getElementById('sortByMenuButton').innerText = "추천비율순 ";
    }

});
sortByItems[1].addEventListener("click", (e) => {
    if (value != "최신순" && e.target.innerText == "최신순") {
        document.getElementById('sortByMenuButton').innerText = "최신순 ";
    }
});