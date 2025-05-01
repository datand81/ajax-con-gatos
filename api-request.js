const url = `https://api.thecatapi.com/v1/breeds`;
//const api_key=''; // No es necesario para esta API
$(document).ready(function () {
    $("#leer").click(function (e) { 
        $('#resultado-ajax').html('');
        $.ajax({
            url:url,
            type:'get',
            dataType:'json',
            success:function(data){
                console.log(data);
                $.each(data, function (i, item) {
                    $('#contenedor_carga').hide();
                
                     $('#resultado-ajax').html($('#resultado-ajax').html()+`
                     <li> Código raza: <strong> ${item.id} </strong>  <br/> peso:  ${item.weight.metric}  kilos<br/>Vida:    ${item.life_span}  años <br/> nombre raza: <strong>${item.name}</strong> <br/> origen: <strong>${item.origin}</strong>  <br/> codigo pais origen: <strong>${item.country_code}</strong>  <br/> descripción:  ${item.description} <br/> wikipedia:  ${item.wikipedia_url}</li>
                     `);
                });
            },
            error:function(xhr,status,error){
                console.log('Error en la petición: '+error);
                $('#resultado-ajax').html('Error en la petición: '+error);
                $('#contenedor_carga').hide();
            }
        });
    });
   
});