
// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {
//   console.log('I did it! I linked jQuery and this js file!')
// };

$(() => {
	// put jQuery in here
});

$container = $('#container');
console.log($container);


let $h1 = $('body').append('<h1>Hello</h1>'); // ?
console.log($h1);

// ?
let $h2 = $('<h2/>');
$h2.append('Here is some text');
console.log($h2);

$('body').append('<h2>Michael</h2>');
$('body').append('<h3>Gryffindor</h3>');
$('body').append('<h4 class="cat">Bentley</h4>');

$('body').append('<img src="https://imgur.com/IsXodex.jpg">');
