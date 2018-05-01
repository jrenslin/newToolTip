/**
 * A simple implementation of a tooltip.
 *
 * @author Joshua Ramon Enslin <joshua@jrenslin.de>
 */

document.addEventListener("DOMContentLoaded", function () {

    /**
     * Function for setting the alignment of an element.
     *
     * @param {Event}      e    Event triggering the execution of this function.
     * @param {DOMElement} elem Dom element to position.
     *
     * @return {void}
     */
    function getDirection(e, elem) {

        if (window.innerHeight < e.clientY + elem.clientHeight) {
            elem.style.top    = "";
            elem.style.bottom = (window.innerHeight - e.clientY) + "px";
        }
        else {
            elem.style.bottom  = "";
            elem.style.top     = (e.clientY + 2) + "px";
        }
        if (window.innerWidth < e.clientX + elem.clientWidth) {
            elem.style.left  = "";
            elem.style.right = (window.innerWidth - e.clientX) + "px";
        } else {
            elem.style.right = "";
            elem.style.left  = (e.clientX + 2) + "px";
        }

    }

    let triggers = document.getElementsByClassName("newToolTipTag");
    for (let i = 0, max = triggers.length; i < max; i++) {

        let trigger = triggers[i];
        let dataTarget = trigger.getAttribute("data-for");
        let target = document.getElementById("tooltip_" + dataTarget);

        trigger.addEventListener("mouseover", function(e) {
            let newMain = document.getElementById("newToolTipMain");
            if (newMain !== null) return;
            newMain = target.cloneNode(true);
            newMain.id = "newToolTipMain";
            document.getElementsByTagName("body")[0].appendChild(newMain);
            newMain.classList.add("visible");
            getDirection(e, newMain);
        });
        trigger.addEventListener("mousemove", function(e) {
            let newMain = document.getElementById("newToolTipMain");
            getDirection(e, newMain);
        });
        trigger.addEventListener("mouseout", function(e) {
            let newMain = document.getElementById("newToolTipMain");
            if (newMain.classList.contains("sticked")) return;
            newMain.classList.remove("visible");
            document.getElementsByTagName("body")[0].removeChild(newMain);
        });
        trigger.addEventListener("click", function(e) {
            document.getElementById("newToolTipMain").classList.toggle("sticked");
        });

    }

});

