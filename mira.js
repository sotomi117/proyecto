var Mira=function()
{
	var a = 0;
	var contador1 = 0;
	var raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2(0,0);
	var raycamara = new THREE.Vector2();
	
	//--MOUSEMOVE--
	function onMouseMove( event ) {

		// calculate mouse position in normalized device coordinates
		// (-1 to +1) for both components

		mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	}
			
	window.addEventListener( 'mousemove', onMouseMove, false );
	


	//--ACTUALIZAR--
	this.actualizar=function(){
		raycaster.setFromCamera( raycamara, camera );
		var intersects = raycaster.intersectObjects( scene.children,true );

		for ( var i = 0; i < intersects.length; i++ ) {
		
		//console.log(intersects[0].object.name);
		
		for(var j=0;j<20;j++){
			//console.log(j);
			if(intersects[0].object.name==j){
			scene.remove(intersects[0].object );
			console.log(intersects[0].object.name);
		
		}
		}
	}
	
	
	
	}
}