 // document.getElementById('area-1').addEventListener('click', function() {
//     // 페이지 1로 이동
//     window.location.href = 'page1.html';
// });

// document.getElementById('area-2').addEventListener('click', function() {
//     // 페이지 2로 이동
//     window.location.href = 'page2.html';
// });

// 필요한 만큼 더 추가

document.addEventListener('DOMContentLoaded', function() {
    let isSecondImage = false;

    const originalImagePath = 'image/images/barpage/더호스텔바.PNG';
    const secondImagePath = 'image/images/barpage/말하는웨이터.PNG';
    const barImagePath = 'image/images/barpage/술있는곳확대.PNG'; // 추가
    const imageElement = document.getElementById('hostel-image');
    const waiterArea = document.getElementById('waiter-area');
    const barArea = document.getElementById('bar-area'); // 추가

    waiterArea.addEventListener('click', function() {
        if (isSecondImage) {
            imageElement.src = originalImagePath;
        } else {
            imageElement.src = secondImagePath;
        }
        isSecondImage = !isSecondImage;
    });

    barArea.addEventListener('click', function() {
        imageElement.src = barImagePath;
    });
});
