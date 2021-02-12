function getNewQuote() {
  fetch('https://api.quotable.io/random').
  then(response => response.json()).
  then(data => updateQuoteBox(data)).
  catch(err => console.log(err));
}

function updateQuoteBox(data) {
  $('#text').text(data.content);
  $('#author').text(data.author);

  $('#tweet-quote').attr(
  'href',
  'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
  encodeURIComponent('"' + data.content + '" ' + data.author));

}

$('#new-quote').on('click', getNewQuote);

getNewQuote();