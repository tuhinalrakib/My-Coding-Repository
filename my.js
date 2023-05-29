// let react={
 
// }
// react.draw()
// let another={
//   width:56,
//   height:17,
//   print:react.print
// }
// another.print()
// var Rectangle=function(width,height){

//     this.width=width
//     this.height=height
//     var position={
//       x:56,
//       y:-100
//     }
    
//     var printProperties= function(){
//       console.log('My width is '+this.width);
//       console.log('My height is '+this.height);
//     }.bind(this)
//     this.draw=function(){
//       console.log('I am Rectangle');
//       printProperties()
//       console.log('Position:X='+position.x+'Position:Y='+position.y);
//     }
//     Object.defineProperty(this,'Position',{
//       get:function(){
//         return position
//       },
//       set: function (value){
//         position=value
//       }
//     })
    
//   }

// let react1=new Rectangle(10,20)
// react1.draw()
// react1.position={
//   x:456,
//   y:-123
// }
// console.log(react1.position);

// let react2=new Rectangle(35,19)
// react2.draw()
// function myFunc(c,d){
//   console.log(this);
//   console.log(this.a+this.b+c+d);
// }
// myFunc.call({a:40,b:55},10,5)
// myFunc.apply({a:240,b:55},[10,5])
// // myFunc()
// let testBind=myFunc.bind({a:10,b:5},15,5)
// testBind()
// let names=['Tuhin','Asma','Rafi','Azom']
// let index=-1
// let name=names[++index]
// setInterval(()=>{
//   name=names[index++]
//   console.log(name,name.length);
//   if (names.length==0){
//     index=0   
//   }
// // },1000)
// let rect={
//   width:25,
//   height:19,
//   draw: function(width,height){
//    console.log('I am Rectangle');
//    this.print()
//   },
//   print: function(){
//     console.log('My width is '+this.width);
//     console.log('My height is '+this.height);
//   }
// }
// let another={
//   width:69,
//   height:174,
//   printProperties:rect.print
// }
// let rect1=rect.draw()
// console.log(rect1);
// let rect2=another.printProperties()
// console.log(rect2);
// let Rectangle=function(width,height){
//   this.width=width
//   this.height=height
//   let position={x:56,y:-100}
//   this.draw= function(width,height){
//    console.log('I am Rectangle');
//    print()
//   }
//   let print= function(){
//     console.log('My width is '+this.width);
//     console.log('My height is '+this.height);
//   }
//   Object.defineProperty(this,'position',{
//     get:function(){
//       return position
//     },
//     set:function(value){
//       position=value
//     }
//   })
  // this.getPosition=function(){
  //   return position
  // }
//   }
//   rect1.position={}
// let rect1=new Rectangle(10,20)
// rect1.draw()
// console.log(rect1.getPosition());
// let rect2=new Rectangle(125,789)
// rect2.draw()
// rect1.
// let person={
//   name:'Tuhin'
// }
// console.log(person);
// let baseObject=Object.getPrototypeOf(person)
// let descriptor=Object.getOwnPropertyDescriptor(baseObject,'to string')
// console.log(descriptor);
// /*(3)*/let descriptor=Object.getOwnPropertyDescriptor(person,'name')
// console.log(descriptor);
// (1)console.log(Object.keys(person));
// (2)for (var i in person){
//   console.log(i);
// }
// Shape=function(){

// }
// Shape.prototype.common=function(){
//   console.log('I am common Method');
// }
// function Square(width){
//   this.width=width}
// Square.prototype=Object.create(Shape.prototype);
// Square.prototype.draw= function(){
//     console.log('Drawing');
//   }

// var sqr=new Square(44)
// var shape=new Shape()
// console.log(sqr);
// console.log(shape);
let 