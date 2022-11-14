function quizfinish(){
    if (score >= 10){
        location.href="RESULTSPage.html";
    }
    else{
        location.href="RESULTSPageFailed.html";
    }
}