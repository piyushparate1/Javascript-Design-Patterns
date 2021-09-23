D365KB = window.D365KB || { __namespace: true };
D365KB.Logger = D365KB.Logger || { __namespace: true };

D365KB.Constants = D365KB.Constants || { __namespace: true };

D365KB.Account = D365KB.Account || { __namespace: true };
D365KB.Helper = D365KB.Helper || { __namespace: true };


(function ()
{
    this.PublicFunction = function () { };

    this.PublicEnum = function () { throw new Error("Constructor not implemented this is a static enum."); };

    var _PrivateVariable = [];

    function _PrivateFunction() { };

}).call(D365KB.Helper);


(function ()
{
    this.Log = function (objectToLog)
    {
        console.log(objectToLog);
        //alert(objectToLog);
    };
}).call(D365KB.Logger);


(function ()
{
    this.Entity = {
        AccountLogicalName: "account",
    };

}).call(D365KB.Constants);


(function ()
{
    this.OnLoad = function ()
    {
        D365KB.Logger.Log("Piyush");
    };
}).call(D365KB.Account);


document.onload = D365KB.Account.OnLoad;