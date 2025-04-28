const spanEl = document.querySelectorAll('span');
const imgList = document.querySelectorAll('.image_list div');
const toggle = document.querySelectorAll('.toggle_dots')[0];
const toggleList = document.querySelectorAll('.toggle_dots div');

let index = 0;

function showImg() {
    for(let i = 0; i < imgList.length; i++ ) {
        imgList[i].classList.remove('active');
    }
    imgList[index].classList.add('active');

    spanEl[0].style.display = index === 0 ? 'none' : 'block';
    spanEl[1].style.display = index === imgList.length - 1 ? 'none' : 'block';
}

function createElement() {
    for(let i = 0; i < imgList.length; i++ ) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('onclick', 'indicate(this)');
        newDiv.id = i;
        if(i == 0) {
            newDiv.className = 'actual';
        }
        toggle.appendChild(newDiv);
    }
}

function prev()  {
    if (index === 0) {
        index = imgList.length - 1;
    } else {
        index--;
    }
    showImg();
    pas();
}

function next() {
    if (index === imgList.length - 1) {
        index = 0;
    } else {
        index++;
    }
    showImg();
    pas();
}

function pas() {
    for(let i = 0; i < toggle.children.length; i++ ) {
        toggle.children[i].classList.remove('actual');
    }
    toggle.children[index].classList.add('actual');
}

function indicate(element) {
    index = element.id;
    showImg();
    pas();
}

createElement();