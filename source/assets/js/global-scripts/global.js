"use strict"
import {data} from "../data/data.min.js";
class GlobalFunctions {
    constructor(data) {
        this.menu(data.header);
    };
    menu(data) {
        function workWithDesktopAndMobilePortfolio() {
            const portfolioDesktop = document.querySelector(data.portfolioLinkDesktop);
            const portfolioMobile = document.querySelector(data.portfolioLinkMobile);
            const portfolioSymbolDesktop = document.querySelector(data.portfolioLinkSymbolDesktop);
            const portfolioSymbolMobile = document.querySelector(data.portfolioLinkSymbolMobile); 
            const processPortfolioOnMobilesAndTablets = () => {
                portfolioSymbolMobile.addEventListener("click", function(event) {
                    event.preventDefault();
                    this.classList.remove("fa-angle-down");
                    this.classList.add("fa-angle-up");
                });
                document.addEventListener("click", function(event) {
                    if (event.target.className !== portfolioSymbolMobile.className) {
                        portfolioSymbolMobile.classList.remove("fa-angle-up");
                        portfolioSymbolMobile.classList.add("fa-angle-down");
                    };
                });
            };
            const processPortfolioOnDesktop = () => {
                portfolioDesktop.addEventListener("mouseover", () => {
                    portfolioSymbolDesktop.classList.remove("fa-angle-down");
                    portfolioSymbolDesktop.classList.add("fa-angle-up");
                });
                portfolioDesktop.addEventListener("mouseleave", () => {
                    portfolioSymbolDesktop.classList.remove("fa-angle-up");
                    portfolioSymbolDesktop.classList.add("fa-angle-down");
                });
            };
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return processPortfolioOnMobilesAndTablets();
            else return processPortfolioOnDesktop();
        };
        function workWithMobileMenu() {
            const menuBtn = document.querySelector(data.menuButton);
            const menuBtnSymbol = document.querySelector(data.menuButtonSymbol);
            const menu = document.querySelector(data.menuItem);
            menuBtn.addEventListener("click", function() {
                this.classList.toggle("header-button-active");
                menuBtnSymbol.classList.toggle("fa-bars");
                menuBtnSymbol.classList.toggle("fa-times");
                menu.classList.toggle("active");
            });
        };
        workWithDesktopAndMobilePortfolio();
        workWithMobileMenu();
    };
};
const globalFunctions = new GlobalFunctions(data.globalVariables);