let span = document.querySelectorAll('span');
let imgList = document.querySelectorAll('.image_list div');
let toggle = document.querySelectorAll('.toggle_dots')[0];
let index = 0;

span[0].onclick = () => {
    if (index === 0) {
        index = imgList.length - 1;
    } else {
        index--;
    }
    showImg();
    pas();
    // removeArrow();
}

span[1].onclick = () => {
    if (index === imgList.length - 1) {
        index = 0;
    } else {
        index++;
    }
    showImg();
    pas();
    // removeArrow();
}

function showImg() {
    for(let i = 0; i < imgList.length; i++ ) {
        imgList[i].classList.remove('active');
    }
    imgList[index].classList.add('active');
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

createElement();

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

function removeArrow() {
    if (imgList.length === 0) {
        span[0].style.display = 'none';
    } else {
        span[0].style.display = 'block';
    }
}

// removeArrow();