# Prevent the Fall of Anakin

## Overview
**Prevent the Fall of Anakin** is an interactive narrative game inspired by the events leading up to Anakin Skywalker’s fall to the Dark Side.  
Players are presented with key moments in Anakin’s story and must make decisions that influence the outcome. Each choice leads to different narrative branches and endings.

The goal is to explore whether Anakin’s fate could have been changed through different decisions.

The game is built using **JavaScript and p5.js**, using a state-based system to control scenes, images, video, and player choices.

---

## How the Game Works
The game progresses through a series of **decision nodes**.  
At each node, the player chooses between two options that lead to different outcomes.

Possible endings include:
- A peaceful life with Padmé
- Anakin turning to the Dark Side
- Anakin dying during the confrontation with the Chancellor

---

## Controls

| Key / Button | Function |
|---------------|----------|
| **INSTRUCTIONS** | Plays the instruction video |
| **START** | Begins the game |
| **SKIP** | Skips the instructions video |
| **Choice Buttons** | Select narrative decisions |
| **RESTART** | Returns to the start screen |
| **F** | Toggle fullscreen mode |

---

## How to Run the Game

### Option 1 (Recommended) – Using VS Code with Live Server
1. Install **Visual Studio Code**.
2. Install the **Live Server** extension.
3. Open the project folder in VS Code.
4. Right-click the main HTML file (usually `index.html`).
5. Click **Open with Live Server**.
6. The game will open automatically in your browser.

---

### Option 2 – Run Directly in a Browser
1. Open the project folder.
2. Double-click the `index.html` file.
3. The game will launch in your default browser.

Note: Some browsers may restrict video or audio playback when opening files directly. If this happens, use **Live Server** instead.

---

## Project Structure

```
project-folder
│
├── index.html
├── sketch.js
│
├── images/
│   ├── scene backgrounds
│   ├── ending images
│
├── sounds/
│   └── background soundtrack
│
├── fonts/
│   └── Star Wars themed fonts
│
└── instructions video
```