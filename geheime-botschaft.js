        // Der geheime Code (Konami Code)
        const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
        let userInput = [];

        // Funktion zum Zurücksetzen der Eingabe und Anzeigen einer Nachricht
        function resetInput(message) {
            userInput = [];
            showMessage(message);
        }

        // Funktion zum Anzeigen einer Nachricht
        function showMessage(message) {
            document.getElementById('message').textContent = message;
            setTimeout(function() {
                document.getElementById('message').textContent = '';
            }, 3000);
        }

        // Event-Listener für Tastendruck
        window.addEventListener('keydown', function(event) {
            userInput.push(event.code);
            if (userInput.length === secretCode.length) {
                if (JSON.stringify(userInput) === JSON.stringify(secretCode)) {
                    resetInput('Zutritt gewährt');
                } else {
                    resetInput('Falscher Code. Versuche es erneut.');
                }
            } else if (!secretCode.slice(0, userInput.length).every((value, index) => value === userInput[index])) {
                resetInput('Falscher Code. Versuche es erneut.');
            }
        });