function areaOfTriangle(obj){
    var a=1*obj.st1.value;
    var b=1*obj.st2.value;
    var c=1*obj.st3.value;
    var p=(a+b+c)/2;
    var s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    var d=(s).toFixed(2)

    obj.res.value=d;

    function findMinAndMax(a, b, c) {
        var min = Math.min(a, b, c);
        var max = Math.max(a, b, c);
        console.log('Минимальное число: ' + min);
        console.log('Максимальное число: ' + max);
      }
      
      findMinAndMax(a, b, c);

    
}