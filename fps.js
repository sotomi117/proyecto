var Fps=function(){
    this.container;
        this.container = document.createElement( 'div' );
        document.body.appendChild( container );
    this.stats;
    this.stats = new Stats();
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.bottom = '0px';
    this.stats.domElement.style.zIndex = 100;
        this.container.appendChild( this.stats.dom );
}
    		