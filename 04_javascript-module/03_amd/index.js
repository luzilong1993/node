(function () {
    require.config({
        baseUrl: './modules',
        path: {
            "bar": "./modules/bar",
            "foo": "./modules/foo"
        }
    })

    require(['foo'], function (foo) { })
})()