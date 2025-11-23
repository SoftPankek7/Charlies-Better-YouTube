// ==UserScript==
// @name         Charlie's Better YT
// @version      1.69
// @description  Clean up the UI - and remove shorts in the home page!
// @author       Softpankek
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

// There is a Extension Version availible TOO!
// https://github.com/SoftPankek7/Charlies-Better-YouTube/tree/main

(function() {

    const speed = 100

    function tweak_ui() {
        function remove_class(classname) {
            const temp = document.getElementsByClassName(classname);
            for (let i = 0; i < temp.length; i++) {temp[i].style.display = "none"};
        };
        function remove_class_if_id(classname, idname) {
            const temp = document.getElementsByClassName(classname);
            for (let i = 0; i < temp.length; i++) {
                if (temp[i].id === idname) {
                    temp[i].style.display = "none";
                }
            }
        }

        // const adBanners = document.getElementsByClassName("yt-lockup-view-model");
        // for (let i = 0; i < adBanners.length; i++) {adBanners[i].style.display = "none"};

        // remove shorts from homepage
        remove_class("style-scope ytd-rich-shelf-renderer")
        remove_class("yt-simple-endpoint style-scope ytd-mini-guide-entry-renderer");

        document.getElementById("country-code").style.display = "none"; // remove "country code" - the idiotic letters on top of the YT logo
        document.getElementById("voice-search-button").style.display = "none"; // remove voice searching, no idiot uses that
        document.getElementById("big-yoodle").style.display = "none";
        remove_class_if_id("style-scope ytd-rich-grid-renderer", "header"); // remove the "chips" - where your genres go
        remove_class("style-scope ytd-rich-section-renderer"); // Stupid "sections" - where they put holiday stuff there
        remove_class("ytd-banner-promo-renderer-layout-container style-scope ytd-banner-promo-renderer") // "promos" on the top

        // cleaning up the profile menu
        remove_class_if_id("style-scope ytd-active-account-header-renderer", "email"); // Hide the EMAIL from the profile at all times.
        remove_class_if_id("style-scope ytd-active-account-header-renderer", "channel-handle"); // Hide the ORIGINAL name from the profile at all times.
        document.getElementById("manage-account").style.marginTop = "0px"; // clean up the "Manage Account" to make it closer, basically make it nicer.
        remove_class_if_id("menu-container style-scope ytd-multi-page-menu-renderer", "container"); // Make it smaller
        // remove_class("style-scope ytd-masthead");


        // making UI nicer

        document.getElementById("frosted-glass.with-chipbar.ytd-app").style.backdropFilter = "blur(90px)"; // make "frosted glass" feel more frosted
        const temp = document.getElementsByClassName("style-scope ytd-app"); // add frosted glass to the sidebar, and add more tweaks
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === "guide-inner-content") {
                temp[i].style.background = "linear-gradient(to top, purple, rgba(0,0,0,0))";
                temp[i].style.backdropFilter = "blur(90px)";
                temp[i].style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.3)";
            }
        }

        const temp2 = document.getElementsById("guide-inner-content"); // add frosted glass to the sidebar, and add more tweaks
        for (let i = 0; i < temp2.length; i++) {
            if (temp2[i].id === "guide-inner-content") {
                temp2[i].style.background = "linear-gradient(to top, purple, rgba(0,0,0,0))";
                temp2[i].style.backdropFilter = "blur(90px)";
                temp2[i].style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.3)";
            }
        }

        temp.style.height = "150px"; // I NEED to make THIS work D':

        document.getElementsByClassName("style-scope ytd-multi-page-menu-renderer").style.background = "var(--yt-frosted-glass-desktop)";
        document.getElementsByClassName("style-scope ytd-multi-page-menu-renderer").style.backdropFilter = "blur(90px)";

        // const ytShortsButton2 = document.getElementsByClassName("style-scope ytd-item-section-renderer");
        // for (let i = 0; i < ytShortsButton2.length; i++) {ytShortsButton2[i].style.display = "none"};
    }
    window.addEventListener("load", tweak_ui);
    setInterval(tweak_ui, speed);
})();
