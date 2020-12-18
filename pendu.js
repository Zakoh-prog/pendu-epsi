alphabet = ['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
mots =["CHAROGNE","FACADE","PHONOGRAPHE","MARSUPILAMI","ANTILLAIS","MARACAS","MUGIWARA"];

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function word(){
    var tmp = getRandomInt(7);
    return mots[tmp];
}



function initialise(){
    var errors =0;
    mot = word();
    var aff ="";

    for(var i=0;i<mot.length;i++){
        aff+="_";
    }

    $('#lettres').empty();
    $('#mot').empty();
    $('#erreurs').empty();


    var txt = document.createElement('h3');
    txt.textContent = aff.split('').join(" ");
    $("#mot").append(txt);

    alphabet.forEach(element => {
        var tmp = document.createElement('button');
        tmp.textContent = element;
        tmp.style.margin = '8px 0 8px';
        tmp.addEventListener("click", function(){
            tmp.disabled = true;
            if(mot.indexOf(element)!=-1){

                var affichage = aff.replaceAll(' ','').split('');
                var index = rechercheIndex(mot,element)
                index.forEach(elem=>{
                    affichage[elem]=element;
                })

                aff = affichage.join(' ');
                txt.textContent= aff;
                if (!aff.includes("_")){
                    alert("VICTOIRE !")
                    $('#lettres').find('*').attr('disabled', true);
                    txt.textContent="VICTOIRE, TU AS TROUVÉ LE MOT : " + mot;
                }
            }else{
                alert("RATÉ");
                errors++;
                if(errors<7){
                    var erreur = "nombre d'erreurs: " + errors;
                    $('#erreurs').empty();
                    var err = document.createElement('h3');
                    err.textContent=erreur;
                    $('#erreurs').append(err);
                }else{
                    var erreur = "nombre d'erreurs: " + errors;
                    txt.textContent="PERDU, LE MOT ÉTAIT : " + mot;
                    $('#erreurs').empty();
                    var err = document.createElement('h2');
                    err.textContent=erreur;
                    $('#erreurs').append(err);
                    alert("Perdu")
                    $('#lettres').find('*').attr('disabled', true);

                }
            }
        });
        $("#lettres").append(tmp);
    });
}
//$(document).ready(initialise)

function rechercheIndex(wrd,letter){
    var test = wrd;
    var index=[];
    while(test.indexOf(letter)!=-1){
        index.push(test.indexOf(letter));
        test=test.replace(letter,"_");
    }
    return index;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
setInterval
