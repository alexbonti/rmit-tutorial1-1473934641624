successCB=function(err,res) {
    if(!err){
        console.log(res)
    }else{
        console.log(err)
    }

}
console.log('Test');
$(document).ready(function() {
    console.log('Document ready')


    ///// BINDINGS
    $('#buttonTest').click(function() {
        //alert('TEST')

        $.post( "/sentiment", {message:'i love cats'}, function( data ) {
            console.log(data);
            //$( ".result" ).html( data );
        });

    })

})