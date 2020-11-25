var Enemigo=function(){
 
      
	var enemigoTexture = new THREE.ImageUtils.loadTexture( 'invasorpng.png' );
//crear el plano - enemigo

var material = new THREE.MeshBasicMaterial( {map: enemigoTexture, side: THREE.DoubleSide} );
material.transparent = true;
this.enemigo = new THREE.Mesh(new THREE.PlaneGeometry(30, 30),
material);
scene.add( this.enemigo );

this.enemigo.position.x += Math.random() * 800 - 400;
this.enemigo.position.y += Math.random() * 800 - 400;
this.enemigo.position.z += Math.random() * 800 - 400;
this.enemigo.rotation.y=55;
this.enemigo.rotation.x=50;

this.enemigo.name="enemigo";



}
    	