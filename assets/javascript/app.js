var topics = ["To Kill a Mockingbird", "The Old Man and the Sea", "Wuthering Heights", "Black Beauty", "The Little Prince"]

function renderButtons() {
    $("#buttons-view").empty(); 

    for (var i = 0; i < topics.length; i++){
          var bookButton = $("<button>");
          bookButton.addClass("book");
          bookButton.attr("data-name", topics[i]);
          bookButton.text(topics[i]);

          $("#buttons-view").append(bookButton);
    }

  }

$("#find-book").on("click", function(){
    event.preventDefault();

    var book = $("#book").val().trim();
    console.log(book);

    topics.push(book);
    console.log(topics);

    renderButtons();

})

function showBookInfo() {
    var book = $(this).attr("data-name"); 
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + book + "&api_key=wmlyUx6osGzUCeMqFyU7NIXgqSuXtPET&limit=5"; 
    
    $.ajax({
        url: queryURL,
        method: "GET"
        
    }).then(function(response){
        var gif = response.data.length;
        console.log("Gif: " + gif)

      console.log(response);
    //   $("#book-view").text(JSON.stringify(response));
        response.data.forEach(function(gif, i){
            var rating = response.data[i].rating;
            var img = $("<img>")
            var gifAnimated = img.attr("src", response.data[i].images.fixed_height_small.url);
            $("#book-view").html("<div id= 'info'></div>");
            $("#info").append(gifAnimated);
            $("#info").append("<p> Rating: " + rating + "</p>");

            console.log(response.data[i])
        })
        

    //   $("#info").append("<h2>" + title + "</h>");
    //   $("#info").append(plot);
      
    //   $("#info").append("<img src="+ response.Poster + "/>")
        
    });


  }

  $(document).on("click", ".book", showBookInfo);
  renderButtons();
