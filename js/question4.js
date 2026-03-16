class Question4{
    constructor(question, option1, option2){
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
    
        this.option1Button=createButton(this.option1);
        this.option1Button.style('font-size', '66px');
        this.option1Button.style('font-family', 'titleFont');
        this.option1Button.style('color', 'black');
        this.option1Button.position(width/3.8, height/1.5);
        this.option1Button.hide();
    
    
        this.option2Button=createButton(this.option2);
        this.option2Button.style('font-size', '66px');
        this.option2Button.style('font-family', 'titleFont');
        this.option2Button.style('color', 'black');
        this.option2Button.position(width/1.45, height/1.5);
        this.option2Button.hide();

        this.option1Button.style=('background-color', 'black');
        this.option2Button.style = ('background-color','black');
    
    }

    updatePosition(){
  this.option1Button.position(width*0.15, height*0.7);
  this.option2Button.position(width*0.55, height*0.7);
}

    display(){
        fill('white')
        textFont(titleFont); 
        textSize(100);
        textAlign(CENTER, CENTER)
        text(this.question, width/2, height/3);
    }
    show(){
        this.option1Button.show();
        this.option2Button.show();
    }
    hide(){
        this.option1Button.hide();
        this.option2Button.hide();
    }
}  