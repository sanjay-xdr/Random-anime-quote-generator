fetch('https://animechan.vercel.app/api/random')
.then(response => response.json())
.then(quote => {

    var div=document.querySelector("#center")

    var spanTag=document.createElement("span");
    var quoteTag=document.createTextNode(quote.anime);
    spanTag.appendChild(quoteTag);

    div.appendChild(spanTag);


    // console.log("Anime name is " + quote.anime);
    // console.log("From Character "+quote.character);
    // console.log("Quote "+quote.quote);
}








)


