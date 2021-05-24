"use strict"
import {data} from "../data/data.min.js";
class GlobalSlider {
    constructor(data, options) {
        this.slider(data, options);
    };
    slider(data, options) {
        function slider(data, options) {
            const prev = document.querySelector(data.prev);
            const next = document.querySelector(data.next);
            const slide = document.querySelector(data.slide);
            const sliderItems = document.querySelectorAll(data.sliderItems);
            let value = 0;
            let slideIndex = 1;
            if (data.createSliderBars === true) return sliderWithBars(data.createSliderBars);
            else return slider(data.createSliderBars);
            function sliderWithBars(isHaveBars) {
                const sliderBars = document.querySelector(data.sliderBars);
                function createSliderBars(slides) {
                    const sliderBarsAmount = slides.length;
                    for (let index = 0; index < sliderBarsAmount; index++) {
                        const sliderBar = document.createElement("div");
                        sliderBar.className = "slider-bar";
                        sliderBars.appendChild(sliderBar);
                    };
                };
                createSliderBars(sliderItems);
                slider(isHaveBars, sliderBars);
            };
            function slider(isHaveBars, sliderBarsContainer) {
                function switchSlides(num, isHaveBars) {
                    if (num < 1) slideIndex = sliderItems.length;
                    else if (num > sliderItems.length) slideIndex = 1;
                    for (let index = 0; index < sliderItems.length; index++) {
                        sliderItems[index].classList.remove("slider-element-active");
                    };
                    sliderItems[slideIndex - 1].classList.add("slider-element-active");
                    if (isHaveBars === true) {
                        function switchBars(num) {
                            if (num < 1) slideIndex = sliderItems.length;
                            else if (num > sliderItems.length) slideIndex = 1;
                            const allSliderElements = document.querySelectorAll(`.${sliderBarsContainer.className} > .slider-bar`);
                            for (let index = 0; index < allSliderElements.length; index++) {
                                allSliderElements[index].classList.remove("slider-bar-active");
                            };
                            allSliderElements[slideIndex - 1].classList.add("slider-bar-active");
                        };
                        return switchBars(slideIndex);
                    };
                };
                switchSlides(slideIndex, isHaveBars);
                const switchAction = (num, isHaveBars) => switchSlides(slideIndex += num, isHaveBars); 
                function flipThroughNext(button) {
                    return button.addEventListener("click", () => {
                        value = value - options.value_1;
                        slide.style.cssText = `transform: translateX(${value + options.unit}); transition: all ease 0.5s;`;
                        if (value < options.breakpoint) value = 0; slide.style.cssText = `transform: translateX(${value + options.unit}); transition: all ease 0.5s;`;
                        return switchAction(1, isHaveBars);
                    });
                };
                flipThroughNext(next);
                function flipThroughPrev(button) {
                    return button.addEventListener("click", () => {
                        value = value + options.value_1;
                        slide.style.cssText = `transform: translateX(${value + options.unit}); transition: all ease 0.5s;`;
                        if (value > 0) value = options.breakpoint; slide.style.cssText = `transform: translateX(${value + options.unit}); transition: all ease 0.5s;`;
                        return switchAction(-1, isHaveBars);
                    });
                };
                flipThroughPrev(prev);
            };
        };
        return slider(data, options);
    };
};
class ProjectsSlider extends GlobalSlider {
    constructor(data, options) {
        super(data, options);
    };
};
class BlogSlider extends GlobalSlider {
    constructor(data, options) {
        super(data, options);
    };
};
class SidebarSlider extends GlobalSlider {
    constructor(data, options) {
        super(data, options);
    };
};
class Accordions {
    constructor(data) {
        this.accordions(data);
    };
    accordions(data) {
        const activateAccordions = (data) => {
            const accordions = document.querySelectorAll(data.allAccordionsItems);
            const accordionsTitles = document.querySelectorAll(data.accordionsTitles);
            const accordionsSymbols = document.querySelectorAll(data.symbol);
            const accordionsInfos = document.querySelectorAll(data.allAccordionsItemsInfo);
            const classForToggling_1 = data.classForToggling_1;
            const classForToggling_2 = data.classForToggling_2;
            const symbolClassForToggling = data.symbolClassForToggling;
            function iterateAll() {
                function iterateAccordions() {
                    return accordions.forEach(accordion => iterateTitles(accordion));
                };
                function iterateTitles(accordion) {
                    return accordionsTitles.forEach(title => iterateSymbols(accordion, title));
                };
                function iterateSymbols(accordion, title) {
                    return accordionsSymbols.forEach(symbol => iterateInfos([accordion, title, symbol]));
                };
                function iterateInfos([accordion, title, symbol]) {
                    return accordionsInfos.forEach(info => processAccordions([accordion, title, symbol, info]));
                };
                return iterateAccordions();
            };
            function processAccordions([accordion, title, symbol, info]) {
                return title.addEventListener("click", () => {
                    if (title.id === info.id && title.id === accordion.id && title.id === symbol.id) {
                        symbol.classList.toggle(symbolClassForToggling);
                        accordion.classList.toggle(classForToggling_1);
                        info.classList.toggle(classForToggling_2);
                    };
                });
            };
            return iterateAll();
        };
        return activateAccordions(data);
    };
};
class GlobalTabs {
    constructor(data) {
        this.tabs(data);
    };
    tabs(data) {
        const activateTabs = (data) => {
            const tabsTitles = document.querySelectorAll(data.tabsTitles);
            const tabsInfos = document.querySelectorAll(data.tabsItemsInfo);
            const classForAdding_1 = data.classForAdding_1;
            const classForAdding_2 = data.classForAdding_2;
            function iterateAll() {
                function iterateTitles() {
                    return tabsTitles.forEach(title => iterateInfos(title));
                };
                function iterateInfos(title) {
                    return tabsInfos.forEach(info => processTabs(title, info));
                };
                return iterateTitles();
            };
            function processTabs(title, info) {
                return title.addEventListener("click", () => {
                    tabsTitles.forEach(title => {
                        title.classList.remove(classForAdding_1);
                        info.classList.remove(classForAdding_2);
                    });
                    title.classList.add(classForAdding_1);
                    if (title.id === info.id) return info.classList.add(classForAdding_2);
                });
            };
            return iterateAll();
        };
        return activateTabs(data);
    };
};
class TabsRow_1 extends GlobalTabs {
    constructor(data) {
        super(data);
    };
};
class TabsRow_2 extends GlobalTabs {
    constructor(data) {
        super(data);
    };
};
const projectsSlider = new ProjectsSlider(data.otherVariables.features.projectsSlider, {
    value_1: 100,
    breakpoint: -200,
    unit: "%"
});
const blogSlider = new BlogSlider(data.otherVariables.features.blogSlider, {
    value_1: 100,
    breakpoint: -200,
    unit: "%"
});
const sidebarSlider = new SidebarSlider(data.otherVariables.features.sidebarSlider, {
    value_1: 100,
    breakpoint: -200,
    unit: "%"
});
const accordions = new Accordions(data.otherVariables.features.accordions);
const tabsRow_1 = new TabsRow_1(data.otherVariables.features.tabsRow_1);
const tabsRow_2 = new TabsRow_2(data.otherVariables.features.tabsRow_2);