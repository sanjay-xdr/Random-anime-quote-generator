function generateRandomquote(){
    var clear=document.getElementById("center1");
    

    clear.innerText=""; 
    
    var clear=document.getElementById("center");
    

    clear.innerText=""; 
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
})};

const url="https://animechan.vercel.app/api/quotes/character?name=";


function searchQuote(){
    var clear=document.getElementById("center");
    

    clear.innerText=""; 
    var clear=document.getElementById("center1");
    

    clear.innerText=""; 
    var userName=document.querySelector("#input").value;
    var div=document.querySelector("#center1");
    var result=url.concat(userName);
    fetch(result)
.then(response => response.json())
.then(quote => {
    quote.forEach(element => {

        var spanTag=document.createElement("span");
        var quoteTag=document.createTextNode("Quote: "+ element.quote);
        spanTag.appendChild(quoteTag);
        var br = document.createElement("br");
        spanTag.appendChild(br);
        var br = document.createElement("br");
        spanTag.appendChild(br);
        div.appendChild(spanTag);
    
       
      
    
        
    });

}
)};