if (typeof (D365KB) === "undefined")
{
	let privateVariable = "I am private variable";

	function privateFunction()
	{
		console.log("I am private function");
	}

	D365KB = {
		PublicFunction: function () {
			console.log("I am public function");
		}
	};
}