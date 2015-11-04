console.log('linked');

$(document).ready(function() {

 var $input = $('#prompt');
 // var $inputValue = $input.val(); >can't put that there because the value at that moment is nothing so the value would ALWAYS be nothing
 var $log = $('#log');
 var purse = 10000;
 
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
 		purse -= $amountLoaned; 
 		// need to get it so that when shylock gives someone money, that amount is deducted from the purse. so, thinking out loud here, we would need to parse the integer out of action text and subtract it from purse- julia recommends the split method
 		// string input = "RC 272";
		// int result = int.Parse(input.Substring(input.IndexOf(" ")));
		// string s = "RC 272";
		// int val = int.Parse(s.Split(' ')[1]); // val is 272
 	} else if ($inputValue === 'something') {
 		$listItem.text('this is a quote');
 		$listItem.addClass('quote');
 	} else if ($inputValue === 'ledger') {
 		// we want it to print li's that we got from 'loan' with the text changed around a bit--should i add an id to these when they are created? how else could i access them?
 		$listItem.text
 	}
 	$log.append($listItem);
 };
 
 	
 
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

















	