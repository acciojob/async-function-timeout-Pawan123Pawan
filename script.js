//your JS code here. If r;
const output = document.getElementById("output");
      const button = document.getElementById("btn");

      button.addEventListener("click", (e) => {
          e.preventDefault();
          console.log("djs");
          const text = document.getElementById("text").value;
          const delay = Number(document.getElementById("delay").value); // Corrected the typo here

          if (text && delay > 0) { // Corrected variable name here
              call(text, delay); // Corrected variable name here
          }
      });

      async function call(message, delay) {
          await new Promise((resolve) => {
              setTimeout(() => {
                  resolve();
              }, delay);
          });
          output.innerText = message;
      }