var makeStopwatch= function(){
console.log("initialized");
var elapsed = 0;
console.log(elapsed);

var stopwatch = function(){
console.log('Stopwatch');
return elapsed;
};

var increase = function(){elapsed++;};
setInterval(increase, 1000);

return stopwatch;

};
var x = makeStopwatch;

//Closures exercise 1.

var nonsense = function(str){;

var blab = function(){
alert(str);
};
return blab;
};

//Closures exercise 2

var namer = function(firstName){

var lastName = function(lastName){
console.log(firstName + " " + lastName);
};
return lastName;
};


// exercise 3 

var storywriter = function(){
var story = " "
return {
	addwords: function(str){story += str + ' ';
							return story.trim();},
	erase: function(){return story=" "}
};


};

//exercise 4 "create a toaster"

var toaster = function(){
var maxTemp=500;
var maxTime = 20;
return {
checkTemp:function(temp){
		if(temp>=maxTemp){
			console.log("Warning! Temperature is too Hot!");
		}
		else{
			console.log("Current temperature is " + temp + ". Please wait 5 minutes.");
		}

		},
checkTime: function(time){		 
	if(time>maxTime){
		console.log("Automatoc Turn-Off");
	}
	else{ console.log(time + " cooking!");}
}
};

};

// exercise 5 "Create Mario game"

var Mario = function(){
maxHealth = 100;

var ifHit = function(hit){
if(hit>maxHealth){
	console.log("Game Over");
}
else{maxHealth-=hit; console.log(maxHealth);}
};
	return {
			currentRider: "Yoshi",
			changeRider: function(rider){
					this.currentRider=rider;
												},
				Hit: function(damage){
						ifHit(damage);
										}

};
};


//Module Pattern - modulize code

var Car = function() {
var gasolineLevel = 50;

function useGas = function(used){
if(gasolinelevel - used<0){
	console.log("Out of Gas");
}
else{ gasolineLevel -= used}

};
return {
radioStation: "104.5",
changeStation: function(station){
	this.radioStation = station;
},
rev: function(speed){useGas(speed);}

};

};


/// Dabbling with CBFN


var add = function(num){return num+1;};
var square = function(num){return n*n;};
var doMath = function(num, cbfn){return cbfn(num);};


var funcCaller = function(arg, func){
	return func(arg);
};

