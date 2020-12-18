// api'et giver mulighed for at indhente et ost https://osteapi-silviu.herokuapp.com/api/v1/cheeses/:id
// når man trykker på en ost fra index.html siden så bliver id'et fundet når man taster url.get("id")
// når man tilføjer url.get("id"), dvs id'et i sin fetch kald har man adgang til enkeltvisning/detaljevisning af 
// af pågældende ost
var wrapper = document.querySelector(".wrapper1");
var url = new URLSearchParams(window.location.search);

// console.log(url.get("id"));

fetch(`https://osteapi-silviu.herokuapp.com/api/v1/cheeses/${url.get("id")}`)
    .then(res=> res.json())
    .then(function(cheese){
        // console.log(cheese);
        var h2 = document.createElement("h2");
        h2.innerText = cheese.name;
        wrapper.appendChild(h2);

        //pris
        var sectionPrice = document.createElement("section");
        sectionPrice.classList.add("priceContainer")
        wrapper.appendChild(sectionPrice);

        var price = document.createElement("p");
        price.innerText = "Pris i DKK: "
        sectionPrice.appendChild(price);

        var priceAmount = document.createElement("p");
        priceAmount.innerText = cheese.price.$numberDecimal;
        sectionPrice.appendChild(priceAmount);

        //vægt
        var sectionWeight = document.createElement("section");
        sectionWeight.classList.add("weightContainer")
        wrapper.appendChild(sectionWeight);

        var weight = document.createElement("p");
        weight.innerText = "Vægt i KG: "
        sectionWeight.appendChild(weight);

        var weightAmount = document.createElement("p");
        weightAmount.innerText = cheese.weight;
        sectionWeight.appendChild(weightAmount);

        //strength
        var sectionStrength = document.createElement("section");
        sectionStrength.classList.add("strengthContainer")
        wrapper.appendChild(sectionStrength);

        var strength = document.createElement("p");
        strength.innerText = "Styrke:" 
        sectionStrength.appendChild(strength);

        var strengthAmount = document.createElement("p");
        strengthAmount.innerText = cheese.strength;
        sectionStrength.appendChild(strengthAmount);
    })