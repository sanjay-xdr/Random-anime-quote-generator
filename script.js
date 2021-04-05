fetch('https://animechan.vercel.app/api/random')
.then(response => response.json())
.then(quote => {

    var div=document.querySelector("#center")

    var spanTag=document.createElement("span");
    var quoteTag=document.createTextNode("Aniime Name is: "+ quote.anime);
    spanTag.appendChild(quoteTag);

    var spanTagChar=document.createElement("span");
    var quoteTagChar=document.createTextNode("Spoken by Character: "+quote.character);
    spanTag.appendChild(quoteTagChar);


    var spanTagQuote=document.createElement("span");
    var quoteTagQuote=document.createTextNode("Quote: "+quote.quote);
    spanTag.appendChild(quoteTagQuote);

    div.appendChild(spanTag);
    div.appendChild(spanTagChar);
    div.appendChild(spanTagQuote);


    // console.log("Anime name is " + quote.anime);
    // console.log("From Character "+quote.character);
    // console.log("Quote "+quote.quote);
}








)


