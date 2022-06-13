(function () {
    
    var maxLength = 0;
    
    var timeCounter = setInterval(function () {
        getElementIndex();
    }, 4000);



    function getElementIndex() {
        let elementArray = [];
        for (let i = 0; i < maxLength; i++) {
            let dataIndex = document.querySelector(`[data-index='${i}']`);
            let index = dataIndex.dataset.index - 1 < 0
                ? maxLength - 1 : dataIndex.dataset.index - 1;
            elementArray.push({ dataIndex, index });
        };
        changeCard(elementArray);
    };



    function changeCard(arrayArg) {
        arrayArg.forEach((things) => {
            things.dataIndex.dataset.index = things.index;
        });
    };



    function whenStart(aim) {
        let item = document.querySelector(aim).querySelectorAll('.main__card');
        maxLength = item.length;
        item.forEach((element, i) => {
            element.dataset.index = i;
        });
    };



    whenStart('.main__card-group');
})();