$(document).ready(function() {
var name = $("#name");
var successRating = $("#successRating");
var officialWebsite = $("#officialWebsite");
var status = $("#status");
var teamLocation = $("#teamLocation");

var newPost = {
    name: name
        .val()
        .trim(),
    successRating: successRating
        .val()
        .trim(),
    officialWebsite: officialWebsite
        .val()
        .trim(),
    status: status
        .val()
        .trim(),
    teamLocation: teamLocation
        .val()
        .trim()
};

updatePost(newPost);

function updatePost(post) {
    $.ajax({
        method: "PUT",
        url: "/ricolist/update",
        data: post
    })
    .done(function() {
        window.location.href = "/update";
    });
};
});