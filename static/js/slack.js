window.onload = function(e){

    const endpoint = "https://a47bbji7vb.execute-api.eu-west-1.amazonaws.com/prod";
        
    $('#submit-button').click( function(){

        var name = $('#name').val();
    
        var email = $('#email').val();
            
        var data = {};
            
        data.title = "Innmelding i Slack-gruppe";
            
        data.body = "navn  = " + name + "\nepost = " + email;
        
        data.to = "kontakt@applitude.no";

        $.ajax({
            url:endpoint+"/send",
            type:"POST",
            data:JSON.stringify(data),
            contentType:"application/json; charset=utf-8",
            success: function(){
                if(window.location.href.indexOf("slack_en") > 0){
                    $('#result').empty().append("You will soon receive an invite by email.");
                }else{
                    $('#result').empty().append("Du vil snart mota en invitasjon på epost.");
                }
                $('.slack-form').hide();
            },
            error: function(a, b, c){
                if(window.location.href.indexOf("slack_en") > 0){
                    $('#result').empty().append("Sending an invite failed. Please try again later.");
                }else{
                    $('#result').empty().append("Skjemaet ble ikke sendt. Venligst prøv igjen senere.");
                }
                $('.slack-form').hide();
            }
        })
    } )   
}
