
var ul = document.getElementById('ul');
var btn = document.getElementById('button');
var scoreCard = document.getElementById('scoreCard');
var quizBox = document.getElementById('questionContainer');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var tleft=document.getElementById('timeleft');
var progresslength=document.getElementsByClassName("progress-bar")[0];
var lessthan5=document.getElementById("btnchange");
var maxtime=20;
var oldindex=0;
var optionsarray=["A) ","B) ","C) ","D) "];
var app = {
    questions: [
        { q:'How many letters are there in the English alphabet?', 
        options: ['26','25','27','24'], 
        answer:1
        },       

        { q:'Which animal is known as the ‘Ship of the Desert?’', 
        options: ['Yak','Goat','Ox','Camel'], 
        answer:4
        },

        { q:'Which day comes after Friday', options: ['Saturday','Sunday','Monday','Tuesday'], answer:1},

        { q:'How many days are there in a year?', options: ['367','365','364','363'], answer:2},

        { q:'How many colors are there in a rainbow?', options: ['6','7','8','9'], answer:2},

        { q:'Which first electrical item did Thomas Edison invent?', options: ['TubeLight','TV','Fridge','Bulb'], answer:4},

        { q:'How many straight edges does a cube have?', options: ['11','12','13','14'], answer:2},

        { q:'During which year did World War I begin?', options: ['1910','1914','1919','1945'], answer:2},

        { q:' Which state is known as Indias Spice Garden?', options: ['UP','Kerala','Bihar','Rajasthan'], answer:2},

        { q:'Which sport does Saina Nehwal play?', options: ['Cricket','Badminton','Tennis','Squash'], answer:2},
    ]
}


var index=0;
    
var score=0;
function scoreCard1() {
    scoreCard.innerHTML=this.score+"/"+this.app.questions.length;
}
    //options
    function load() {
        console.log(this.index);
        if(this.index<=this.app.questions.length-1){
        quizBox.innerHTML = this.index+1 +". "+ this.app.questions[this.index].q;
        opt1.innerHTML = optionsarray[0]+this.app.questions[this.index].options[0];
        opt2.innerHTML = optionsarray[1]+this.app.questions[this.index].options[1];
        opt3.innerHTML = optionsarray[2]+this.app.questions[this.index].options[2];
        opt4.innerHTML = optionsarray[3]+this.app.questions[this.index].options[3];
                scoreCard1();
        }
        else{
            
        quizBox.innerHTML = "QUIZ IS OVER ! ";
    
        opt1.style.display="none";
        opt2.style.display="none";
        opt3.style.display="none";
        opt4.style.display="none";
        btn.style.display="none";
        maxtime=5;
        setTimeout(function(){
        window.location.href="thankyou.html";
        },4000);

        }
    }

    //loads next question
    function next() {
        // Increase index
        this.index++;
        // Change background to original color
        opt1.style.backgroundColor="navy";
        opt2.style.backgroundColor="navy";
        opt3.style.backgroundColor="navy";
        opt4.style.backgroundColor="navy";
        // working for progress bar
        maxtime=20;
        var multiplyingfactor=(parseFloat(100))/this.app.questions.length;
        var value=this.index*multiplyingfactor;
        var valueinpercentage=value+"%";
        progresslength.style.width=valueinpercentage;
        // work ends for progress bar
        clickAble();
        load();
    }

    //check if an answer is correct.
    function check(e){
        
        var id=e.id.split('');
        if(id[id.length-1]==this.app.questions[this.index].answer){
            this.score++;
            e.className="correct";
            e.innerHTML="Correct";
            e.style.backgroundColor="green";
            scoreCard1();
        }else {
            e.className="wrong";
            e.innerHTML="Wrong";
            e.style.backgroundColor="red";
        }
        
        
    }

    //prevent other option from been clickable after u have clicked one option.
    function notClickAble() {
        for (var i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";
        }
    }

    function clickAble() {
        for (var i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].className=''
        }
    }
    function timer(){
        
        setTimeout(timer,1000);
        tleft.innerHTML=maxtime+"s";
        maxtime=maxtime-1;
        lessthan5.style.backgroundColor="aqua";
            lessthan5.style.color="black";
        if(maxtime<0)
        {
            window.location.href="thankyou.html";
        }
        if(maxtime<5)
        {
            lessthan5.style.backgroundColor="red";
            lessthan5.style.color="yellow";
        }
        
    }


    function button(e) {
        console.log("Clicked");
        check(e);
        notClickAble();
        
    }
    
window.onload=function(){
    timer();
};
load();


