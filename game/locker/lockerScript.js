const patternbox = document.querySelector(".patternbox");
        const patternbox1 = document.querySelector("#patternbox1");
        const patternbox2 = document.querySelector("#patternbox2");
        const patternbox3 = document.querySelector("#patternbox3");
        const patternbox4 = document.querySelector("#patternbox4");
        const clearbtn = document.querySelector(".clearbtn");
        // const modalbtn = document.querySelector("#modalbtn");

        let cnt1 = Math.floor(Math.random() * 4);
        let cnt2 = Math.floor(Math.random() * 4);
        let cnt3 = Math.floor(Math.random() * 4);
        let cnt4 = Math.floor(Math.random() * 3); // <= 1/16확률로 한번에 끝나지 않게

        // modalbtn.addEventListener("click", (e) => {
        // box.style.backgroundImage = none;
        // $("#box1").css("background-image", "none");
        // });

        patternbox1.addEventListener("click", (e) => {
            cnt1++;

            patternbox1.style.backgroundImage = `url('/imgForClue_0${cnt1}.png')`

            if (cnt1 === 4) {
                cnt1 = 0;
            }
        });
        patternbox2.addEventListener("click", (e) => {
            cnt2++;

            patternbox2.style.backgroundImage = `url('/imgForClue_0${cnt2}.png')`

            if (cnt2 === 4) {
                cnt2 = 0;
            }
        });
        patternbox3.addEventListener("click", (e) => {
            cnt3++;

            patternbox3.style.backgroundImage = `url('/imgForClue_0${cnt3}.png')`

            if (cnt3 === 4) {
                cnt3 = 0;
            }
        });
        patternbox4.addEventListener("click", (e) => {
            cnt4++;

            patternbox4.style.backgroundImage = `url('/imgForClue_0${cnt4}.png')`

            if (cnt4 === 4) {
                cnt4 = 0;
            }
        });

        clearbtn.addEventListener("click", (e) => {
            // 마지막번째 사진은 0이여야 열림

            clearbtn.classList.add("active");
            setTimeout(() => { // removing active class after 150 ms from the clicked key element
                clearbtn.classList.remove("active");
            }, 150);

            if (cnt1 === 1 && cnt2 === 2 && cnt3 === 3 && cnt4 === 0) {
                alert("올ㅋ 열림!");
            }
        });

        document.getElementById('back-button').addEventListener('click', function() {
            window.location.href = '../../HTML/_03_right_wall.html'; // 돌아갈 페이지로 이동
          });