var topics = ["To Kill a Mockingbird", "The Old Man and the Sea", "Wuthering Heights", "Black Beauty", "The Little Prince"]

function renderButtons() {
    $("#buttons-view").empty(); 

    for (var i = 0; i < topics.length; i++){
      $("#buttons-view").append("<button class= 'book' data-name=book" + i + ">" + topics[i] + "</button>");
    }

  }

$("#find-book").on("click", function(){
    event.preventDefault();
    var book = $("#book").val().trim();
    console.log(book);

    topics.push(book);
    console.log(topics);

    renderButtons();

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + book + "&api_key=wmlyUx6osGzUCeMqFyU7NIXgqSuXtPET&limit=5"; 

    $.ajax({
        url: queryURL,
        method: "GET"

      }).then(function(response){
        console.log(response);
        $("#book-view").text(JSON.stringify(response));
      })
})

function showBookInfo() {
    var title = $(this).attr("data-name"); 

    $.ajax({
      url: queryURL,
      method: "GET"

    }).then(function(response){
      console.log(response);
      $("#book-view").text(JSON.stringify(response));
    })

  }

  $(document).on("click", ".movie", showBookInfo);

renderButtons();