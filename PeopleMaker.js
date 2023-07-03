//========================
//Administrative Variables
//========================

	//-----------------------
	//Random Number Generator
	//-----------------------
	function getRandomInt(min, max)
	{
		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	//------
	//Colors
	//------
	var lightRed = "#ff0000";
	var darkRed = "#660000";
	var lightBlue = "#0099ff";
	var darkBlue = "#002966";
	var lightGreen = "#33cc33";
	var darkGreen = "#145214";
	var lightGold = "#e6e600";/*40%*/
	var darkGold = "#666600";/*20%*/
	
var images =
[
	//images[0] = background
	[
		lightGrey=
		{
			Name: "Light Grey Background",
			Image: "Images/Backgrounds/Background_LightGrey.png"
		},
		mediumGrey=
		{
			Name: "Medium Grey Background",
			Image: "Images/Backgrounds/Background_MediumGrey.png"
		}
	],
	
	//images[1] = Male Torsos
	[
		maleTorso1=
		{
			Name: "Male Torso 1",
			Image: "Images/Torsos/MaleTorso1.png"
		}
	],
	
	//images[2] = Female Torsos
	[
		femaleTorso1=
		{
			Name: "Female Torso 1",
			Image: "Images/Torsos/FemaleTorso1.png"
		}
	],
	//images[3] = Male Necks
	[
		maleNeck1=
		{
			Name: "Male Neck 1",
			Image: "Images/Necks/MaleNeck1.png"
		}
	],
	//images[4] = Female Necks
	[
		femaleNeck1=
		{
			Name: "Female Neck 1",
			Image: "Images/Necks/FemaleNeck1.png"
		}
	],
	//images[5] = Male Shirts
	[
		maleShirt1=
		{
			Name: "Male Shirt Black",
			Image: "Images/Shirts/MaleShirtBlack.png"
		},
		maleShirt2=
		{
			Name: "Male Shirt Purple",
			Image: "Images/Shirts/MaleShirtPurple.png"
		},
		maleShirt3=
		{
			Name: "Male Shirt Blue",
			Image: "Images/Shirts/MaleShirtBlue.png"
		},
		maleShirt4=
		{
			Name: "Male Shirt Green",
			Image: "Images/Shirts/MaleShirtGreen.png"
		},
		maleShirt5=
		{
			Name: "Male Shirt Brown",
			Image: "Images/Shirts/MaleShirtBrown.png"
		},
		maleShirt6=
		{
			Name: "Male Shirt Red",
			Image: "Images/Shirts/MaleShirtRed.png"
		},
		maleShirt7=
		{
			Name: "Male Shirt White",
			Image: "Images/Shirts/MaleShirtWhite.png"
		}
	],
	//images[6] = Female Shirts
	[
		femaleShirt1=
		{
			Name: "Female Shirt Black",
			Image: "Images/Shirts/FemaleShirtBlack.png"
		},
		femaleShirt2=
		{
			Name: "Female Shirt Aqua",
			Image: "Images/Shirts/FemaleShirtAqua.png"
		},
		femaleShirt3=
		{
			Name: "Female Shirt Red",
			Image: "Images/Shirts/FemaleShirtRed.png"
		},
		femaleShirt4=
		{
			Name: "Female Shirt Green",
			Image: "Images/Shirts/FemaleShirtGreen.png"
		},
		femaleShirt5=
		{
			Name: "Female Shirt Purple",
			Image: "Images/Shirts/FemaleShirtPurple.png"
		},
		femaleShirt6=
		{
			Name: "Female Shirt White",
			Image: "Images/Shirts/FemaleShirtWhite.png"
		},
		femaleShirt7=
		{
			Name: "Female Shirt Blue",
			Image: "Images/Shirts/FemaleShirtBlue.png"
		}
	],
	//Images[7] = Heads
	[
		head1=
		{
			Name: "Head 1",
			Image: "Images/Heads/Head1.png"
		}
	],
	//Images[8] = Male Cranial Hair
	[
		maleCranialHair1=
		{
			Name: "Male Cranial Hair - Blonde",
			Image: "Images/CranialHair/MaleCranialHairBlonde.png"
		},
		maleCranialHair2=
		{
			Name: "Male Cranial Hair - Black",
			Image: "Images/CranialHair/MaleCranialHairBlack.png"
		},
		maleCranialHair3=
		{
			Name: "Male Cranial Hair - Brown",
			Image: "Images/CranialHair/MaleCranialHairBrown.png"
		},
		maleCranialHair4=
		{
			Name: "Bald",
			Image:"Images/CranialHair/Bald.png"
		}
	],
	//Images[9] = Female Cranial Hair Front
	[
		femaleCranialHairFront1=
		{
			Name: "Female Cranial Hair - Red, Front, Short",
			Image: "Images/CranialHair/FemaleCranialHairRedFrontShort.png"
		},
		femaleCranialHairFront2=
		{
			Name: "Female Cranial Hair - Black, Front, Short",
			Image: "Images/CranialHair/FemaleCranialHairBlackFrontShort.png"
		},
		femaleCranialHairFront3=
		{
			Name: "Female Cranial Hair - Brown, Front, Short",
			Image: "Images/CranialHair/FemaleCranialHairBrownFrontShort.png"
		}
	],
	//Images[10] = Female Cranial Hair Back
	[
		femaleCranialHairBack1=
		{
			Name: "Female Cranial Hair - Red, Back, Short",
			Image: "Images/CranialHair/FemaleCranialHairRedBackShort.png"
		},
		femaleCranialHairBack2=
		{
			Name: "Female Cranial Hair - Black, Back, Short",
			Image: "Images/CranialHair/FemaleCranialHairBlackBackShort.png"
		},
		femaleCranialHairBack3=
		{
			Name: "Female Cranial Hair - Brown, Back, Short",
			Image: "Images/CranialHair/FemaleCranialHairBrownBackShort.png"
		}
	],
	//Images[11] = Facial Hair
	[
		facialHair1=
		{
			Name: "Facial Hair - Blonde",
			Image: "Images/FacialHair/FacialHairBlonde.png"
		},
		facialHair2=
		{
			Name: "Facial Hair - Black",
			Image: "Images/FacialHair/FacialHairBlack.png"
		},
		facialHair3=
		{
			Name: "Facial Hair - Brown",
			Image: "Images/FacialHair/FacialHairBrown.png"
		},
		facialHair4=
		{
			Name: "No Facial Hair",
			Image:"Images/FacialHair/FacialHairNone.png"
		}
	]
];

//Use the 'theLayers' array to get elements By Id


//==================================================
//Functionality to Make the Image 'Pulse' Vertically
//==================================================
//This works, we're just not using it right now.
/*function pulseImage()
{
	for(var p=0; p<theLayers.length-1; p++)
	{
		theLayers[p].style.animation="pulse 5s infinite";
	}
}*/

//==================
//Political Opinions
//==================
function selectPolitics()
{
	var column = getRandomInt(0,11);
	var row = getRandomInt(0,11);
	var target = politicalChartArray[column][row];
	target.classList.add('color-transition');
	if((column<=5)&&(row<=5))
	{
		target.style.backgroundColor=lightRed;
	}
	else if((column<=5)&&(row>5))
	{
		target.style.backgroundColor=lightBlue;
	}
	else if((column>5)&&(row<=5))
	{
		target.style.backgroundColor=lightGreen;
	}
	else
	{
		target.style.backgroundColor=lightGold;
	}
}
selectPolitics();

//===========================
//Personality Characteristics
//===========================
var characteristics=
[
document.getElementById("characteristic1"),
document.getElementById("characteristic2"),
document.getElementById("characteristic3")
]

var sets=
[
	[
	"Sensitive",
	"Insensitive",
	"Introspective",
	"Introverted",
	"Extroverted",
	"Rude"
	],
	[
	"Calm",
	"Anxious",
	"Irritable",
	"Patient",
	"Impatient",
	"Mellow"
	],
	[
	"Ambitious",
	"Content",
	"Envious",
	"Greedy",
	"Generous",
	"Serious"
	]
]

//==============================================
//Functionality to Assign Flavor Characteristics
//==============================================
function assignCharacteristics()
{
	for(c=0; c<characteristics.length; c++)
	{
		characteristics[c].innerHTML=sets[c][getRandomInt(0,4)];
	}
}

assignCharacteristics();


//Variables
var genderVar = 0;
var maleColorVar = 0;
var shirtColorVar = getRandomInt(0,7);
//Get the ids

function generatePersonImages()
{
	for(var t=0; t<theLayers.length; t++)
	{
	generateImage(t);	
	}
}

function generateImage(person)
{
	function calculateColorVar()
	{
	maleColorVar = getRandomInt(0,4);
	maleFacialColorVar = getRandomInt(0,4);
	femaleColorVar = getRandomInt(0,3);
	}
	var thePerson = person;
	calculateBackground();
	calculateColorVar();
	function calculateBackground()
	{
		var backgroundVar = getRandomInt(0,2);
		console.log("Background = " + backgroundVar);
		//theLayers[0] = Background
		theLayers[thePerson][0].src=images[0][backgroundVar].Image;
		//theLayers[5] = Head
		theLayers[thePerson][5].src=images[7][0].Image;
	}
	calculateGender();
	if(thePerson==0)
	{
	generateName();
	}
	function calculateGender()
	{
		//First Calculate M or F
		genderVar = getRandomInt(1,3);
		console.log("Gender for " + "Person " + thePerson + "=" + genderVar);
	}
	if(genderVar==1)
	{
		//theLayers[1]Torso
		theLayers[thePerson][1].src=images[1][0].Image;
		//theLayers[2]HairBack
		//theLayers[3]Neck
		theLayers[thePerson][3].src=images[3][0].Image;
		//theLayers[4]Shirt
		theLayers[thePerson][4].src=images[5][shirtColorVar].Image;
		//theLayers[5]Head - Covered Above
		//theLayers[6]HairFront
		theLayers[thePerson][6].src=images[8][maleColorVar].Image;
		//theLayers[7]FacialHair
			//Bald With Facial Hair
			if(maleColorVar==3 && maleFacialColorVar != 3)
			{
				var altColorVar = getRandomInt(0,2);
				theLayers[thePerson][7].src=images[11][altColorVar].Image;
			}
			//Not Bald, With Facial Hair
			else if(maleColorVar!=3 && maleFacialColorVar != 3)
			{
			theLayers[thePerson][7].src=images[11][maleColorVar].Image;
			}
			//Not Bald, No Facial Hair
			else if(maleColorVar!=3 && maleFacialColorVar == 3)
			{
			theLayers[thePerson][7].src=images[11][maleFacialColorVar].Image;
		}
	}
	else if(genderVar==2)
	{
		//theLayers[1]Torso
		theLayers[thePerson][1].src=images[2][0].Image;
		//theLayers[2]Hair(Back)
		theLayers[thePerson][2].src=images[10][femaleColorVar].Image;
		//theLayers[3]Neck
		theLayers[thePerson][3].src = images[4][0].Image;
		//theLayers[4]Shirt
		theLayers[thePerson][4].src=images[6][shirtColorVar].Image;
		//theLayers[5] - Covered Above
		//theLayers[6]HairFront
		theLayers[thePerson][6].src=images[9][femaleColorVar].Image;
	}
}
generatePersonImages();
//generateImage();




	//--------------
	//Surname Picker
	//--------------
var selectedSurname=null;
function generateSurname()
{
	var selectedIndex = 0;
	// Create an array to hold cumulative frequencies
	var cumulativeFrequencies = [];
	var totalFrequency = 0;

	// Calculate cumulative frequencies
	for (var i = 0; i < surnames.length; i++) 
	{
	  totalFrequency += surnames[i].Frequency;
	  cumulativeFrequencies.push(totalFrequency);
	}

	// Generate a random number within the total frequency range
	var random = Math.floor(Math.random() * totalFrequency);

	// Find the index corresponding to the random number in the cumulative frequencies array
	var selectedIndex = -1;
	for (var i = 0; i < cumulativeFrequencies.length; i++) {
	  if (random < cumulativeFrequencies[i]) {
		selectedIndex = i;
		break;
	  }
	}

// Retrieve the selected surname from the surnames array
selectedSurname = surnames[selectedIndex].Name;
};

function generateFirstname()
{
	if(genderVar==1)
	{
		selectedFirstName = maleFirstNames[getRandomInt(0,maleFirstNames.length)];
	}
	else
	{
		selectedFirstName = femaleFirstNames[getRandomInt(0,femaleFirstNames.length)];
	}
}
function generateName()
{
generateFirstname();
generateSurname();
document.getElementById("theName").innerHTML=selectedFirstName + " " + selectedSurname;
}