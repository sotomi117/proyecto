var Controles=function(){
    		
var contenedorCamera=new THREE.Object3D();
contenedorCamera.add(camera);
scene.add(contenedorCamera);

document.addEventListener("mousemove", function(event) {
    myFunction(event);
  });

  var xanterior=0;
  var yanterior=0;

  function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var dx = x-xanterior
    var dy = y-yanterior

    if(dx<0)
  
    {
        contenedorCamera.position.x +=1.5;
      
    
  }	else
  
  {
        contenedorCamera.position.x -=1.5;
      
  }

 xanterior=x;
  


  if(dy<0)
  
    {
        contenedorCamera.position.y +=1.5;
      
  }	else
  
  {
        contenedorCamera.position.y -=1.5;
      
  }

  yanterior=y;
  
}
/*
actualizar=function()
{
if(xanterior<100)

{
contenedorCamera.position.x +=0.5;

}	
/*
if(xanterior>100) {

contenedorCamera.position.x -=0.5;

}

/*
if(yanterior<100)

{
contenedorCamera.position.y +=0.5;

}	
if(yanterior>100) {

contenedorCamera.position.y -=0.5;

}

}
*/

}