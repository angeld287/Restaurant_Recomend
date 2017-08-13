$( document ).ready(function() {
            var dataString = window.location.search.substring(1);
            $('#Iframe_map').attr('src', "../mapas-api-google/map_details.html?"+dataString);
            $('#Iframe_rating').attr('src', "../rating/rating.html?"+dataString);
            var url = 'http://35.192.11.211/Restaurant_Recomend/database/restaurant_management/restaurant_x_id.php'
            $.ajax({
                type: "GET",
                url: url,
                data: dataString,
                dataType: "json",
                crossDomain: true,
                cache: false,
                beforeSend: function(){},
                success: function(result){
                    $("#datos").empty();
                    $("#IdFooter").empty();
                    if(result == 0){
                        alert("restaurante no existe");
                    }else {
                        $.each(result, function(i, field){
                             $("#rest_name").append(field.name);
                             $("#categoria").append(field.category_name);
                             $("#telefono").append('    <a onclick="call(\''+field.phone_number+'\')" class="btn btn-default btn-primary btn-lg"><span class="glyphicon glyphicon-earphone"></span> '+field.phone_number+'</a>');
                             $("#direccion").append(field.address);
                        });
                    }
                },
                error: function(request, status, error){
                    alert(request.responseText+" | "+status+" | "+error);
                }               
            });
        });
        
        function call(numero){
            $(document).ready(function() {
                window.plugins.CallNumber.callNumber(function onSuccess(result){
                                                          console.log("Success:"+result);
                                                    },
                                                    function onError(result) {
                                                          console.log("Error:"+result);
                                                    },
                                                    numero, 
                                                    true
                );
                
            });
        }