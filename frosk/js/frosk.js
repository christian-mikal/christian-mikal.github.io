//@ts-check

function setup() {

    document.getElementById("resten").style.display = "none";
    document.getElementById("spm").style.display = "none";
    document.getElementById("spm2").style.display = "none";


    let svar = document.getElementById("sesvar");
    svar.addEventListener("click", seSvar);
    
    function seSvar() {
        document.getElementById("spm").style.display = "none";
        document.getElementById("melding").innerHTML = "Du vil ikke inngå et tvangsekteskap!"
    }

    let alder = document.getElementById("alder");
    let lagre = document.getElementById("lagreAlder");
    lagre.addEventListener("click", lagreAlder);

    let mann = document.getElementById("question-1-answers-A");
    mann.addEventListener("click", visSpm2);

    function visSpm2() {
        document.getElementById("spm2").style.display = "block";
    }
    
    function lagreAlder() {
        if (alder.value > 10 ){
            document.getElementById("sjekk").style.display = "none";
            document.getElementById("spm").style.display = "block";
            var source = "../media/fortnite.mp3"
            var audio = document.createElement("audio");
            //
            audio.autoplay = true;
            //
            audio.load()
            audio.addEventListener("load", function() { 
                audio.play(); 
            }, true);
            audio.src = source;
        }
    }
    
    

    let question1B = document.getElementById("question-1-answers-B");
    question1B.addEventListener("click", goAway);

    let question2A = document.getElementById("question-2-answers-A");
    question2A.addEventListener("click", vegetarianer);

    let question2B = document.getElementById("question-2-answers-B");
    question2B.addEventListener("click", visResten);


    function visResten() {

        document.getElementById("resten").style.display = "block";
    }

    function vegetarianer() {
        location.href = "../html/error.html";
    }

    function goAway() {
        location.href = "../html/error.html";
        return;

    }

}