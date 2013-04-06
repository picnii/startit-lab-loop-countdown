function init()
{
	showInput();
}

function onSubmit()
{
	clearAll();
	var input = getInput();
	if(isNaN(input))
		echo('"'+input+'"'+" is not a number");
	else
	{
		input = Number(input);
		for(var i = 1 ; i <= input; i++)
			echo(i);
	}
	clearInput();
}