// 使用JavaScript添加和删除.active类来触发动画
const bearElement = document.querySelector('.bear');
const footer = document.querySelector('.footer')

bearElement.addEventListener('mouseover', () => {
    bearElement.classList.add('active');
});

bearElement.addEventListener('mouseout', () => {
    bearElement.classList.remove('active');
});

// 当滚动条滚动到底部时隐藏元素
window.addEventListener('scroll', function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.display = 'none';
    }
});

// 点击footer元素隐藏.footer元素
document.addEventListener('click', function (event) {
    if (event.target.closest('.footer')) {
        footer.style.display = 'none';
    }
});


//点击上传头像
const head = document.querySelector('.navigation div.head_pic')

head.addEventListener('click', function () {
    uploadImage();
})

function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const imageContainer = document.getElementById('imageContainer');

    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const image = document.createElement('img');
            image.src = e.target.result;
            imageContainer.innerHTML = ''; // 清空容器
            imageContainer.appendChild(image);

            // 保存图片到本地存储
            localStorage.setItem('uploadedImage', e.target.result);
        }

        reader.readAsDataURL(file);
    });

    fileInput.click();
}

// 在页面加载时检查本地存储中是否有图片，并显示在容器中
window.onload = function () {

    const uploadedImage = localStorage.getItem('uploadedImage');
    if (uploadedImage) {
        head.style.background = 'none'
        const image = document.createElement('img');
        image.src = uploadedImage;
        document.getElementById('imageContainer').appendChild(image);
    }
}
