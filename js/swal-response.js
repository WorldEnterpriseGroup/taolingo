function swalresponse() {
    $("#register").validate();
    
    $("#register").submit(function(event){
        if (!$("#register").validate().form()) {
            return false; //doesn't validate
            }else
            {
            event.preventDefault(); //prevent default action 
            var post_url = $(this).attr("action"); //get form action url
            var request_method = $(this).attr("method"); //get form GET/POST method
            var content_type = $(this).attr("enctype"); //get form GET/POST method
            var form_data = $(this).serialize(); //Encode form elements for submission
            
            $.ajax({
                    type: $(this).attr('method'),
                    url: $(this).attr('action'),
                    data: $(this).serialize(),
                    success: function (data) {
                        $("#register")[0].reset();
                        $("input:checkbox").attr('checked', false);
                        Swal({
                        title: '<strong>Submission Successful</strong>',
                        type: 'success',
                        html:
                            'We received your request. A representative will get in touch soon!',
                        showCloseButton: true,
                        focusConfirm: false,
                        confirmButtonText:
                            '<a style="color: white" href="courses.html"><i class="fa fa-address-card"></i> Go to Courses</a>',
                        confirmButtonAriaLabel: 'Go to Courses',
                    });
                        console.log('Submission was successful.');
                        console.log(data);   
                    },
                    error: function (data) {
                        console.log('An error occurred.');
                        console.log(data);
                    },
                }).then(function(response){ //
                $("#server-results").html(response);
            }); //form is validated do your work
        }        
    });
}