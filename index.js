
            let play = 0;
            let opp = 0;
           
            function count(e){           
                return e +=1;
            }

            function reset(){
                play = 0;
                opp = 0;
                document.getElementById("opp").innerHTML = opp;
                document.getElementById("play").innerHTML = play;
                document.getElementById("pick").innerHTML = "???";
                document.getElementById("choice").innerHTML = "???";
                document.getElementById("outcome").innerHTML = "Click To Start!!!";
            }

            
            function startGame(e){
                let comp = Math.floor(Math.random()*3);
                let outcome="";
                let choice1="";
                let choice2="";
                
                if(e == 0){
                    choice1="rock";
                    if(comp==0){
                        choice2="rock";
                        outcome="It's A Draw";
                    } else if(comp==1){
                        choice2="paper";
                        outcome="You Lose";
                        opp = count(opp);
                        document.getElementById("opp").innerHTML = opp;
                    } else if(comp==2){
                        choice2="scissors";
                        outcome="You Win!!!";
                        play = count(play);
                        document.getElementById("play").innerHTML = play;
                    }
                }
                if(e==1){
                    choice1="paper";
                    if(comp==0){
                        choice2="rock";
                        outcome="You Win!!!";
                        play = count(play);
                        document.getElementById("play").innerHTML = play;
                    } else if(comp==1){
                        choice2="paper";
                        outcome="It's A Draw";
                    } else if(comp==2){
                        choice2="scissors";
                        outcome="You Lose";
                        opp = count(opp);
                        document.getElementById("opp").innerHTML =opp;
                    }
                }
                if(e==2){
                    choice1="scissor";
                    if(comp==0){
                        choice2="rock";
                        outcome="You Lose";
                        opp = count(opp);
                        document.getElementById("opp").innerHTML =opp
                    } else if(comp==1){
                        choice2="paper";
                        outcome="You Win!!!";
                        play = count(play);
                        document.getElementById("play").innerHTML = play
                    } else if(comp==2){
                        choice2="scissors";
                        outcome="It's A Draw";
                    }
                }
                document.getElementById("pick").innerHTML = choice1;
                document.getElementById("choice").innerHTML = choice2;
                document.getElementById("outcome").innerHTML = outcome;
                console.log(outcome + "(" +"You: "+ choice1+ " & Computer: "+ choice2+")");
                console.log("(" +"You: "+ play+ " & Computer: "+ opp+")");
            }