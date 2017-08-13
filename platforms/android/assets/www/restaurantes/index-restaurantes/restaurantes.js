    //https://stackoverflow.com/questions/6002325/getjson-not-working
        $(document).ready(function(){
              var url="http://35.192.11.211/Restaurant_Recomend/database/restaurant_management/return_rest_data_array.php";
             $.getJSON(url,function(result){
                 //alert(localStorage.getItem("latitude")+" "+localStorage.getItem("longitude"));
                 //console.log(result);
                 $.each(result, function(i, field){
                     //$("#listview").append("<a href='#' onclick='details("+field.restaurant_id+")' class='list-group-item'>"+field.name+"</a>");
                });
             }); 
             
             
             var dataString = "latitude="+localStorage.getItem("latitude")+"&length="+localStorage.getItem("longitude");
             
                var url = 'http://35.192.11.211/Restaurant_Recomend/database/restaurant_management/return_rest_data_x_lat_len.php';
                //alert(url+"?"+dataString);
                $.ajax({
                    type: "GET",
                    url: url,
                    data: dataString,
                    dataType: "json",
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){},
                    success: function(result){
                        //alert(result);
                            $.each(result, function(i, field){
                                $("#listview").append("<a onclick='details("+field.restaurant_id+")' class='list-group-item'>"+field.name+"</a>");
                            });
                    },
                    error: function(request, status, error){
                        alert(request.responseText+" | "+status+" | "+error);
                    }               
                });

             $("#listview").on("click", "#rest", function(event){
                    console.log('clickess   list-group-item');
                    $("#Iframe_Control").attr('src',"restaurantes/map.html");
                });
         });
     
        function details(restaurant_id){
            $("#listview").css("display", "none");
            $("#Restaurant_Details").css("display", "block");
            $('#Iframe_details').attr('src', "../detalle-restaurante/restaurante_detalle.html?id="+restaurant_id); 
        }