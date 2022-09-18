const string = `
/*今天为大家展示2022年冬奥吉祥物冰墩墩*/
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*::before,
*::after {
    box-sizing: border-box;
}
body {
    background: rgb(212, 235, 241);
    min-height: 100vh;
}

img {
    margin-left: 150px;
    margin-top: 310px;
    width: 60px;
}

.body1 {
    border: 8px solid rgb(57, 57, 57);
    width: 362px;
    height: 410px;
    border-radius: 88% 88% 62% 68% / 82% 82% 95% 84%;
    background: rgb(255, 255, 255);
    position: absolute;
    left: 50%;
    top: 50px;
    margin-left: -181px;
}

.ear {
    width: 81px;
    height: 115px;
    position: absolute;
    left: 50%;
    top: 60px;
    background: rgb(57, 57, 57);
    border-radius: 50%;
    z-index: -1;

}

.ear.left {
    margin-left: -150px;
    transform: rotate(-10deg)
}

.ear.right {
    margin-left: 70px;
    transform: rotate(10deg)
}

.face {
    position: absolute;
    border-radius: 48% 48% 44% 49% / 53% 54% 45% 47%;
    left: 50%;
}

.face.blue {
    border: 5px solid rgb(107, 205, 243);
    width: 280px;
    height: 224px;
    top: 110px;
    margin-left: -140px;
}

.face.red {
    border: 5px solid rgb(175, 35, 80);
    width: 290px;
    height: 234px;
    top: 105px;
    margin-left: -145px;
}

.face.purple {
    border: 5px solid rgb(93, 117, 179);
    width: 300px;
    height: 244px;
    top: 100px;
    margin-left: -150px;
}

.face.yellow {
    border: 5px solid rgb(255, 195, 70);
    width: 310px;
    height: 254px;
    top: 95px;
    margin-left: -155px;
}

.face.green {
    border: 5px solid rgb(127, 203, 88);
    width: 320px;
    height: 264px;
    top: 90px;
    margin-left: -160px;
}

.eye {
    width: 83px;
    height: 115px;
    position: absolute;
    left: 50%;
    top: 150px;
    background: rgb(57, 57, 57);
    border-radius: 50%;
}

.eye.left {
    margin-left: -110px;
    transform: rotate(45deg)
}

.eye.right {
    margin-left: 30px;
    transform: rotate(-45deg)
}

.eye::before {
    content: '';
    width: 40px;
    height: 40px;
    border: 5px solid rgb(255, 255, 255);
    border-radius: 50%;
    position: absolute;
}

.eye.left::before {
    right: 12px;
    top: 22px;
}

.eye.right::before {
    left: 12px;
    top: 22px;
}

.eye::after {
    content: '';
    width: 10px;
    height: 10px;
    background: rgb(155, 155, 155);
    border-radius: 50%;
    position: absolute;
}

.eye.left::after {
    right: 25px;
    top: 31px;
}

.eye.right::after {
    left: 32px;
    top: 39px;
}

.nose {
    background: rgb(57, 57, 57);
    position: absolute;
    left: 50%;
    top: 210px;
    margin-left: -12px;
    width: 28px;
    height: 18px;
    border-radius: 42px 42px 60px 61px / 30px 30px 50px 46px;
}

.mouth {
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: 235px;
    width: 68px;
    height: 25px;
    border-radius: 50%;
    border: 7px solid rgb(57, 57, 57);
    border-top: none;
    border-left: 0;
    border-right: 0;
}

.hand {
    background: rgb(57, 57, 57);
    position: absolute;
    z-index: -1;
    width: 75px;
    height: 118px;
    left: 50%;
}

.hand.left {
    transform: rotate(45deg);
    border-radius: 24% 69% 68% 76%/ 53% 95% 40% 52%;
    margin-left: -220px;
    top: 270px;
}

.hand.right {
    transform: rotate(37deg);
    border-radius: 56% 62% 98% 6%/ 40% 46% 80% 58%;
    margin-left: 160px;
    top: 220px;
    animation: hi 1.5s infinite;
}
.hand.right::before {
    content: '';
    width: 16px;
    height: 24px;
    background: rgb(188, 36, 44);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    transform: rotate(45deg);
    left: 32px;
    top: 20px;
    position: absolute;
}

.hand.right::after {
    content: '';
    width: 16px;
    height: 24px;
    background: rgb(188, 36, 44);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    transform: rotate(-45deg);
    left: 26px;
    top: 20px;
    position: absolute;
}
.hand.right {
    animation: hi 1.5s infinite;
}
@keyframes hi {
    0% {
        transform: rotate(37deg);
}

    50% {
        transform: rotate(45deg);
}

    100% {
        transform: rotate(37deg);
}
}


.foot {
    background: rgb(57, 57, 57);
    position: absolute;
    left: 50%;
    width: 83px;
    height: 80px;
    border-radius: 0 0 28px 28px;
    z-index: -1;
}

.foot.left {
    margin-left: -102px;
    top: 440px;
}

.foot.right {
    margin-left: 23px;
    top: 440px;
}

.foot::after {
    content: '';
    width: 43px;
    height: 30px;
    position: absolute;
    background: rgb(57, 57, 57);
    border-radius: 28px;
    bottom: 0;
}

.foot.left::after {
    right: -3px;
}

.foot.right::after {
    left: -3px;
}`
export default string;