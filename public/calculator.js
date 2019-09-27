var x = document.getElementsByClassName("grades")
/*var i = 0;
while (i < 8)
{
	var f = i;
	x[f].addEventListener("keyup", function()
	{
		var string = "G".concat(f.toString());

		var grade1 = document.getElementById(string).value;
		var grade2 = document.getElementById(string).value;
		if (grade1 && grade2)
		{
			var returnValue = parseInt(grade1,10)/parseInt(grade2,10);
			document.getElementsByClassName("percent")[f/2].innerHTML = returnValue;
		}
	});
	console.log(i);
	i++;
}*/
x[0].addEventListener("keyup", function()
{
	var grade1 = document.getElementById("G0").value;
	var grade2 = document.getElementById("G1").value;
	if (!isNaN(grade1) && !isNaN(grade2))
	{
		var returnValue = parseInt(grade1,10)/parseInt(grade2,10);
		if(!isNaN(returnValue))
			document.getElementById("P0").innerHTML = returnValue;
	}
	else
	{
		document.getElementById("P0").innerHTML = "Error, one of your input is invalid";
	}
});

x[1].addEventListener("keyup", function()
{
	var grade1 = document.getElementById("G0").value;
	var grade2 = document.getElementById("G1").value;
	if (!isNaN(grade1) && !isNaN(grade2))
	{
		var returnValue = parseInt(grade1,10)/parseInt(grade2,10);
		if (!isNaN(returnValue))
			document.getElementById("P0").innerHTML = returnValue;
	}
	else
	{
		document.getElementById("P0").innerHTML = "Error, one of your input is invalid";
	}
});

x[2].addEventListener("keyup", function()
{
	var grade1 = document.getElementById("G2").value;
	var grade2 = document.getElementById("G3").value;
	if (!isNaN(grade1) && !isNaN(grade2))
	{
		var returnValue = parseInt(grade1,10)/parseInt(grade2,10);
		if (!isNaN(returnValue))
			document.getElementById("P1").innerHTML = returnValue;
	}
	else
	{
		document.getElementById("P1").innerHTML = "Error, one of your input is invalid";
	}
});

x[3].addEventListener("keyup", function()
{
	var grade1 = document.getElementById("G2").value;
	var grade2 = document.getElementById("G3").value;
	if (!isNaN(grade1) && !isNaN(grade2))
	{
		var returnValue = parseInt(grade1,10)/parseInt(grade2,10);
		if (!isNaN(returnValue))
			document.getElementById("P1").innerHTML = returnValue;
	}
	else
	{
		document.getElementById("P1").innerHTML = "Error, one of your input is invalid";
	}
});

x[4].addEventListener("keyup", function()
{
	var grade1 = document.getElementById("G4").value;
	var grade2 = document.getElementById("G5").value;
	if (!isNaN(grade1) && !isNaN(grade2))
	{
		var returnValue = parseInt(grade1,10)/parseInt(grade2,10);
		if(!isNaN(returnValue))
			document.getElementById("P2").innerHTML = returnValue;
	}
	else
	{
		document.getElementById("P2").innerHTML = "Error, one of your input is invalid";
	}
});

x[5].addEventListener("keyup", function()
{
	var grade1 = document.getElementById("G4").value;
	var grade2 = document.getElementById("G5").value;
	if (!isNaN(grade1) && !isNaN(grade2))
	{
		var returnValue = parseInt(grade1,10)/parseInt(grade2,10);
		if(!isNaN(returnValue))
			document.getElementById("P2").innerHTML = returnValue;
	}
	else
	{
		document.getElementById("P2").innerHTML = "Error, one of your input is invalid";
	}
});

x[6].addEventListener("keyup", function()
{
	var grade1 = document.getElementById("G6").value;
	var grade2 = document.getElementById("G7").value;
	if (!isNaN(grade1) && !isNaN(grade2))
	{
		var returnValue = parseInt(grade1,10)/parseInt(grade2,10);
		if(!isNaN(returnValue))
		{
			document.getElementById("P3").innerHTML = returnValue;
		}
	}
	else
	{
		document.getElementById("P3").innerHTML = "Error, one of your input is invalid";
	}
});

x[7].addEventListener("keyup", function()
{
	var grade1 = document.getElementById("G6").value;
	var grade2 = document.getElementById("G7").value;
	if (!isNaN(grade1) && !isNaN(grade2))
	{
		var returnValue = parseInt(grade1,10)/parseInt(grade2,10);
		if(!isNaN(returnValue))
		{
			document.getElementById("P3").innerHTML = returnValue;
		}
	}
	else
	{
		document.getElementById("P3").innerHTML = "Error, one of your input is invalid";
	}
	
});

var weightButton = document.getElementById("weighted");
var meanButton = document.getElementById("mean");

weightButton.addEventListener('click', function(){
	var weight = document.getElementsByClassName("weight");
	var percent = document.getElementsByClassName("percent");
	var totalWeight = 0;
	var result = 0;
	for (var i = 0; i < weight.length; ++i)
	{
		if (percent[i].innerHTML !== "" && weight[i].value !== "")
		{
			totalWeight += parseFloat(weight[i].value);
			result += parseFloat(percent[i].innerHTML)*parseFloat(weight[i].value);
		}
	}
	result = result/totalWeight;
	var resultRounded = result.toFixed(3);
	if (isNaN(resultRounded))
	{
		document.getElementById("result").innerHTML = "Error, one or more of your input is invalid.";
	}
	else
	{
		document.getElementById("result").innerHTML = resultRounded;
	}
});

meanButton.addEventListener('click', function()
{
	var percent = document.getElementsByClassName("percent");
	var activity = percent.length;
	var result = 0;
	for (var i = 0; i < percent.length; ++i)
	{
		if (percent[i].innerHTML !== "")
			result = result + parseFloat(percent[i].innerHTML);
		
	}
	result = parseFloat(result/activity);
	var resultRounded = result.toFixed(3);
	if (isNaN(resultRounded))
	{
		document.getElementById("result").innerHTML = "Error, one or more of your input is invalid.";
	}
	else
	{
		document.getElementById("result").innerHTML = resultRounded;
	}
});

function deleteRow(r)
{
	var i = r.parentNode.parentNode.rowIndex;
  	document.getElementById("calculator").deleteRow(i);
}

