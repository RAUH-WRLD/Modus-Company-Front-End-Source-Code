"use strict"
export const data = {
    globalVariables: {
        header: {
            menuButton: "#menu-mobile",
            menuButtonSymbol : "#menu-mobile > i",
            menuItem: ".header-menu-mobile__item",
            portfolioLinkDesktop: ".portfolio-desktop",
            portfolioLinkMobile: ".portfolio-mobile",
            portfolioLinkSymbolDesktop: ".portfolio-symbol-desktop",
            portfolioLinkSymbolMobile: ".portfolio-symbol-mobile"
        }
    },
    otherVariables: {
        index: {
            mainSlider: {
                prev: "#sponsors-slider-prev",
                next: "#sponsors-slider-next",
                slide: ".sponsors__slider-slide",
                sliderItems: ".sponsors__slider-item",
                sliderBars: ".sponsors__slider-bars",
                createSliderBars: true
            },
            clientsSlider: {
                prev: "#our-clients-slider-prev",
                next: "#our-clients-slider-next",
                slide: ".our-clients__slider-slide",
                sliderItems: ".our-clients__slider-item",
                createSliderBars: false
            }
        },
        portfolio_5: {
            portfolioSlider: {
                prev: "#portfolio-products-slider-prev",
                next: "#portfolio-products-slider-next",
                slide: ".portfolio__slider-slide",
                sliderItems: ".portfolio__slider-item",
                sliderBars: ".portfolio__slider-bars",
                createSliderBars: true,
                isMultipleSlider: false
            },
            portfolioProductsSlider: {
                prev: "#slider-item-slider-prev",
                next: "#slider-item-slider-next",
                slide: ".slider-item__slider-slide",
                sliderItems: ".portfolio-products__slider-item",
                createSliderBars: false,
                isMultipleSlider: true
            },
            projectsSlider: {
                prev: "#related-projects-slider-prev",
                next: "#related-projects-slider-next",
                slide: ".related-projects__slider-slide",
                sliderItems: ".related-projects__slider-item",
                createSliderBars: false,
                isMultipleSlider: false
            }
        },
        features: {
            projectsSlider: {
                prev: "#features__project-slider-prev",
                next: "#features__project-slider-next",
                slide: ".features__project-slider-slide",
                sliderItems: ".features__project-slider-item",
                sliderBars: ".features__project-slider-bars",
                createSliderBars: true
            },
            blogSlider: {
                prev: "#features__blog-slider-prev",
                next: "#features__blog-slider-next",
                slide: ".features__blog-slider-slide",
                sliderItems: ".features__blog-slider-item",
                sliderBars: ".features__blog-slider-bars",
                createSliderBars: true
            },
            sidebarSlider: {
                prev: "#features__sidebar-slider-prev",
                next: "#features__sidebar-slider-next",
                slide: ".features__sidebar-slider-slide",
                sliderItems: ".features__sidebar-slider-item",
                sliderBars: ".features__sidebar-slider-bars",
                createSliderBars: true
            },
            accordions: {
                allAccordionsItems: ".accordion",
                allAccordionsItemsInfo: ".accordion__info",
                accordionsTitles: ".accordion__title",
                classForToggling_1: "accordion-active",
                classForToggling_2: "accordion-info-active",
                symbol: ".accordion__title > i",
                symbolClassForToggling: "fa-minus"
            },
            tabsRow_1: {
                tabsTitles: ".tabs__row-start > .tabs > .tabs__titles > h3",
                tabsItemsInfo: ".tabs__row-start > .tabs > .tabs__info > .tabs__info-item",
                classForAdding_1: "tab-active",
                classForAdding_2: "tab-info-active"
            },
            tabsRow_2: {
                tabsTitles: ".tabs__row-end > .tabs > .tabs__titles > h3",
                tabsItemsInfo: ".tabs__row-end > .tabs > .tabs__info > .tabs__info-item",
                classForAdding_1: "tab-active",
                classForAdding_2: "tab-info-active"
            }
        },
        about: {
            clientsSlider: {
                prev: "#our-clients-slider-prev",
                next: "#our-clients-slider-next",
                slide: ".our-clients__slider-slide",
                sliderItems: ".our-clients__slider-item",
                createSliderBars: false
            }
        },
        services: {
            clientsSlider: {
                prev: "#our-clients-slider-prev",
                next: "#our-clients-slider-next",
                slide: ".our-clients__slider-slide",
                sliderItems: ".our-clients__slider-item",
                createSliderBars: false
            }
        },
        blog: {
            blogSlider: {
                prev: "#info__blog-slider-prev",
                next: "#info__blog-slider-next",
                slide: ".info__blog-slider-slide",
                sliderItems: ".info__blog-slider-item",
                sliderBars: ".info__blog-slider-bars",
                createSliderBars: true
            },
            commentsSlider: {
                prev: "#comments-slider-prev",
                next: "#comments-slider-next",
                slide: ".comments__slider-slide",
                sliderItems: ".comments__slider-item",
                createSliderBars: false
            }
        }
    }
};