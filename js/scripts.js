// back end
function Ticket(movie, age, time) {
  this.movieTitle = movie;
  this.buyerAge = age;
  this.movieTime = time;
}

Ticket.prototype.ticketPrice = function () {
  if (this.buyerAge > 65 || this.buyer < 12) {
    return 5;
  } else {
    return 10;
  }
}

Ticket.prototype.matineeDiscount = function () {
  if (this.movieTime === "11:30 am") {
    return 1;
  } else {
    return 0;
  }
}

Ticket.prototype.notMature = function () {
  if (this.movieTitle === "Halloween H2O" && this.buyerAge < 17) {
    return false;
  } else {
    return true;
  }
}

// front end
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var movie = $("#movieInput").val();
    var age = $("#ageInput").val();
    var time = $("#timeInput").val();

    var movieTicket = new Ticket(movie, age, time);

    if (!movieTicket.notMature()) {
      alert("Sorry, you are not old enough to purchase this ticket. Fievel will be your friend, not the murderers.")
      } else {
        $(".output").text("Your ticket for " + movieTicket.movieTitle + " at " + movieTicket.movieTime + " is $" + (movieTicket.ticketPrice() - movieTicket.matineeDiscount()));
      }

  });

});

//   " is " + movieTicket.ticketPrice - movieTicket.matineeDiscount
