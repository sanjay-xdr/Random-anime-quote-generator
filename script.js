fetch('https://animechan.vercel.app/api/random')
.then(response => response.json())
.then(quote => {

    var div=document.querySelector("#center")

    var spanTag=document.createElement("span");
    var quoteTag=document.createTextNode("Aniime Name is: "+ quote.anime);
    spanTag.appendChild(quoteTag);

    var br = document.createElement("br");
spanTag.appendChild(br);

    var spanTagChar=document.createElement("span");
    var quoteTagChar=document.createTextNode("Spoken by Character: "+quote.character);
    spanTagChar.appendChild(quoteTagChar);

  
    var br = document.createElement("br");
spanTagChar.appendChild(br);



    var spanTagQuote=document.createElement("span");
    var quoteTagQuote=document.createTextNode("Quote: "+quote.quote);
    spanTagQuote.appendChild(quoteTagQuote);

    var br = document.createElement("br");
    spanTagQuote.appendChild(br);
    

    div.appendChild(spanTag);
    div.appendChild(spanTagChar);
    div.appendChild(spanTagQuote);


    // console.log("Anime name is " + quote.anime);
    // console.log("From Character "+quote.character);
    // console.log("Quote "+quote.quote);
}








)


