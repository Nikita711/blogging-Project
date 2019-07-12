function addcomments(id) {
    var addEventNames = id.value + '<br>';
    var a = document.getElementById('usercomments');
    document.getElementById('addEventNames').innerHTML += '<p>' + addEventNames + '</p>';
    a.value = a.defaultvalue;
}


var numberofclicks = 0;

function postliked() {
    document.getElementById("like-btn").innerHTML = "liked";
    numberofclicks += 1;
    if (numberofclicks != 0) {
        if (numberofclicks == 1) {
            document.getElementById("likeCount").innerHTML = numberofclicks + " person likes this";
        } else {
            document.getElementById("likeCount").innerHTML = numberofclicks + " people have liked this.!";
        }
    }
}
