//Try to use different events on objects

server = {
	name: "abc",
	
}

server2 = {
	name: "cdf"
}

function printName(a) {
	console.log(a)
}

printName.call(server, server.name)
printName.apply(server2, [server2.name])
res = printName.bind(server, server.name)
res()

document.getElementById("i").addEventListener("mouseover", function(){
	console.log("Mouse is over");
});
document.getElementById("t").addEventListener("keydown", function(e){
	console.log("Key Pressed is: "+e.key);
});
