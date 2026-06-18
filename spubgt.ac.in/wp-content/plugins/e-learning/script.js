jQuery(document).ready(function($){

let primary_id = "";

/* PRIMARY CATEGORY BUTTON CLICK */

$(".primary-btn").on("click", function(){

primary_id = $(this).data("id");

/* highlight selected button */

$(".primary-btn").removeClass("active");

$(this).addClass("active");

/* reset results area */

$("#elearning-results").html("");

/* reset dropdown */

$("#sub-category").html('<option value="">Select Categories</option>');


/* LOAD SUB CATEGORIES */

$.ajax({

url: elearning_ajax.ajax_url,

type: "POST",

data: {
action: "load_sub_categories",
primary: primary_id
},

success: function(response){

$("#sub-category").html(response);

}

});

});



/* SUB CATEGORY DROPDOWN CHANGE */

$("#sub-category").on("change", function(){

let sub_id = $(this).val();

/* if default selected */

if(sub_id === ""){

$("#elearning-results").html("");

return;

}


/* LOAD FILES */

$.ajax({

url: elearning_ajax.ajax_url,

type: "POST",

data: {
action: "load_files",
primary: primary_id,
sub: sub_id
},

success: function(response){

$("#elearning-results").html(response);

}

});

});


});