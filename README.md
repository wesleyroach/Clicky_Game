# Clicky_Game

Click on an image to earn points, but don't click on any more than once!

FLOW

1.  onClick of selected player, store id in props.id to use in a function (save id to array)
2.  run function to store id in an array of selections
3.  check if the id has already been selected
4.  if id already click then msg end game
5.  if id not selected enable another selection
6.  create function to check if score > highest score, if so, update new highest score
7.  run function to rearrange the order of tiles prior to the next guess

CONST
message: "You guessed incorrectly"
message: "You guessed correctly"
id ?
top score (state)
new game (State, score = 0)

FUNCTIONS

1. save id to array
2. check if id already clicked
3. end the game
4. make current score the highest score
