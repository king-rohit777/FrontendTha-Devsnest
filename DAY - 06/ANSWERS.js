//Question1

var is_array = function(input) {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//Question2

var array_Clone = function(arra1) {
 return arra1.slice(0);
    };
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//Question 3

var first =  function(arr, n) {
      if (arr == null) 
      return 0;
    if (n == null) 
      return arr[0];
    if (n < 0)
      return [];
    return arr.slice(0, n);
};
console.log(first([7, 9, 0, -2]));

//Question4

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

//Question5

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var a = 1;
var b = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 b++;
                if (a<b)
                {
                  a=b; 
                  item = arr1[i];
                }
        }
        b=0;
}
console.log(item+" ( " +a +" times ) ") ;
