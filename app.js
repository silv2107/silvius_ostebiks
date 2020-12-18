var container = document.querySelector(".container");
var previousLink = document.querySelector(".previous");
var nextLink = document.querySelector(".next");

//læser adressen i min browser hver gang den reloader
var offset = new URLSearchParams(window.location.search).get("offset") || 0;

fetch(`https://osteapi-silviu.herokuapp.com/api/v1/cheeses/?offset=${offset}`)
    .then(res=> res.json())
    .then(function(cheeses){
        // console.log(cheeses);
        // console.log(cheeses.next);//cheeses.next er en string

        //indstiller next og previous href 
        var next = {};
        var previous = {};
        //hvis der er et url link
        if(cheeses.next){
            //fyld next objektet med formatteret objekt (fra string cheeses.next)
            next = new URL(cheeses.next);
            // console.log(next);
        }else{
            next.search = "";
        }

        // console.log(next);
       
        if(cheeses.previous){
            previous = new URL(cheeses.previous);
        }else{
            previous.search = "";
        }

        //indstil href i nextLink og previousLink. Search er en metode i next objektet
        nextLink.href = next.search;
        previousLink.href = previous.search;

        cheeses.results.forEach(cheese => {
            var atag = document.createElement("a")
            atag.innerText = cheese.name;
            atag.href = "details.html?id=" + cheese._id;
            container.appendChild(atag);
        });
    })

    //aTag href indstilles med ?id=cheese.id, hvilket betyder at man på details.js kan finde oste id'et og 
    //bruge det til at kreere oste på details.html

    