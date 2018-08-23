'use strict';

var $ = require( 'jquery' );

module.exports = {
    /**
     * Updates readonly
     *
     * @param  {{nodes:Array<string>=, repeatPath: string=, repeatIndex: number=}=} updated The object containing info on updated data nodes
     */
    update: function( updated ) {
        var $nodes = this.form.getRelatedNodes( 'readonly', '', updated );
        $nodes.each( function() {
            $( this ).closest( '.question' ).addClass( 'readonly' );
            // Note: the readonly-forced class is added for special readonly views of a form.
            if ( !this.value && !this.dataset.calculate && !this.classList.contains( 'readonly-forced' ) ) {
                this.classList.add( 'empty' );
            }
        } );
    }
};
