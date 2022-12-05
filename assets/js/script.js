/* Author: 

*/
// pattern - 01
for(let i = 1 ; i<= 7 ; i+=2){
  for( let k = i ; k<7 ; k++){
      document.write("&nbsp;");
  }
  for(let j = 1 ; j<=i ; j++){
      if(j % 2 == 0){
          document.write("A");
      }else{
          document.write("*");
      }
  }
  document.write("<br>");
}

// pattern - 02
for(let row = 1 ; row<= 5 ;row++){
  for( let col = 1 ; col <= 9 ; col++){
      if( (row ==5) || (row+col==6) || (col-row==4)){
          document.write(" *");
      }else{
          document.write("&nbsp;&nbsp");

      }
  }
  document.write("<br>");
}

// pattern - 03
for ( let i = 1 ; i<= 3 ; i++){
  for( let j = 1 ; j<= i ; j++){
      document.write(j**i + " ");
  }
  document.write("<br>");
}

// pattern - 04
for(let i = 1; i <= 6 ; i++){
  for(let j = 1 ; j<= i ; j++){
       document.write("#");
  }
  document.write("<br>");
}























