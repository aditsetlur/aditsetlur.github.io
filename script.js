/* Dark Tech / Cyberpunk Theme Variables & Reset */
body {
    font-family: 'Courier New', Courier, monospace;
    background-color: #0b0f19;
    color: #00ffcc;
    margin: 0;
    padding: 30px;
    text-align: center;
}

/* Header styling with neon glow */
header {
    margin-bottom: 25px;
}

h1 {
    color: #00ffcc;
    font-size: 2.2rem;
    text-shadow: 0 0 10px rgba(0, 255, 204, 0.4);
    letter-spacing: 2px;
}

header p {
    color: #8b9bb4;
}

/* Game Card Container */
.game-container {
    background-color: #121826;
    max-width: 360px;
    margin: 0 auto;
    padding: 25px;
    border-radius: 8px;
    border: 1px solid #1f293d;
    box-shadow: 0 0 20px rgba(0, 255, 204, 0.1);
}

/* Status message display */
.status {
    margin-bottom: 20px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #ff007f;
    text-shadow: 0 0 5px rgba(255, 0, 127, 0.4);
}

/* Tic Tac Toe Grid Board */
.board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 20px;
}

/* Individual Grid Cells */
.cell {
    background-color: #0b0f19;
    border: 2px solid #233554;
    height: 90px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;
}

.cell:hover {
    border-color: #00ffcc;
    background-color: #1a2536;
    box-shadow: 0 0 10px rgba(0, 255, 204, 0.2);
}

/* Player Marks Styling */
.cell.x {
    color: #00ffcc;
    text-shadow: 0 0 10px rgba(0, 255, 204, 0.6);
}

.cell.o {
    color: #ff007f;
    text-shadow: 0 0 10px rgba(255, 0, 127, 0.6);
}

/* Reboot / Restart Button */
#restartBtn {
    background-color: transparent;
    color: #00ffcc;
    border: 2px solid #00ffcc;
    padding: 10px 20px;
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

#restartBtn:hover {
    background-color: #00ffcc;
    color: #0b0f19;
    box-shadow: 0 0 15px rgba(0, 255, 204, 0.5);
}

/* Footer styling */
footer {
    margin-top: 30px;
    color: #4a5568;
    font-size: 0.9rem;
}
