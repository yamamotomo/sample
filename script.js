'use strict';

//ハンバーガーアイコンの設定

{
    const gnaviBtn = document.getElementById('menu-btn');
    const gNavi = document.getElementById('gnavi');

    //クリックする場所を指定
    gnaviBtn.onclick = function (event) {
        event.preventDefault();

        gNavi.classList.toggle('open');
        gnaviiBtn.classList.toggle('close');

    }

    //課題1
    var btn = document.getElementById('button1');

    btn.onclick = function (event) {
        event.preventDefault();



        // ユーザの入力を得る
        var inputYear =
            document.getElementById('year').value;
        var inputMonth = document.getElementById('month').value;
        var inputDate = document.getElementById('date').value;

        const date = new Date(inputYear, inputMonth - 1, inputDate).getDay();

        //この記述はswitch文より上に記載する
        var youbi = '';

        switch (date) {
            case 0:
                youbi = '日曜日';
                break;

            case 1:
                youbi = '月曜日';
                break;

            case 2:
                youbi = '火曜日';
                break;

            case 3:
                youbi = '水曜日';
                break;

            case 4:
                youbi = '木曜日';
                break;

            case 5:
                youbi = '金曜日';
                break;

            case 6:
                youbi = '土曜日';
                break;
        }

        document.getElementById('A-01').textContent = `${inputYear}年${inputMonth}月${inputDate}日`;

        document.getElementById('A-02').textContent = youbi;

    }


    //課題2

    var btn2 = document.getElementById('button2');

    btn2.onclick = function (event) {
        event.preventDefault();

        var weight = document.getElementById('kg').value;
        var height = document.getElementById('cm').value;

        //inputに入力された身長をmに変換。
        var height_m = height / 100;

        //BMI ＝ 体重kg ÷ (身長m)2
        var total = weight / (height_m * height_m);


        //判定メッセージ

        var msg = '';
        if (total >= 25) {
            msg = '肥満気味';
        } else if (total >= 18.5 && total <= 24) {
            msg = '標準';
        } else {
            msg = '痩せすぎ';
        }

        document.getElementById('A-03').textContent = total;

        //小数点第二位を四捨五入の処理
        document.getElementById('A-03').textContent = Math.round(total * 10) / 10;


        document.getElementById('A-04').textContent = msg;









    }

    //課題3

    let stock = ['<img src="img/peppers.jpg" alt="">', '<img src="img/pumpkins.jpg" alt="">', '<img src="img/strawberries.jpg" alt="">', '<img src="img/tomato.jpg" alt="">'];

    const intervalId = setInterval(function () {
        stock.forEach(function (data, index) {
            const idName = 'item' + index;
            document.getElementById(idName).innerHTML = //'<img src="' + data + '" alt="">';
                data;
        });

        const first = stock.pop();
        stock.unshift(first);
    }, 1000);


}
