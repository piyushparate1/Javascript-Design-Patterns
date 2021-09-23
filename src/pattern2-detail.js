if (typeof (D365KB) === "undefined")
{
	let userSettings = Xrm.Utility.getGlobalContext().userSettings;
	let lang = "en";

	function privateFunction()
	{
		console.log("I am private function");
	}

	D365KB = {
		OnLoad_Account: function () {
			console.log("I am public function");
		},
		OnSave_Account: function () {
			console.log("I am public function");
		}
	};
}


if (typeof (D365KB_Logger) === "undefined") {
	D365KB_Logger = {
		Log: function (objectToLog) {
			console.log(objectToLog);
		}
	}
}


if (typeof (D365KB_Constant) === "undefined") {
	D365KB_Constant = {
		Entity: {
			AccountLogicalName: "account",
		}
	}
}