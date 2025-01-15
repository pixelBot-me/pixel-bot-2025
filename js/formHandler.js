document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", async function (e) {
      e.preventDefault(); 
  
    //   console.log(document.getElementById("name").value);
    //   console.log(document.getElementById("email").value);
    //   console.log(document.getElementById("message").value);
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      const apiUrl = "http://localhost:5000/api/contact";
  
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to submit form: " + response.statusText);
        }
  
        const result = await response.json();
  
        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
  
        // Show success toast
        const toastElement = document.getElementById("successToast");
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
  
        console.log("Form submitted successfully:", result.message);
      } catch (error) {
        console.error("Error submitting form:", error);
  
        // Show error toast
        const toastElement = document.getElementById("errorToast");
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
      }
    });
  });
  