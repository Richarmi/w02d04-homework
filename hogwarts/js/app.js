
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
$('body').append('<h4>Bentley</h4>');








// //const $li = $('<li></li>')
//
// // short hand for the above; This is creating an element
// const $li = $('<li/>');
//
// // We want to add a new fruit to the
// // unordered list in our html on the dom
// // and we want the fruit called orange
//
// // create a new fruit
// // create a new element
// const $li2 = $('<span/>')
// const $li = $('<li/>');
// // So now lets give the fruit a name
// // adding text to an html element
// $li.text('orange');
//
// // grab the unordered list (selecting an element)
// $ul = $('ul');
//
// $ul.append($li);
// $ul.append('<li>Grape</li>');
//
// $ul.append('<li>Pear</li>');
// $ul.append('<li>Tomato</li>');
