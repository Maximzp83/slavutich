function slideImageHeight() {
    var documentWidth = document.documentElement.clientWidth,
        height;
    var headStyles = document.querySelector("head > style");
    // console.log(head);

    height = documentWidth < 1920 ? Math.ceil(documentWidth / 2.52) : 760;
    height = height < 440 ? 440 : height;

    headStyles.innerHTML = ' #slider, #slider .slide  { height: ' + height + 'px;' + ' width: 100%; }';
}

slideImageHeight();

window.onresize = function () {
    slideImageHeight();
};


$(document).ready(function () {

    (function buttonsModule() {

        // ==========Header Search input show/hide==========

        function toggle(toggleContent) {

            for (let i = 0; i < toggleContent.length; i++) {
                toggleContent[i].classList.toggle("hidden");
            }
        }

        function openElements(toggleContent) {
            for (let i = 0; i < toggleContent.length; i++) {
                toggleContent[i].style.display = "block";
            }
        }

        function closeElements(toggleContent) {
            for (let i = 0; i < toggleContent.length; i++) {
                toggleContent[i].style.display = "none";
            }
        }

        // --------------------------------------------

        var headerNode = document.getElementById("header"),
            searchButton = headerNode.querySelector(".operational-buttons-wrapper button[name='search-button']"),
            closeSearchButton = headerNode.querySelector(" button[name='close-search-button']");
        var searchInputToggleContent = [];

        searchInputToggleContent.push(headerNode.querySelector("form[name='search-form']"));
        searchInputToggleContent.push(headerNode.querySelector("nav"));
        searchInputToggleContent.push(headerNode.querySelector(".operational-buttons-wrapper"));
        // console.log(headerNode);

        searchButton.onclick = function () {
            toggle(searchInputToggleContent)
        };
        closeSearchButton.onclick = function () {
            toggle(searchInputToggleContent)
        };


        // ==========Header collapse Menu ==========
        // ==========Header collapse Menu show/hide==========

        var mainOverlayNode = document.getElementById("main-overlay");
        var openCollapseMenuButton = headerNode.querySelector("button[name='open-menu-button']"),
            closeCollapseMenuButton = headerNode.querySelector("button[name='close-menu-button']");
        var collapseMenuToggleContent = [];

        // collapseMenuToggleContent.push(openCollapseMenuButton);
        collapseMenuToggleContent.push(mainOverlayNode);
        collapseMenuToggleContent.push(document.getElementById("header-collapse-menu"));

        // console.log(closeSearchButton);

        openCollapseMenuButton.onclick = function () {
            openElements(collapseMenuToggleContent)
        };
        closeCollapseMenuButton.onclick = function () {
            closeElements(collapseMenuToggleContent)
        };


        // ==========Search form show/hide==========
        var collapseMenu = document.getElementById("header-collapse-menu"),
            collapseMenuSearchButton = collapseMenu.querySelector("button[name='search-button']"),
            closeCollapseMenuSearchButton = collapseMenu.querySelector("button[name='close-search-button']");
        var searchFormToggleContent = [];

        searchFormToggleContent.push(collapseMenu.querySelector("form[name='mobile-search-form']"));
        searchFormToggleContent.push(collapseMenu.querySelector(".buttons-menu"));
        searchFormToggleContent.push(collapseMenuSearchButton);
        searchFormToggleContent.push(closeCollapseMenuButton);

        collapseMenuSearchButton.onclick = function () {
           toggle(searchFormToggleContent)
        };
        closeCollapseMenuSearchButton.onclick = function () {
            toggle(searchFormToggleContent)
        };

        // ==========Lang menu show/hide==========
        var collapseMenuLangButton = collapseMenu.querySelector(".buttons-menu button[name='collapse-select-lang']"),
            langButtons = collapseMenu.querySelectorAll(".buttons-menu .collapse-lang-button");
        // console.log(langButtons[0]);

        var langMenuToggleContent = [];

        // langMenuToggleContent.push(collapseMenuLangButton);
        langMenuToggleContent += langButtons;
        // console.log(langMenuToggleContent);

        collapseMenuLangButton.onclick = function () {
            toggle(langButtons)
        };

        for (let i = 0; i < langButtons.length; i++) {
            langButtons[i].onclick = function () {
                toggle(langButtons)
            }
        }

        // ==========Accordion show/hide==========

        var subMenuElements = collapseMenu.querySelectorAll(".menu-content .sub-menu");
        var accordionMenuTitles = [];

         for (let i = 0; i < subMenuElements.length; i++) {
             accordionMenuTitles.push(subMenuElements[i].parentElement.querySelector(".menu-element-title"));
         }

        for (let i = 0; i < accordionMenuTitles.length; i++) {

            accordionMenuTitles[i].onclick =  function () {
                toggleAccordion(accordionMenuTitles[i])
            }
        }

        function toggleAccordion(menuTitle) {
            var title = menuTitle,
                menuElement = title.nextElementSibling,
                icon = title.querySelector(".fa"),
                menuHeight = menuElement.firstElementChild.offsetHeight,
                styles = getComputedStyle(menuElement);
            // console.log(icon);


            if (styles.height === "0px") {
                menuElement.style.height = menuHeight + "px";
                // menuElement.style.visibility = "visible";
                // menuElement.style.opacity = 1;
                icon.classList.remove("fa-angle-down");
                icon.classList.add("fa-angle-up");


            } else {
                menuElement.style.height = 0;
                // menuElement.style.visibility = "hidden";
                // menuElement.style.opacity = 0;
                icon.classList.remove("fa-angle-up");
                icon.classList.add("fa-angle-down");
            }

        }



    })(); // ---------buttonsModule END--------

    // ==========Services Description Show/Hide==========
    /*(function services() {

     function descriptionShow(serviceItem) {
     var description = serviceItem.querySelector(".description-wrapper");

     description.style.height = description.firstElementChild.offsetHeight + 25 + "px";
     }
     function descriptionHide(serviceItem) {
     var description = serviceItem.querySelector(".description-wrapper");

     description.style.height = 0;
     }


     var services = document.querySelectorAll("#services .service-item");

     for (var i = 0; i < services.length; i++) {
     services[i].onmouseenter = function (e) {
     descriptionShow(e.target);

     };
     services[i].onmouseleave = function (e) {
     setTimeout(function () {
     descriptionHide(e.target);
     }, 300);

     };
     }

     })();*/

    // ----------------In OOP-------------

    function DescriptionAnimate(action, event) {
        // var t0 = performance.now();

        var _action = action;
        this._serviceItem = event.target;
        var serviceDescription = this._serviceItem.querySelector(".description-wrapper");
        var height = serviceDescription.firstElementChild.offsetHeight + 25 + "px";

        var showDescription = function () {
            serviceDescription.style.height = height;

            // var t1 = performance.now();
            // console.log("Call to DescriptionAnimate Show took " + (t1 - t0) + " milliseconds."); //0.66
        };
        var hideDescription = function () {
            setTimeout(function () {
                serviceDescription.style.height = 0;
            }, 300);

            // var t1 = performance.now();
            // console.log("Call to DescriptionAnimate Hide took " + (t1 - t0) + " milliseconds."); // 1.0
        };

        switch (_action) {
            case "show":
                showDescription();
                break;

            case "hide":
                hideDescription();
                break;
        }
    }

    var serviceItems = document.querySelectorAll("#services .service-item");

    for (let i = 0; i < serviceItems.length; i++) {

        /*serviceItems[i].addEventListener( "mouseenter", function(e) {
         var show = new DescriptionAnimate("show", e);
         } );
         serviceItems[i].addEventListener( "mouseleave", function(e) {
         var hide = new DescriptionAnimate("hide", e);
         } );*/

        serviceItems[i].onmouseenter = function (e) {
            new DescriptionAnimate("show", e);
        };
        serviceItems[i].onmouseleave = function (e) {
            new DescriptionAnimate("hide", e);
        };
    }


    /*function Service(element) {
     this._serviceItem = element;
     var serviceDescription = this._serviceItem.querySelector(".description-wrapper");
     var height = serviceDescription.firstElementChild.offsetHeight + 25 + "px";

     this.showDescription = function () {
     serviceDescription.style.height = height;
     };
     this.hideDescription = function () {
     serviceDescription.style.height = 0;
     };
     }*/

    /*Service.prototype.addEventListener = function(event, handler) {
     var elementNode = this._serviceItem;
     // console.log(elementNode);
     if (!elementNode) {
     throw 'No Service-Item found';
     }
     if (elementNode.addEventListener) {
     elementNode.addEventListener(event, handler, false);
     } else if (elementNode.attachEvent) {
     elementNode.attachEvent('on' + event, handler);
     }
     };*/

// ----------------------------------------------
//     ========Partners Slider nav Icons=========

    /*(function () {
     var prevButton = document.querySelector("#partners .owl-nav .owl-prev"),
     nextButton = document.querySelector("#partners .owl-nav .owl-next");

     // console.log(prevButton);

     var prevIcon = document.createElement('i'),
     nextIcon = document.createElement('i');

     prevIcon.className = "fa fa-angle-left fa-lg";
     nextIcon.className = "fa fa-angle-right fa-3x";

     prevButton.appendChild(prevIcon);
     nextButton.appendChild(nextIcon);

     })();*/


});


