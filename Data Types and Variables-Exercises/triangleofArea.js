function triangleArea(arg1,arg2,arg3){
    let s = (arg1 +arg2 +arg3) / 2;
    let area = Math.sqrt(s * (s-arg1)*(s-arg2)*(s-arg3));
    console.log(area)
}
triangleArea(2,3.5,4)