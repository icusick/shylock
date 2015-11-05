console.log('linked');

var $ledgerList = [];

$(document).ready(function() {

 var $input = $('#prompt');
 // var $inputValue = $input.val(); >can't put that there because the value at that moment is nothing so the value would ALWAYS be nothing
 var $log = $('#log');
 var purse = 10000;
 var $ledgerList = [];
 
 var shylockResponds = function() {
 	// var $listItemQuote = $('<li>');
 	// $listItemQuote.text('   ');
 	// $listItemQuote.addClass('quote');
 	// $log.append($listItemQuote);
 	var $inputValue = $input.val();
 	var $listItem = $('<li>');
 	var $actionArray = $inputValue.split(' ');
 	if ($inputValue === 'purse') {
 		var $actionText = 'Shylockbot whips out his purse containing ' + purse + ' ducats.'
 		$listItem.text($actionText);
 		$listItem.addClass('action');

 	} else if ($actionArray[0] === 'loan') {
 		// var $actionText = ' ducats.';	
 		// var $actionArray = $inputValue.split(' ');
 		var $amountLoaned = Number($actionArray[2]);
 		$listItem.text('Shylockbot gives ' + $actionArray[1] +' '+ $amountLoaned + ' ducats.');
 		$listItem.addClass('action');
 		var $ledgerList = [];
 		$ledgerList.push($listItem);
 		purse -= $amountLoaned; 

 		// need to get it so that when shylock gives someone money, that amount is deducted from the purse. so, thinking out loud here, we would need to parse the integer out of action text and subtract it from purse- julia recommends the split method
 		// these are from stackoverflow:
 		// string input = "RC 272";
		// int result = int.Parse(input.Substring(input.IndexOf(" ")));
		// string s = "RC 272";
		// int val = int.Parse(s.Split(' ')[1]); // val is 272
 	} else if ($inputValue === 'something') {
 		$listItem.text('this is a quote');
 		$listItem.addClass('quote');
 	} else if ($inputValue === 'ledger') {
 		// we want it to print li's that we got from 'loan' with the text changed around a bit--should i add an id to these when they are created? how else could i access them?
 		// maybe i could push each load item into an array as they're created and then have ledger reprint them 
 		$listItem.text
 	}
 	$log.append($listItem);
 };

 // object practice 
 // var something = {
 // 	name: "marvin",
 // 	age: 20,
 // 	height: "53cm",
 // };
 
 // var mavinsName = something.name;
 // something.weight = "200lbs";
 	
 
 var makeList = function(event) {
 	if (event.keyCode === 13) {
	 	var $inputValue = $input.val();
	 	var $listItem = $('<li>');
		$listItem.text($inputValue);
	 	$log.append($listItem);
	 	shylockResponds();
 	// if listItem has class of command,  
 	};
 };

 	$input.on('keypress', makeList);


 



});

// // trying out ledger where i've added a class called ledger to each loan li
// } else if ($inputValue === 'ledger') {
// 	// locate things with the class ledger:
// 	var ledgerli = $('.ledger');
// 	// 
// // trying out ledger where i've pushed each loan li into an array called loanli
// } else if ($inputValue === 'ledger') {
// // loanli will be an array of strings. we want to do this to each element: first: split it up and save it to a new array which we will call loanlisplit (loanli will now be an array of arrays) and rearrange them according to loanlisplit[1] + ' owes' + loansplit[2]
// // loanli = ["loan fred 500", "loan bob 100", "loan lesle 200"] 
// // loanli[0].split // returns ["loan", "fred", "500"]
// // loanli[1].split // returns ["loan", "bob", "100"]
// // loanli[2].split // returns ["loan", "leslie", "200"] == save all these to loansliSplit and we have loansliSplit = [["loan", "fred", "500"], ["loan", "bob", "100"], ["loan", "leslie", "200"]]
// // for (var i = 0; i < array.length, i++) {
// // 	loanli[i].split(' ');
// // } 
// var splitLoans = loanli.map(function(word) {
// 	return word.split(' ');
// })
// var rearrangedLoans = splitLoans.map(function(array) {
// 	return array[1] +' owes '+ array[2]; 
// })

// // now i have an array (rearrangedLoans) which has the strings that i want to print. need to print each one as a new li 
// $listItem.text(rearrangedLoans[i]);
// i++;

















	