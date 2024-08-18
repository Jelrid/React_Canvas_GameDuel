import React, { useEffect } from 'react';

const GameCanvas = () => {
    const canvasRef = React.useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // размер холста на 100% окна
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Фон
        var background = new Image();
        background.src = "https://yandex-images.clstorage.net/Ht9r7c366/c0b551yInB/w7hnlxGCc_f6P2Me0DP6cVjWJvJiJ2Jdu-SJJLEZNDIH0Sw71ZYYM0JKlxD2ZA7fmJl3rvB8Qr_Oh3Rml8qTk4HvK8dW3DT3_ysoFJwp9mFNmjuxd2V7Wby9hXKPfxNFJOgGW6TiZhhdTcwXpX9EztSlHb6kam78xZQNS6OGw8zcoFygJ4EQ0c0eKDLoOOd4a5AR2VRccyqf9dwJo1cVfCrDH0KP_GYmVmn6MLhJOdvwkjLEo3dKwd6TGm62gOfPzK5hvDeIO9DtNSww-zD9Z3C0L8dfXXsuutTBArZSI3Q-1QRei89CJGtV2B-jVAz98a43-7V2VtraoBlpnqHl6PG_doMSkzTP-QM3AMk-_XtqjDnCY25ZJIPt_gi8YjtUCPAxYrzNYwxrb_ImqVIf5capDtO3b3D52Is1U4Gh89THmkKlLJsP2N8rJgr0DNpVb54r4FxSeAWrx8Eiv1A-YzTxI1OXyXUFQVjzOKtqBvrrjRb_gV1s2cOSNnOLivDI77VevgGSEcPrKS8g4zbpWlmeP_Nkf3grqMTdCqBPIkM_4Bpqg8laJEtK-j-EVT7e1owb049ocu7PsQJLmZ_u5PC9f7Angw_47x8GMNs-5nNZvRv0ZkVfMrvt8CeWaRpqNsU7carxVh9cZOsQiFcm28KvI-Sib1Xc-oQ2X7mT0M_dtUK6EosUyv0-CAzzKc9eYYga5VBFWy262NYwmWolTynkIH--yVs-cUnyB5FjGMzjiivqk2Bv49mOGWy9hf7KwrV6kC2ZFfj3KxUq9hXrXE2bMNFfeU40lfngOZJMM3cq0zlCm_JkInRZ1TuRTwDxxKAu9axJV9HFjSt3jaPWyPa9R6Q5vBbp5y4DDcIc2Hd6tzr8ekxRG77O2A6FejRvEtknYInVfgZoYO4gjX0c28udKtWkcEPA25Ildp6r_MnnimaEM7Y_7_wVOxH4Efticagx1X5PRAqo0-IEl1c";
        background.onload = function() {
        const scaleBack = Math.min(canvas.width / background.width, canvas.height / background.height);
        const dx = (canvas.width - background.width * scaleBack) / 2;
        const dy = (canvas.height - background.height * scaleBack) / 2;

        //Персонажи
        let hero1 = { x: 50, y: 200, dx: 5, dy: 5 };
        let hero2 = { x: canvas.width - 50, y: 200, dx: -5, dy: -5 };

        function draw() {
            //Отрисовка с удалением прошлого состояня
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            //Форматирование заднего фона
            ctx.drawImage(background, dx, dy, background.width * scaleBack, background.height * scaleBack);

            //Отрисовка персонажей
            ctx.beginPath();
            ctx.arc(hero1.x, hero1.y, 20, 0, Math.PI * 2);
            ctx.fillStyle = 'yellow';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(hero2.x, hero2.y, 20, 0, Math.PI * 2);
            ctx.fillStyle = 'red';
            ctx.fill();
            ctx.closePath();

            //Передвижение персонажей
            hero1.y += hero1.dy;
            hero2.y += hero2.dy;

            // Проверка столкновений и изменение направления
            if (hero1.y + 20 > canvas.height || hero1.y - 20 < 0) hero1.dy *= -1;
            if (hero2.y + 20 > canvas.height || hero2.y - 20 < 0) hero2.dy *= -1;
            requestAnimationFrame(draw);
        }

        draw();
    }
    }, []);

    return <canvas ref={canvasRef}></canvas>;
};

export default GameCanvas;
