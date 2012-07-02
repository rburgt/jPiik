/**
 * jPiik, jquery implementation of piik
 * 
 * @author Rob van der Burgt
 */

/**
 * extend the piik class so it ran work with
 */
(function(){
	
	// create an custom jPiik class in private scope
	// to allow use of piik with predefined elements
	var jPiik = function( sourceEl ){
		this.isEditing = true;
		this.isRunning = false;
		this.sourceEl = sourceEl;
		
		this.initLayout();
		this.initCharacterMap();
	};
	
	jPiik.prototype = piik.prototype;
	
	
	// create jQuery shortcuts
	$.fn.extend({
		piik : function( options ){
	        
	        return this.each(function(){
	        	var el = $(this),
	        		piik = el.data('piik');
	        	
	        	// check if piik is already initialized on element
	        	if ( !piik ) {
	        		console.log( el.get() );
	        		piik = new jPiik( el.get()[0] );
	        		el.data('piik', el);
	        	}
	        });
		}
	})
	
})();
