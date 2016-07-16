var Car = function(){
var gasLevel = 10;

var useGas = function(amt){ // private function and cant chage how the gas is used
if(gasLevel - amt < 0){
	console.log("out of gas!");
}
else{
	gasLevel -= amt;
}
};



return {
	radiostation: '104.5',
	changeStation: function(station){
		this.radiostation = station;
	},
	go: function(speed){ useGas(speed);}

};
};

/////////
var increment = function (num){return num+1;};
var square = function(num){return num + 1;};

var doMath = function (n, func) {
return (func (n));

};



var merge = function (array1, array2, callback){
var a = array1;
var b = array2;
 
return callback(a,b);

};

var mergefunc = function(a,b){
var merged = [];
for(var i =0;i<a.length;i++){
merged.push(a[i] + b[i]);
}

};


var toaster = function(){
var maxTemp = 500;

return{
    warning: function(temp){
    	var newTemp = temp;
	if (newTemp > maxTemp){r
		console.log("Temp is too high")}    
    else{
    	console.log(newTemp);
    }
    }

};
};

var Mario = function(){
var health = 100;

var ifHit = function(strike){
	if(strike>health){
		console.log("Game Over");
	}
	else{
		health-=strike;
	}
};

return {
 riding: 'Yoshi',
 changeRider: function(rider){
 	this.riding = rider;
 },
 Hit: function(damage){ifHit(damage); }


};

};

//Args

var game1 = Mario();

game1.Hit(50);
game1.Hit(60);
game1.riding;
game1.changeRider("Bowser");
game1.riding;

//Take array or an object

var firstVal = function(list, func){
if(Array.isArray(list)){
	func(arr[0],0,arr);
}
else{
	for(var k in list){
		return func(list[k],k,list);
	}
//var propArr = Object.keys (list);
//func (list[propArr[i],propArr[i], list);


}



};