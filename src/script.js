

componentDidMount: function() {

      var getData = function(lists) {
          $.ajax({
            url: "https://s3.eu-central-1.amazonaws.com/wt-story/2.txt",
            type: 'GET',
            dataType: 'JSON',
            success: function(data) {
              console.log("data");
              parseData(data)
          },
            error: function(data){
              console.log("Failed")
            }
        })
      }

      var addFunction = function(){
          $("#button1").click(function(data){
            var lists = $("#button1").val();
            getData(lists);
            event.preventDefault();
          });
        };
        addFunction()


      var parseData = function(data) {
        var $getUl = $("<ul>");

        for(var i=0; i < data.length; i++) {
          var $getLi = $("<li>")
            $getLi = $getLi.addClass("appendedItems")

          var $saveButton = $("<button>Save</button>")

          var $dataLink = data[i]

          $getLi.append("Link: " + $dataLink + "<br />")
          $getLi.append($saveButton)

          $getUl.append($getLi)
          $(".header").append($getUl)
        }
        $saveButton()
      }

    }
