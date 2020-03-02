# bubble_trouble
A shooter game. pop the different shapes to clear the levels.

## Functionality & MVP
### In misshapen, users will be able to:
* move the their player around ( day 1-2 )
    * use arrow keys to move left and right
    * use space to shoot the bubbles
* shoot shapes and pop them ( day 2-3 )
    * when a shape is poped it splits to 2 smaller shapes
    * the bigger the shape is the higher it jumps
    * when a shape pops it goes up a little bit
    * if a shape hits the spikes it pops
    * each level will have different shapes positioned in a different starting position
* collect gifts (money, more time, lives) that sometimes fall after poping a bubble ( day 5 )
    * randomly fall from poped shapes
    * money will fall more then time exstention, and lives will fall down very rearly
    * 
* lose lives if they hit a shape or run out of time ( day 3-4 )
    * each level will have a different time based on how much time it should take
    
### In addition, this project will include:
* different levels
* nice background music
### Bonus
* popping bubbles will also drop different kinds of weapons the user can use
* two players optional
* save high scores across sessions 

## wire frams
https://wireframe.cc/iNSSqu

* board component
* player component
    * collect gift function
    * death function

* spikes component
    * pop function
* timer component
* gifts components
    * money
    * life
    * time
    * randomize gifts
* lives counter component
* game component
    * game over function
    * restart level function
    * game loop function
* shapes components
    * triangle/pyramid
    * square/cube
    * circle/bubble
    * pop function
    * set on board function

## technologies 

* canvas
* three.js