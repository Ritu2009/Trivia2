class Question {
    constructor(question, answer, levelState) {
        this.inputBox = createInput("egg",'text');
        this.checkButton = createButton("Check");
        this.congratulations= createElement('h2');

        this.question = question;
        this.answer = answer;
        this.levelState=levelState;
    }
    setElements(){
        this.inputBox.position(width/2-80, height/2);
       // this.inputBox.class("customInput");
        this.checkButton.position(width/2-60, height/2+80);
        this.checkButton.class("customButton");
    }

    display() {
        textSize(35);
        fill("white");
        text(this.question, width/3-100, height/2-50);
        this.setElements();
        this.handleMousePressed();
    }

    handleMousePressed(){
        this.checkButton.mousePressed(()=>{
            ans=this.inputBox.value();
            var a = ans.toLowerCase().trim();
            console.log(a);
            if(a == this.answer) {
                console.log("answer is "+ this.answer)
                textSize(35);
                fill("white");
                this.congratulations.html("You Won!")
                this.congratulations.position( width/2, height/2+200);
                planetState=this.levelState;
                console.log(planetState)
            }
        }
        )
    }

}