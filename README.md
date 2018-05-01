# A Script for Generating Tooltips

This script was written as part of my working on [museum-digital.de](https://www.museum-digital.de). Previously, we had used a tooltip-generating script (e.g. for help text supposed to only appear on hovering over a given symbol) that required both inline javascript and the eval() command. Implementing stricter content securities, this script had to be replaced. The present script serves as this replacement (hence the name "newToolTip").

## Features

<dl>
    <dt>Positioning</dt>
    <dd>The tooltip's position follows the cursor.</dd>
    <dt>Sticking</dt>
    <dd>Clicking on the trigger element makes the tooltip stay visible even when moving the cursor away.</dd>
</dl>

## Usage

For each tooltip, a trigger and a content element need to be defined. Trigger elements need to be of the CSS class /newToolTipTag/, content elements /newToolTip/.

Trigger elements need to have an additional attribute /data-for/, the value of which is the identifier (minus the prefix tooltip\_) of the content element (In the example below: /Inventarnummer/).

The content element's id needs to consist of the name just entered, prepended with the prefix /tooltip\_/. Additionally, content elements may carry an attribute /data-title/, in which the title of the tooltip can be defined.

```
<a class="newToolTipTag" data-for="Inventarnummer">
    <img src="img/i.gif">
</a>
<span class="newToolTip" id="tooltip_Inventarnummer" data-title="Inventory number">
    <p class="toolTipCont">
        If the object has no inventory number, please enter something like "no inv. no." If it is a permanent loan, you can add the signature of the organziation lending, followed by the object's inventory number at the given institution and finally a note: "(permanent loan)".<br /><br />Example 1: "G0904"<br>Example 2: "A4711 (new), SMH12 (old)"<br />Example 3: "KHM 1252 (Permanent loan)"<br /><br /><b style="font-weight:normal;color:#660000;">Please always fill in this field!</b>
    </p>
</span>
```

## Screenshot

![The tooltip as used in the input interface of museum-digital](https://www.jrenslin.de/cont/screenshots/Tooltip/tooltip.jpg)
