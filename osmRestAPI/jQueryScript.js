<script>
$(document).ready(
function() {selector = document.getElementsByName('q')[0];
$(selector).keypress(function(event){var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            const osmAPI = "https://nominatim.openstreetmap.org/search?";
            if (selector.value === null || selector.value === undefined || selector.value.length === 0) { console.log('no valid string');
            }else {
                const searchText = document.getElementsByName('q')[0].value;
                const obj = { q : searchText , format: "json", limit: "1", addressdetails: "1" }; obj.q = obj.q.toString();
                const myJSON = JSON.stringify(obj);
                $.getJSON( osmAPI, obj ).done(function( data ){
                    const response = data[0]; const responseParse = JSON.parse(JSON.stringify(response));
                    document.getElementsByName("display_name")[0].value = responseParse.display_name;
                    if(responseParse.display_name===undefined){document.getElementsByName("display_name")[0].value="";}else{document.getElementsByName("display_name")[0].value = responseParse.display_name;}
                    if(responseParse.address.road===undefined){document.getElementsByName("road")[0].value="";}else{document.getElementsByName("road")[0].value = responseParse.address.road;}
                    if(responseParse.address.city===undefined){document.getElementsByName("city")[0].value="";}else{document.getElementsByName("city")[0].value = responseParse.address.city;}
                    if(responseParse.address.county===undefined){document.getElementsByName("county")[0].value="";}else{ document.getElementsByName("county")[0].value = responseParse.address.county;}
                    if(responseParse.address.state===undefined){document.getElementsByName("state")[0].value="";}else{document.getElementsByName("state")[0].value = responseParse.address.state;}
                    if(responseParse.address.postcode===undefined){document.getElementsByName("postcode")[0].value="";}else{document.getElementsByName("postcode")[0].value = responseParse.address.postcode;}
                    if(responseParse.address.country===undefined){document.getElementsByName("country")[0].value="";}else{document.getElementsByName("country")[0].value = responseParse.address.country;}
                    if(responseParse.address.country_code===undefined){document.getElementsByName("country_code")[0].value="";}else{document.getElementsByName("country_code")[0].value = responseParse.address.country_code;}
                }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                });
            }
        }else{
        }
    });
});
</script>
