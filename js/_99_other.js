// let buttonDisplayed = false; // 닫기 버튼이 이미 표시되었는지 여부를 확인하는 변수
// let secondImageDisplayed = false; // 두 번째 이미지가 표시되었는지 여부를 확인하는 변수
// let thirdImageDisplayed = false; // 세 번째 이미지가 표시되었는지 여부를 확인하는 변수

// // 남자친구 클릭시
// document.getElementById('bar-image').addEventListener('click', function(event) {
//     const boyfriendArea = { x: 250, y: 250, width: 180, height: 280 }; // 남자친구 이미지의 위치 및 크기
//     const clickX = event.offsetX;
//     const clickY = event.offsetY;

//     const isBoyfriendClicked = clickX >= boyfriendArea.x && clickX <= (boyfriendArea.x + boyfriendArea.width) &&
//                             clickY >= boyfriendArea.y && clickY <= (boyfriendArea.y + boyfriendArea.height);

//     if (isBoyfriendClicked && !buttonDisplayed) {
//         // 이미지 경로 변경
//         var imageElement = document.getElementById('bar-image');
//         imageElement.src = '../image/images/barpage/내버려둬.PNG';

//         // "닫기" 버튼 추가
//         var closeButton = document.createElement("button");
//         closeButton.textContent = "Back";
//         closeButton.id = "close-button";
//         closeButton.className = "close-button";
//         document.getElementById('game-container').appendChild(closeButton);

//         buttonDisplayed = true; // 버튼이 표시되었음을 기록

//         // "닫기" 버튼 클릭 이벤트 추가
//         closeButton.addEventListener('click', function() {
//             // 원래 이미지로 돌아가기
//             imageElement.src = '../image/images/barpage/더호스텔바.PNG';
//             // 버튼 제거
//             closeButton.remove();
//             buttonDisplayed = false; // 버튼이 제거되었음을 기록
//         });
//     }
// });

// // 웨이터 클릭시
// document.getElementById('bar-image').addEventListener('click', function(event) {
//     const waiterArea = { x: 520, y: 250, width: 180, height: 280 }; // 웨이터 이미지의 위치 및 크기
//     const clickX = event.offsetX;
//     const clickY = event.offsetY;

//     const isWaiterClicked = clickX >= waiterArea.x && clickX <= (waiterArea.x + waiterArea.width) &&
//                             clickY >= waiterArea.y && clickY <= (waiterArea.y + waiterArea.height);

//     if (isWaiterClicked && !buttonDisplayed) {
//         // 이미지 경로 변경
//         var imageElement = document.getElementById('bar-image');
//         imageElement.src = '../image/images/barpage/말하는웨이터.PNG';

//         // "닫기" 버튼 추가
//         var closeButton = document.createElement("button");
//         closeButton.textContent = "Back";
//         closeButton.id = "close-button";
//         closeButton.className = "close-button";
//         document.getElementById('game-container').appendChild(closeButton);

//         buttonDisplayed = true; // 버튼이 표시되었음을 기록

//         // "닫기" 버튼 클릭 이벤트 추가
//         closeButton.addEventListener('click', function() {
//             // 원래 이미지로 돌아가기
//             imageElement.src = '../image/images/barpage/더호스텔바.PNG';
//             // 버튼 제거
//             closeButton.remove();
//             buttonDisplayed = false; // 버튼이 제거되었음을 기록
//         });
//     }
// });

// // 술장 클릭시
// document.getElementById('bar-image').addEventListener('click', function(event) {
//     const liquorArea = { x: 700, y: 140, width: 350, height: 400 }; // 첫 번째 이미지에서 술장 영역
//     const clickX = event.offsetX;
//     const clickY = event.offsetY;

//     const isLiquorAreaClicked = clickX >= liquorArea.x && clickX <= (liquorArea.x + liquorArea.width) &&
//                                 clickY >= liquorArea.y && clickY <= (liquorArea.y + liquorArea.height);

//     if (isLiquorAreaClicked && !secondImageDisplayed) {
//         // 첫 번째 클릭: 이미지 경로 변경
//         var imageElement = document.getElementById('bar-image');
//         imageElement.src = '../image/images/barpage/술있는곳확대.png';
//         secondImageDisplayed = true; // 두 번째 이미지가 표시되었음을 기록

//         // "닫기" 버튼 추가
//         var closeButton = document.createElement("button");
//         closeButton.textContent = "Back";
//         closeButton.id = "close-button";
//         closeButton.className = "close-button";
//         document.getElementById('game-container').appendChild(closeButton);
//         buttonDisplayed = true; // 버튼이 표시되었음을 기록

//         // "닫기" 버튼 클릭 이벤트 추가
//         closeButton.addEventListener('click', function() {
//             // 첫 번째 이미지로 돌아가기
//             imageElement.src = '../image/images/barpage/더호스텔바.PNG';
//             secondImageDisplayed = false; // 두 번째 이미지 표시 기록 초기화
//             thirdImageDisplayed = false; // 세 번째 이미지 표시 기록 초기화
//             // 버튼 제거
//             closeButton.remove();
//             buttonDisplayed = false; // 버튼이 제거되었음을 기록
//         });

