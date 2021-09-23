D365KB = window.D365KB || {};
D365KB.SampleClass1 = D365KB.SampleClass1 || {};
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
}).call(D365KB.SampleClass1);


D365KB = window.D365KB || {};
D365KB.SampleClass2 = D365KB.SampleClass2 || {};
D365KB.SampleClass2 = (function (obj)
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