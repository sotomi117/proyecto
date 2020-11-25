var Nave=function(){


var naveTexture = new THREE.ImageUtils.loadTexture( 'nave.png' );
	
//crear el plano


var material = new THREE.MeshBasicMaterial( {map: naveTexture, side: THREE.DoubleSide} );

this.plane = new THREE.Mesh(new THREE.PlaneGeometry(100, 100),
material);
this.plane.rotation.y=55;
this.plane.rotation.x=50;

scene.add( this.plane );
console.log("esta la nave;")

this.plane.name="nave";

}
    		