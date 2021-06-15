
const  Solution = function(A,B,C,D){

    var numbers=[A,B,C,D];
    
//[1,8,6,4]

var h= numbers.filter(number => number<=2);
console.log(h)
var h2= numbers.filter(number => number<=9);
console.log(h2)
var m= numbers.filter(number => number<=5);
console.log(m)
var s= numbers.filter(number => number<=9);
console.log(s)

var posibilidad=0;

var hours;
var hours2;
var min;
var min2;

for(var i=0;i<h.length;i++){
     hours=h[i]
    for(var j=0;j<h2.length;j++){
        if(hours===1){
            if(h2[j]!=hours){
                 hours2=h2[j]
                for(var mi=0;mi<m.length;mi++){
                    if(m[mi]!=hours && m[mi]!=hours2){
                         min = m[mi]
                    for(var si=0;si<s.length;si++){
                        if(s[si]!=hours && s[si]!=hours2 && s[si]!=min){
                         min2=s[si]
                        if(hours != null && hours2 != null && min != null && min2 !=null && hours+hours2 <23 && min+min2<59){
                            console.log(hours,hours2,min,min2)
                           posibilidad++; 
                            }
                        }
                        }
                    }
                }
            }
        }else if(hours ===2){
            if(h2[j]!=hours && h2[j]<=3){
                if(h2[j]!=hours){
                    hours2=h2[j]
                   for(var mi=0;mi<m.length;mi++){
                       if(m[mi]!=hours && m[mi]!=hours2){
                            min = m[mi]
                       for(var si=0;si<s.length;si++){
                           if(s[si]!=hours && s[si]!=hours2 && s[si]!=min){
                            min2=s[si]
                           if(hours != null && hours2 != null && min != null && min2 !=null && hours+hours2 <23 && min+min2<59){
                               console.log(hours,hours2,min,min2)
                              posibilidad++; 
                               }
                           }
                        }
                    }
               
                }
            }
        }

    }else if(hours ===0){
        if(h2[j]!=hours && h2[j]<=9){
            if(h2[j]!=hours){
                hours2=h2[j]
               for(var mi=0;mi<m.length;mi++){
                   if(m[mi]!=hours && m[mi]!=hours2){
                        min = m[mi]
                   for(var si=0;si<s.length;si++){
                       if(s[si]!=hours && s[si]!=hours2 && s[si]!=min){
                        min2=s[si]
                       if(hours != null && hours2 != null && min != null && min2 !=null && hours+hours2 <23 && min+min2<59 ){
                           console.log(hours,hours2,min,min2)
                          posibilidad++; 
                           }
                       }
                    }
                }
           
            }
        }
    }

    }
}
}
console.log(posibilidad)
}