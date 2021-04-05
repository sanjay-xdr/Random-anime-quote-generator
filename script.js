fetch('https://animechan.vercel.app/api/random')
.then(response => response.json())
.then(quote => {



    


    console.log("Anime name is " + quote.anime);
    console.log("From Character "+quote.character);
    console.log("Quote "+quote.quote);
}








)


