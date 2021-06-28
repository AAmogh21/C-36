class Form{
  constructor(){
  }
  
display(){

 var title = createElement('h2')
 title.html("Car Racing Game")
 title.position(1000,100)


 var input = createInput("Name")
 input.position(1000,300)


 var button = createButton('PLAY')
 button.position(1100,350)


 var greetings = createElement('h3')
 button.mousePressed(function(){
  input.hide();
  button.hide();
  title.hide();

  var name = input.value();

  playerCount += 1;
  player.update(name);
  player.updateCount(playerCount);

  greetings.html("Hello  " + name);
  greetings.position(1000,165)

 })
    
}

}