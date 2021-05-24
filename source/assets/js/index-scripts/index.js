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
class MainSlider extends GlobalSlider {
    constructor(data, options) {
        super(data, options);
    };
};
class ClientsSlider extends GlobalSlider {
    constructor(data, options) {
        super(data, options);
    };
};
const mainSlider = new MainSlider(data.otherVariables.index.mainSlider, {
    value_1: 100,
    breakpoint: -200,
    unit: "%"
});
const clientsSlider = new ClientsSlider(data.otherVariables.index.clientsSlider, {
    value_1: 200,
    breakpoint: -1200,
    unit: "px"
});
