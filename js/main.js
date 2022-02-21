function myList() {
  let arr = [];
  let n = 0;
  for (n=0; n<5; n++){
    for (i = 0; i<5; i++){
    arr[i] = document.getElementsByTagName("li").item(n++).textContent;
    }
  }
    console.log("Way first:" +"\n"+ arr[0], arr[4],arr[1],arr[3], arr[2]);
  
 }

 function myList2() {
  let arr1 = [];
  let k = 0;
  let j = 0;
  while  (k<5){
    for (j=0;j<5;j++){
    arr1[j] = document.querySelectorAll("li").item(k++).textContent;
    }
  }
    console.log("Way second:" +"\n"+ arr1[0], arr1[4],arr1[1],arr1[3], arr1[2]);
  
 }
 
myList();
myList2();