// ---------------trash---------
/*var slideImageHeight = function() {
 var height, width,
 documentWidth = document.documentElement.clientWidth;
 var sliderElem = document.getElementById("slider"),
 slides = document.querySelectorAll(".slide");

 if (documentWidth < 1920) {
 height = documentWidth / 2.52;
 height = height < 440 ? 440 : height;

 width = documentWidth;
 width = width < 1110 ? 1110 : width;


 } else {
 height = 760;
 width = 1920;
 }

 Math.round(height);

 sliderElem.style.height = height + "px";
 sliderElem.style.width = 100 + "%";

 for (var i = 0; i < slides.length; i++) {
 // console.log(slides[i]);
 imgElement = slides[i].querySelector("img");

 if (imgElement) {
 imgElement.style.height = height + "px";
 imgElement.style.width = width + "px";
 imgElement.style.top = 0;
 }

 slides[i].style.height = height + "px";
 }

 };*/

// slideImageHeight();

// ----on resize window event function -----
/*var resize = function (e) {
 // slideImageHeight();
 };*/

/*(function () {
 var time;
 window.onresize = function (e) {
 if (time) {
 clearTimeout(time);
 }

 time = setTimeout(function () {
 resize(e);
 }, 300);
 }
 })();*/

/*(function centerSlideImage() {
 var windowWidth = document.documentElement.clientWidth;
 // var images = document.querySelectorAll("#slider img");
 var sliderItems = document.querySelectorAll("#slider .owl-item");

 // console.log('width = ', images[0].offsetWidth || images[0].clientWidth);
 // console.log('height = ', images[0].offsetHeight || images[0].clientHeight);
 if (sliderItems) {

 if (windowWidth < 1110) {
 var owlStage = document.querySelector("owl-stage"),
 owlStageWidth = 0;

 for (var i = 0; i < sliderItems.length; i++) {
 var img = sliderItems[i].querySelector("img");
 var imgWidth = ( img.offsetWidth || img.clientWidth ) - 25,
 imgHeight = img.offsetHeight || img.clientHeight,
 imgMargin = 0;

 console.log('img height = ', imgHeight);

 console.log('window width = ', windowWidth);

 sliderItems[i].style.marginRight =  (imgWidth / 4) + "px";
 imgMargin = -1 * (imgWidth / 4);

 img.style.marginLeft = imgMargin + "px";
 owlStageWidth +=  sliderItems[i].clientWidth + (-1 * imgMargin) ;

 // console.log('image margin = ', images[i].style.marginLeft);
 }
 console.log("owlStageWidth = ", owlStageWidth);
 console.log("owlStage Element = ", owlStage );

 owlStage.style.width = owlStageWidth + "px";
 }
 }
 })();*/



