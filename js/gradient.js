//       var red = 30;
//       var green = 40;
//       var blue = 50;
//       var yellow = 60;


//    function colorUpdate() {

//       $('#0').click(function () {
//         if(blue >= 0) {
//           blue = blue + 10;
//          } else if(blue <= 255) {
//           blue = blue - 10;
//          }
//          console.log(blue);
//       });
      
//       $('#1').click(function () {
//         if(yellow > 0) {
//           yellow = yellow+10;
//          } else if(yellow <= 255) {
//           yellow = yellow-10;
//          }
//          console.log(yellow);
//       });

//       $('#2').click(function () {
//         if(red > 0) {
//           red = red+10;
//          } else if(red <= 255) {
//           red = red-10;
//          }
//          console.log(red);
//       });

//       $('#3').click(function () {
//         if(green > 0) {
//           green = green+10;
//          } else if(green <= 255) {
//           green = green-10;
//          }
//          console.log(green);
//       });

//       printColor(red, green, blue, yellow);
//       };

//   function printColor(color1, color2, color3, color4){
//     console.log(color1, color2, color3, color4); 
//   };

//    // colorUpdate(); 
   
//NAMESPACE GRADIENT COLOR BUILDERS 
// var colors = new Array(
//   [62,35,255],
//   [60,255,60],
//   [255,35,98],
//   [45,175,230],
//   [255,0,255],
//   [255,128,0]);

//   // [red,green,255],
//   // [red,green,60],
//   // [red,green,98],
//   // [red,green,230],
//   // [red,green,255],
//   // [red,green,0]);

// var step = 0;
// //color table indices for: 
// // current color left
// // next color left
// // current color right
// // next color right
// var colorIndices = [0,1,2,3];

// //transition speed
// var gradientSpeed = 0.002;

// function updateGradient()
// {
//  // colorUpdate(); 

//   if ( $===undefined ) return;
  
// var c0_0 = colors[colorIndices[0]];
// var c0_1 = colors[colorIndices[1]];
// var c1_0 = colors[colorIndices[2]];
// var c1_1 = colors[colorIndices[3]];

// var istep = 1 - step;
// var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
// var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
// var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
// var color1 = "rgb("+r1+","+g1+","+b1+")";

// var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
// var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
// var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
// var color2 = "rgb("+r2+","+g2+","+b2+")";

//  $('#gradient').css({
//    background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
//     background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
//   step += gradientSpeed;
//   if ( step >= 1 )
//   {
//     step %= 1;
//     colorIndices[0] = colorIndices[1];
//     colorIndices[2] = colorIndices[3];
    
//     //pick two new target color indices
//     //do not pick the same as the current one
//     colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
//     colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
//   }
// }

// setInterval(updateGradient,10);

// //ENDS GRADIENT