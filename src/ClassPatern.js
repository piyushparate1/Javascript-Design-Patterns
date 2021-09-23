D365KB = window.D365KB || {};
D365KB.StaticClassPattern = D365KB.StaticClassPattern || {};
(function ()
{
    this.fun = function (abc)
    {
        alert("i m public");
        _fun(abc);
    };

    function _fun(a)
    {
        alert("i m private" + a);
    };
}).call(D365KB.StaticClassPattern);

D365KB = window.D365KB || {};
D365KB.classPattern = D365KB.classPattern || {};
D365KB.classPattern = (function (obj)
{
    this.fun = function ()
    {
        alert("i m public");
        _fun(obj)
    };

    function _fun(obj)
    {
        alert("i m private" + obj);
    };
});