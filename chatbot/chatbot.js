angular
  .module("chatbot", [])

  // Set Up Chat Controller
  .controller("chatCtrl", function ($scope, $timeout, $rootScope) {
    $scope.chats = [
      {
        id: 0,
        username: "Leela",
        avatar: "https://imgflip.com/s/meme/Futurama-Leela.jpg",
        messages: [
          ["1", "I can explain. It's very valuable. You won't have time for sleeping, soldier, not with all the bed making you'll be doing"],
          ["0", "Who am I making this out to? We'll go deliver this crate like professionals, and then we'll go home"],
          ["1", "No! The cat shelter's on to me. I never loved you"],
          ["0", "Oh Leela! You're the only person I could turn to"],
          ["1", "Um, is this the boring, peaceful kind of taking to the streets"],
          ["0", "That's right, baby. I ain't your loverboy Flexo, the guy you love so much. You even love anyone pretending to be him!"]
        ]
      },
      {
        id: 1,
        username: "Bender",
        avatar:
          "http://orig02.deviantart.net/9689/f/2012/027/9/c/mr_bender______classy__by_sgtconker1r-d4nqpzu.png",
        messages: [
          "Stop! Don't shoot fire stick in space canoe! Cause explosive decompression!",
          "Fry! Stay back! He's too powerful! You guys aren't Santa!",
          "Hi, I'm a naughty nurse, and I really need someone to talk to. $9.95 a minute",
          "Who are you, my warranty?!",
          "I will destroy you"
        ]
      }
    ];

    // Assign Pushed Messages To A User
    $scope.text;
    $scope.add = function () {
      var vlu = $scope.value;
      if ($scope.text) {
        $scope.chats[vlu].messages.push(["0", this.text]);
        $scope.text = "";
        console.log(vlu);
      }
    };

    // Setting The Value Scope Equal To The Chat.id Which Is Retrieved Via Ng Click - We Pass The Chat.id Through The Function
    $scope.value;
    $scope.uid = function (ix) {
      console.log(ix);

      function ixy() {
        $rootScope.value = ix;
      }
      // Delay Our Scope Change To Create A Smoother Transition
      $timeout(ixy, 750);
    };
  });

// Animation Styles
$(function () {
  var index = 0;

  function initScroll() {
    $(".message-wrap").animate(
      {
        scrollTop: $("main").height()
      },
      1000
    );
  }

  function scroll() {
    $(".message-wrap").animate(
      {
        scrollTop: 9000
      },
      1000
    );
  }

  $("input[type='submit']").click(function () {
    scroll();
  });

  $("aside")
    .find("li")
    .click(function () {
      initScroll();
      $(".init").animate(
        {
          opacity: "0"
        },
        500
      );
    });

  $("aside")
    .find("li")
    .click(function () {
      if (index == 1) {
        index = 1;
        $(".message-wrap").find(".message").css({
          opacity: "1"
        });
      } else {
        index = 1;
        $(".message-wrap").find(".message").css({
          opacity: "0"
        });
        $(".loader").delay(500).animate({
          opacity: "1"
        });
        setTimeout(function () {
          index = 0;
          $(".message-wrap").find(".message").css({
            opacity: "1"
          });
          $(".loader").animate({
            opacity: "0"
          });
        }, 3000);
      }
    });
});
