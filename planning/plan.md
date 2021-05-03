# Tic Tac Toe Project

---

### Technical Requirements

Your app must:

- **Render a game in the browser**
- **Switch turns** between more than one player
- **Design logic for winning** & **visually display which player won**
- **Include separate HTML / CSS / JavaScript files**
- Stick with **KISS (Keep It Simple Stupid)** principles
- Use **Javascript** for **DOM manipulation**
- **Deploy your game online**, where the rest of the world can access it
- Use **semantic markup** for HTML and CSS (adhere to best practices)

---

### Bonus extensions

These are for extra credit! DON'T focus on these until you've hit the core requirements.

- Keep track of multiple game rounds with a win counter
- Allow game customizable options, time limits, board size, game rounds, name & profiles etc
- Allow players to customize their token (X, O, name, picture, avatar etc)
- Get inventive with your styling - research CSS effects, animations to spiff things up
- **Research** **LocalStorage** or **SessionStorage** to persist data locally to allow games to continue after page refresh or loss of internet connectivity
- Use timers to display "waiting..." messages while users are waiting to be matched
- **Research** web audio API and add sound effects to your game
- Be creative! Bend the rules and give it a twist!

---

there will be a css grid to give the 3 x 3 squares
the x and o will be innerText in a div of the grid
will need to find appropriate font --done
there's two players - each player will have one move each turn
there's 8 possible ways of winning - 3 columns, 3 rows, and 2 verticals
create a way to check all possible ways of winning
display which user won, if any, otherwise display that no one won

---

#### CSS

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
font-family: 'Rubik', sans-serif;

---

#### logic

- (main loop) loop through the whole grid
  &emsp; - after each movement
  &emsp; &emsp; - (inner loop) check all possible winning combinations
  &emsp; &emsp; &emsp; - column1, column2, column3, row1, row2, row3, diagonal1, diagonal2
  &emsp; &emsp; &emsp; - if win display alert
  &emsp; &emsp; &emsp; - else break
