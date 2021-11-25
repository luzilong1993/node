(function () {
    require.config({
        baseUrl: '',
        path: {
            "bar": "./modules/bar",
            "foo": "./modules/foo"
        }
    })

    require(['foo'], function (foo) { })
})()