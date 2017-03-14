$(document).ready(function() {
console.log("script loaded")


      var getData = function(lists) {
          $.ajax({
            type: 'GET',
            url: "https://s3.eu-central-1.amazonaws.com/wt-story/2.txt",
            dataType: 'jsonp',
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
          $("#button1").click(function(lists){
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

          var $saveButton = $("<button>Show</button>")

          var $dataLink = data[i]

          $getLi.append("Link: " + $dataLink + "<br />")
          $getLi.append($saveButton)

          $getUl.append($getLi)
          (body).append($getUl)
        }
        $saveButton()
      }

    }
