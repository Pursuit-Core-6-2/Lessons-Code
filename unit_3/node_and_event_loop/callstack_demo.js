function a () {
  b() 
}

function b () {
   c()
}

function c () {
   console.log('hi this is c')
  throw new Error('this is c failing')
}

a();
