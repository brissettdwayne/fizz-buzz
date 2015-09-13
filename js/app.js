$(document).ready(function() {
	$("#add-button").click(function() {
		var someNum = document.getElementById("text-box").value;
		for (var i = 1; i <= someNum; i++) {
			if (i % 3 == 0 && i % 5 == 0) {
				console.log("FizzBuzz");
<<<<<<< HEAD
				$('p').append("FizzBuzz<br>");
	}
			else if (i % 5 == 0) {
				console.log("Buzz");
				$('p').append("Buzz<br>");
	}
			else if (i % 3 == 0) {
				console.log("Fizz");
				$('p').append("Fizz<br>");
	}
			else {
				console.log(i);
				$('p').append(i+"<br>");
=======
				$("p").append("FizzBuzz<br>");
	}
			else if (i % 5 == 0) {
				console.log("Buzz");
				$("p").append("Buzz<br>");
	}
			else if (i % 3 == 0) {
				console.log("Fizz");
				$("p").append("Fizz<br>");
	}
			else {
				console.log(i);
				$("p").append(i+"<br>")
>>>>>>> master
	};
};
	$('p').append();
});
});
