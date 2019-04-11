function myPropertyEditorController($scope, editorService) {

    $scope.add = function () {
        var giphyPicker = {
            apikey: $scope.model.config.apikey,
            title: "Animated Gif Search",
            view: "/App_Plugins/MyPropertyEditor/MyPicker.html",
            size: "small",
            submit: function (model) {
                $scope.model.value = model.images.original.url;
                editorService.close();
            },
            close: function () {
                editorService.close();
            }
        };
        editorService.open(giphyPicker);
    };

    $scope.remove = function () {
        $scope.model.value = null;
    };

}
angular.module('umbraco').controller("myPropertyEditorController", myPropertyEditorController);