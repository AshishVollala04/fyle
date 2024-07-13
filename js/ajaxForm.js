$("#ajaxForm").submit(function (e) {
	e.preventDefault();
	var action = $(this).attr("action");
	$.ajax({
		type: "POST",
		url: action,
		crossDomain: true,
		data: new FormData(this),
		dataType: "json",
		processData: false,
		contentType: false,
		headers: {
			Accept: "application/json",
		},
	})
		.done(function () {
			$(".success").addClass("is-active");
			$("#ajaxForm")[0].reset();
			// Show success toast
			toastr.success("Submitted Successfully!");
			// Close modal
			$("#modal").modal("hide");
		})
		.fail(function () {
			// Show error toast
			toastr.error("An error occurred! Please try again later.");
		});
});
