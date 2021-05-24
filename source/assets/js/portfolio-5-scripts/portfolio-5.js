"use strict"
import {data} from "../data/data.min.js";
class GlobalSlider {
    constructor(data, options) {
        this.slider(data, options);
    };
    slider(data, options) {
        if (data.isMultipleSlider === true) {
            const prev = document.querySelectorAll(data.prev);
            const next = document.querySelectorAll(data.next);
            const slide = document.querySelectorAll(data.slide);
            const sliderItems = document.querySelectorAll(data.sliderItems);
            const variablesArr = [prev, next, slide, sliderItems];
            slider([data, options, variablesArr, data.isMultipleSlider]);
        } else if (!data.isMultipleSlider) {
            const prev = document.querySelector(data.prev);
            const next = document.querySelector(data.next);
            const slide = document.querySelector(data.slide);
            const sliderItems = document.querySelectorAll(data.sliderItems);
            const variablesArr = [prev, next, slide, sliderItems];
            slider([data, options, variablesArr, data.isMultipleSlider]);
        };
        function slider([data, options, variables, isMultiple]) {
            let value = 0;
            let slideIndex = 1;
            const [prev, next, slide, sliderItems] = variables;
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
                slider(isHaveBars);
            };
            function slider(isHaveBars) {
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
                            const allSliderElements = document.querySelectorAll(".slider-bar");
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
                    function flipThrough(item_1, item_2) {
                        if (item_2 === slide) {
                            return item_1.addEventListener("click", () => {
                                value = value - options.value_1;
                                item_2.forEach(slide => {
                                    slide.style.cssText = `transform: translateX(${value + options.unit}); transition: all ease 0.5s;`;
                                    if (value < options.breakpoint) value = 0; slide.style.cssText = `transform: translateX(${value + options.unit}); transition: all ease 0.5s;`;
                                });
                                return switchAction(1, isHaveBars);
                            });
                        } else if (item_2 === null || item_2 === undefined || item_2 === false) {
                            return item_1.addEventListener("click", () => {
                                value = value - options.value_1;
                                slide.style.cssText = `transform: translateX(${value + options.unit}); transition: all ease 0.5s;`;
                                if (value < options.breakpoint) value = 0; slide.style.cssText = `transform: translateX(${value + options.unit}); transition: all ease 0.5s;`;
                                return switchAction(1, isHaveBars);
                            });
                        };
                    };
                    if (!isMultiple) {
                        return flipThrough(button, null);
                    } else {
                        for (let index = 0; index < button.length; index++) {
                            const item = button[index];
                            flipThrough(item, slide);
                        };
                    };
                };
                flipThroughNext(next);
                function flipThroughPrev(button) {
                    function flipThrough(item_1, item_2) {
                        if (item_2 === slide) {
                            return item_1.addEventListener("click", () => {
                                value = value + options.value_1;
                                item_2.forEach(slide => {
                                    slide.style.cssText = `transform: translateX(${value + options.unit}); transition: all ease 0.5s;`;
                                    if (value > 0) value = options.breakpoint; slide.style.cssText = `transform: translateX(${value + options.unit}); transition: all ease 0.5s;`;
                                });
                                return switchAction(-1, isHaveBars);
                            });
                        } else if (item_2 === null || item_2 === undefined || item_2 === false) {
                            return item_1.addEventListener("click", () => {
                                value = value + options.value_1;
                                slide.style.cssText = `transform: translateX(${value + options.unit}); transition: all ease 0.5s;`;
                                if (value > 0) value = options.breakpoint; slide.style.cssText = `transform: translateX(${value + options.unit}); transition: all ease 0.5s;`;
                                return switchAction(-1, isHaveBars);
                            });
                        };
                    };
                    if (!isMultiple) {
                        return flipThrough(button, null);
                    } else {
                        for (let index = 0; index < button.length; index++) {
                            const item = button[index];
                            flipThrough(item, slide);
                        };
                    };
                };
                flipThroughPrev(prev);
            };
        };
    };
};
class PortfolioSlider extends GlobalSlider {
    constructor(data, options) {
        super(data, options);
    };
};
class PortfolioProductsSlider extends GlobalSlider {
    constructor(data, options) {
        super(data, options);
    };
};
class ProjectsSlider extends GlobalSlider {
    constructor(data, options) {
        super(data, options);
    };
};
const portfolioSlider = new PortfolioSlider(data.otherVariables.portfolio_5.portfolioSlider, {
    value_1: 100,
    breakpoint: -200,
    unit: "%"
});
const portfolioProductsSlider = new PortfolioProductsSlider(data.otherVariables.portfolio_5.portfolioProductsSlider, {
    value_1: 100,
    breakpoint: -200,
    unit: "%"
});
const projectsSlider = new ProjectsSlider(data.otherVariables.portfolio_5.projectsSlider, {
    value_1: 300,
    breakpoint: -2100,
    unit: "px"
});
