
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

var horas;
var horas2;
var minutos;
var minutos2;

for(var i=0;i<h.length;i++){
     horas=h[i]
    for(var j=0;j<h2.length;j++){
        if(horas===1){
            if(h2[j]!=horas){
                 horas2=h2[j]
                for(var mi=0;mi<m.length;mi++){
                    if(m[mi]!=horas && m[mi]!=horas2){
                         minutos = m[mi]
                    for(var si=0;si<s.length;si++){
                        if(s[si]!=horas && s[si]!=horas2 && s[si]!=minutos){
                         minutos2=s[si]
                        if(horas != null && horas2 != null && minutos != null && minutos2 !=null && horas+horas2 <23 && minutos+minutos2<59){
                            console.log(horas,horas2,minutos,minutos2)
                           posibilidad++; 
                            }
                        }
                        }
                    }
                }
            }
        }else if(horas ===2){
            if(h2[j]!=horas && h2[j]<=3){
                if(h2[j]!=horas){
                    horas2=h2[j]
                   for(var mi=0;mi<m.length;mi++){
                       if(m[mi]!=horas && m[mi]!=horas2){
                            minutos = m[mi]
                       for(var si=0;si<s.length;si++){
                           if(s[si]!=horas && s[si]!=horas2 && s[si]!=minutos){
                            minutos2=s[si]
                           if(horas != null && horas2 != null && minutos != null && minutos2 !=null && horas+horas2 <23 && minutos+minutos2<59){
                               console.log(horas,horas2,minutos,minutos2)
                              posibilidad++; 
                               }
                           }
                        }
                    }
               
                }
            }
        }

    }else if(horas ===0){
        if(h2[j]!=horas && h2[j]<=9){
            if(h2[j]!=horas){
                horas2=h2[j]
               for(var mi=0;mi<m.length;mi++){
                   if(m[mi]!=horas && m[mi]!=horas2){
                        minutos = m[mi]
                   for(var si=0;si<s.length;si++){
                       if(s[si]!=horas && s[si]!=horas2 && s[si]!=minutos){
                        minutos2=s[si]
                       if(horas != null && horas2 != null && minutos != null && minutos2 !=null && horas+horas2 <23 && minutos+minutos2<59){
                           console.log(horas,horas2,minutos,minutos2)
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