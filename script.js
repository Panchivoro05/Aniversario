function continuar() {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <html>
        <head>
            <title>A seguir con nuestro camino</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    font-family: 'Arial', sans-serif;
                    background-color: #fdf4e3;
                }
                .message {
                    font-size: 2rem;
                    color: #ff6f61;
                    text-align: center;
                    padding: 20px;
                    border: 3px solid #ff6f61;
                    border-radius: 10px;
                    background-color: white;
                }
            </style>
        </head>
        <body>
            <div class="message">
                A seguir con nuestro camino... Te amo
            </div>
        </body>
        </html>
    `);
}
