function refresh() {
  console.log("This function doesn't do much yet!");

  var groupMuseURL = "https://www.groupmuse.com/events.json"
    $.get(groupMuseURL, function(response){
      for(var i = 0; i < response.length; i++) {
        console.log(response[i].title);
        $("table.events tbody").append(
          "<tr>" +
          "<td> <img src ='" + response[i].user.avatar_thumb + "'> </td>" + 
            "<td>" + response[i].user.name + "</td>" + 
            "<td>" + 
              "<a href='" +response[i].url + "'>" +
                response[i].title + 
              "</a>" +
            "</td>" + 
            "<td>" + response[i].starts_at_date + "</td>" + 
            "<td>" + response[i].city + "</td>" + 
          "</tr>"
        );
        }
      })

    var userImageUrl = response[i].avatar_thumb
      $("img").eq(i).attr('src' , userImageUrl);

  // As a code-along, we shall:
  // 0. Make API call to https://www.groupmuse.com/events.json
  // 1. console.log response, response[0]
  // 2. event = response[0]
  // 3. append to table with nice multi-line string syntax

  /*
    Bonus: 
      - refresh() on <select> change instead of <form> submit
      - Load list of cities from the API:
        - Endpoint: https://www.groupmuse.com/api/cities.json
        - On page load (and only once), pull in list of cities from API
        - Populate the <select> tag with <option>s built from json response
  */
}

$(document).ready(function() {
  // Set up a submit handler so that refresh is called when the form is submitted
  $("form.search").submit(function() {
    refresh();
    return false;
  });

  // Call it once on page load
  refresh();
});