//     } else if (secondImageDisplayed && !thirdImageDisplayed) {
//         // 두 번째 클릭: 세 번째 이미지로 전환
//         const liquorAreas = [
//             { x: 285, y: 190, width: 56, height: 150, image: '../image/images/barpage/봄베이따르기.png' },
//             { x: 369, y: 190, width: 77, height: 150, image: '../image/images/barpage/럼따르기.png' },
//             { x: 450, y: 190, width: 50, height: 150, image: '../image/images/barpage/스미노프따르기.png' },
//             { x: 285, y: 400, width: 50, height: 140, image: '../image/images/barpage/오렌지주스따르기.png' },
//             { x: 369, y: 390, width: 77, height: 150, image: '../image/images/barpage/달모어따르기.png' },
//             { x: 450, y: 390, width: 50, height: 150, image: '../image/images/barpage/레몬주스따르기.png' }
//         ];

//         for (let i = 0; i < liquorAreas.length; i++) {
//             if (clickX >= liquorAreas[i].x && clickX <= (liquorAreas[i].x + liquorAreas[i].width) &&
//                 clickY >= liquorAreas[i].y && clickY <= (liquorAreas[i].y + liquorAreas[i].height)) {
//                 var imageElement = document.getElementById('bar-image');
//                 imageElement.src = liquorAreas[i].image;
//                 thirdImageDisplayed = true; // 세 번째 이미지가 표시되었음을 기록

//                 // 닫기 버튼 숨기기
//                 var closeButton = document.getElementById('close-button');
//                 if (closeButton) {
//                     closeButton.style.display = 'none';
//                 }

//                 // 1초 후에 두 번째 이미지로 돌아가기
//                 setTimeout(function() {
//                     imageElement.src = '../image/images/barpage/술있는곳확대.png';
//                     thirdImageDisplayed = false; // 세 번째 이미지 표시 기록 초기화

//                     // 닫기 버튼 다시 보이기
//                     if (closeButton) {
//                         closeButton.style.display = 'block';
//                     }
//                 }, 1000);

//                 break;
//             }
//         }
//     }
// });





// // 술장쪽을 클릭시
// document.getElementById('bar-image').addEventListener('click', function(event) {
//     const waiterArea = { x: 700, y: 140, width: 350, height: 400 }; // 첫 번째 이미지에서 웨이터 영역
//     const secondClickArea = { x: 200, y: 100, width: 200, height: 200 }; // 두 번째 이미지에서 클릭 영역 (임의의 값으로 조정 필요)
//     const clickX = event.offsetX;
//     const clickY = event.offsetY;

//     if (!secondImageDisplayed && clickX >= waiterArea.x && clickX <= (waiterArea.x + waiterArea.width) &&
//         clickY >= waiterArea.y && clickY <= (waiterArea.y + waiterArea.height)) {
//         // 첫 번째 클릭: 이미지 경로 변경
//         var imageElement = document.getElementById('bar-image');
//         imageElement.src = '../image/images/barpage/술있는곳확대.png';
//         secondImageDisplayed = true; // 두 번째 이미지가 표시되었음을 기록

//         // "닫기" 버튼 추가
//         var closeButton = document.createElement("button");
//         closeButton.textContent = "닫기";
//         closeButton.id = "close-button";
//         closeButton.className = "close-button";
//         document.getElementById('game-container').appendChild(closeButton);
//         buttonDisplayed = true; // 버튼이 표시되었음을 기록

//         // "닫기" 버튼 클릭 이벤트 추가
//         closeButton.addEventListener('click', function() {
//             // 두 번째 이미지에서 뒤로 가면 첫 번째 이미지로 돌아가기
//             if (thirdImageDisplayed) {
//                 imageElement.src = '../image/images/barpage/술있는곳확대.png';
//                 thirdImageDisplayed = false; // 세 번째 이미지 표시 기록 초기화
//             } else {
//                 // 첫 번째 이미지로 돌아가기
//                 imageElement.src = '../image/images/barpage/더호스텔바.PNG';
//                 secondImageDisplayed = false; // 두 번째 이미지 표시 기록 초기화
//                 thirdImageDisplayed = false; // 세 번째 이미지 표시 기록 초기화
//                 // 버튼 제거
//                 closeButton.remove();
//                 buttonDisplayed = false; // 버튼이 제거되었음을 기록
//             }
//         });

//     } else if (secondImageDisplayed && !thirdImageDisplayed) {
//         // 두 번째 클릭: 세 번째 이미지로 전환
//         const liquorAreas = [
//             { x: 285, y: 190, width: 56, height: 150, image: '../image/images/barpage/봄베이따르기.png' },
//             { x: 369, y: 190, width: 77, height: 150, image: '../image/images/barpage/럼따르기.png' },
//             { x: 450, y: 190, width: 50, height: 150, image: '../image/images/barpage/스미노프따르기.png' },
//             { x: 285, y: 400, width: 50, height: 140, image: '../image/images/barpage/오렌지주스따르기.png' },
//             { x: 369, y: 390, width: 77, height: 150, image: '../image/images/barpage/달모어따르기.png' },
//             { x: 450, y: 390, width: 50, height: 150, image: '../image/images/barpage/레몬주스따르기.png' }
//         ];

//         for (let i = 0; i < liquorAreas.length; i++) {
//             if (clickX >= liquorAreas[i].x && clickX <= (liquorAreas[i].x + liquorAreas[i].width) &&
//                 clickY >= liquorAreas[i].y && clickY <= (liquorAreas[i].y + liquorAreas[i].height)) {
//                 var imageElement = document.getElementById('bar-image');
//                 imageElement.src = liquorAreas[i].image;
//                 thirdImageDisplayed = true; // 세 번째 이미지가 표시되었음을 기록
//                 break;
//             }
//         }
//     }
// });




