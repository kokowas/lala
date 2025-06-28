document.addEventListener('DOMContentLoaded', function() {

    // --- PART 1: THE CSS ---
    // All of your CSS is now inside this JavaScript string.
    const cssStyles = `
        .container {
            max-width: 100%;
            margin: 0 auto;
            background-color: #fff;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            font-family: 'Tahoma', 'Arial', sans-serif;
            color: #333;
        }
        
        .container h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
            font-size: 2.5em;
        }

        .accordion-button {
            background-color: #eee;
            color: #444;
            cursor: pointer;
            padding: 18px;
            width: 100%;
            text-align: right;
            border: none;
            outline: none;
            transition: background-color 0.3s ease;
            font-size: 1.2em;
            font-weight: bold;
            border-bottom: 1px solid #ddd;
            position: relative;
        }

        .accordion-button::before {
            content: '\\2795'; /* Note the double backslash for the escape character in a JS string */
            font-size: 13px;
            color: #777;
            margin-left: 10px;
            transition: transform 0.3s ease;
        }

        .accordion-button.active::before {
            content: '\\2796'; /* Note the double backslash */
        }

        .accordion-button:hover {
            background-color: #ddd;
        }

        .accordion-content {
            padding: 0 18px;
            background-color: white;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
            border-bottom: 1px solid #ddd;
        }

        .accordion-content ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        .accordion-content li {
            padding: 10px 0;
            border-bottom: 1px dashed #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .accordion-content li:last-child {
            border-bottom: none;
        }

        .lesson-title {
            flex-grow: 1;
            margin-right: 10px;
        }

        .page-number {
            font-weight: bold;
            color: #555;
            margin-left: 15px;
        }

        .unit1 { background-color: #e9c46a; color: #264653; }
        .unit1:hover { background-color: #f4a261; }
        .unit1.active::before { color: #264653; }

        .unit2 { background-color: #2a9d8f; color: white; }
        .unit2:hover { background-color: #264653; }
        .unit2.active::before { color: white; }

        .unit3 { background-color: #f4a261; color: #264653; }
        .unit3:hover { background-color: #e76f51; }
        .unit3.active::before { color: #264653; }

        .unit4 { background-color: #e76f51; color: white; }
        .unit4:hover { background-color: #d9534f; }
        .unit4.active::before { color: white; }

        .unit5 { background-color: #8ecae6; color: #023047; }
        .unit5:hover { background-color: #219ebc; }
        .unit5.active::before { color: #023047; }
        
        @media screen and (max-width: 600px) {
            .container { padding: 5px; }
            .container h1 { font-size: 1.8em; margin-bottom: 20px; }
            .accordion-button { padding: 15px 10px; font-size: 1em; }
            .accordion-content { padding: 0 10px; }
            .accordion-content li { font-size: 0.9em; padding: 8px 0; flex-wrap: wrap; }
            .page-number { margin-left: 10px; }
        }
    `;

    // This code creates a <style> tag and puts the CSS inside it.
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = cssStyles;
    document.head.appendChild(styleSheet);


    // --- PART 2: THE ACCORDION FUNCTIONALITY (your original script) ---
    const acc = document.getElementsByClassName("accordion-button");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

});
