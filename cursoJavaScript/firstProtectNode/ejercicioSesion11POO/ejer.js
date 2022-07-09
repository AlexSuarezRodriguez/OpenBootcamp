// function solution(n) {
//   let suma=0;
//   const number=n.toString().split('');
//   for(let i=0;i<number.length;i++){
//       suma += Number(number[i]);
//   }
//   return suma;
//   }
// console.log(solution(45))
//--------------------------------------------------------------
// function solution(a) {
//   const start=0;
//   let result=0;
//   const arrayAnswers=[]
//   for(let i=0; i<a.length;i++ ){
//       if(arrayAnswers.length==0){
//         if(start+a[i+1]==0){
//           arrayAnswers.push(2/2)
//         }
//         arrayAnswers.push(start+a[i+1]/2)
//           console.log(`${start}+${a[i+1]}`)
//       }else{
//         arrayAnswers.push((a[i-1]+a[i+1])/2)
//         console.log(`${a[i-1]}+${a[i+1]}`)
//       }
//       if(i==a.length-1 ){
//         arrayAnswers.pop()
//         arrayAnswers.push((a[a.length-2]+start)/2)
//         console.log(a[a.length-2])
//       }
//   }
//   for(let i=0;i<a.length;i++){
//     if(a[i]===arrayAnswers[i]){
//       result++
//     }
//   }
//   return result
//   }
//   console.log(solution([0]))

//-------------------------------------------------
function solution(firstnum, secondnum, thirdnum) {
  firstnum=firstnum.slice(0,firstnum.length-1)
  if(Number(firstnum)+Number(secondnum)===Number(thirdnum)){
    return true
  }
  return false
}
console.log(solution('10534','67','1120'))
