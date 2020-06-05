
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
                document.getElementById("pick").innerHTML = "Your Choice";
                document.getElementById("choice").innerHTML = "Opponent's Choice";
                document.getElementById("outcome").innerHTML = "Click To Start!!!";
            }

            function checkWinner(a,b){
                if(a== 5){
                    document.getElementById("outcome").innerHTML = "Player Wins!!!"
                } else if(b== 5){
                    document.getElementById("outcome").innerHTML = "Computer Win!!!"
                }
            }

            
            function startGame(e){
                
                if(opp <5 && play <5){
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
                            document.getElementById("opp").innerHTML = (opp+"/5");
                        } else if(comp==2){
                            choice2="scissors";
                            outcome="You Win!!!";
                            play = count(play);
                            document.getElementById("play").innerHTML = (play+"/5");
                        }
                    }
                    if(e==1){
                        choice1="paper";
                        if(comp==0){
                            choice2="rock";
                            outcome="You Win!!!";
                            play = count(play);
                            document.getElementById("play").innerHTML = (play+"/5");
                        } else if(comp==1){
                            choice2="paper";
                            outcome="It's A Draw";
                        } else if(comp==2){
                            choice2="scissors";
                            outcome="You Lose";
                            opp = count(opp);
                            document.getElementById("opp").innerHTML =(opp+"/5");
                        }
                    }
                    if(e==2){
                        choice1="scissor";
                        if(comp==0){
                            choice2="rock";
                            outcome="You Lose";
                            opp = count(opp);
                            document.getElementById("opp").innerHTML =(opp+"/5")
                        } else if(comp==1){
                            choice2="paper";
                            outcome="You Win!!!";
                            play = count(play);
                            document.getElementById("play").innerHTML = (play+"/5")
                        } else if(comp==2){
                            choice2="scissors";
                            outcome="It's A Draw";
                        }
                    }
                    document.getElementById("pick").innerHTML = choice1;
                    document.getElementById("choice").innerHTML = choice2;
                    document.getElementById("outcome").innerHTML = outcome;
                    checkWinner(play, opp)
                }
                
            }