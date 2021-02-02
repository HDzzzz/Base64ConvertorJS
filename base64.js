//=============================================================================\\
//                               Base64 tool <3                                 \\
//                             made by nullcheats                                \\
//================================================================================\\
var Alerts = true; // If clipboard is enabled this will enable "alerts" for user to be notified
var CopyClipbaord = true; // Enables / disables "Clipbaord option"

/*
This is a very basic function that will Encode the string from the textarea to Base64
This takes the value from textarea without any conversion
Once Encoded it will set "Encoded" text value and reset the "Decoded value"
This will also use a ternery operator to check if clipbaord is enabled or not and set value
*/
const EncodeB64 = () => {
    var Encb64 = btoa(document.getElementById("Decoded").value); // This simply converts a string to B64
    document.getElementById("Encoded").value = Encb64; // This will set the Encoded text area value
    console.log("Encoded string -> " + Encb64); // This logs output to console
    CopyClipbaord === true ? SetClipboardText("encoded") : console.log("Clipboard disabled !"); // Ternary operator to check if clipboard is enabled & set value
}

/*
This is another basic function that will decode the string from B64 and add it to the textarea
This grabs the value from "Encoded" text area
Once Decoded it will set "Decoded" text value and reset the "Encoded value"
This will also use a ternery operator to check if clipbaord is enabled or not and set value
*/
const DecodeB64 = () => {
    var Decb64 = atob(document.getElementById("Encoded").value); // This simply converts B64 string to decoded string
    document.getElementById("Decoded").value = Decb64; // This simply sets the decoded text area value 
    console.log("Decoded string -> " + Decb64); // This logs output to console
    CopyClipbaord === true ? SetClipboardText("decoded") : console.log("Clipboard disabled !"); // Ternary operator to check if clipboard is enabled
}

/*
This is a very simple function that simply sets the clipboard text depending on action
Actions |  1. Copy encoded value | 2. Copy decoded value
Action will depend on button click (Decode / encode)
This will use the textarea Ids to select text and add to "clipboard"
*/
const SetClipboardText = (method) => {
    switch (method) {
        case "encoded":
            let EncClip = document.getElementById("Encoded");
            EncClip.select();
            document.execCommand("copy");
            document.getSelection().removeAllRanges();
            break;
        case "decoded":
            let DecClip = document.getElementById("Decoded");
            DecClip.select();
            document.execCommand("copy");
            document.getSelection().removeAllRanges();
            break;
        default:
            alert("Failed to set text to clipboard !");
            break;
    }
    if (Alerts) // Simply check if alerts are enabled !
    {
        alert("Copied value to clipboard !") // JS alert (basic)
    }
}
