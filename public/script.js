document.addEventListener("DOMContentLoaded", () => {
  const urlForm = document.getElementById("urlForm");
  const urlTable = document.getElementById("urlTable");

  // object to store the original URLs
  const originalUrls = {};

  urlForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const originalUrl = document.getElementById("urlInput").value;
    const shortUrl = document.getElementById("abbreviationInput").value;

    // create a new FormData object
    const formData = new FormData();
    formData.append("original", originalUrl);
    formData.append("short", shortUrl);

    // send a POST request to the server
    fetch("/create", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        originalUrls[data.short] = data.original;
        appendRow(urlTable, data.original, data.short);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  // function to append a new row to the table
  function appendRow(table, original, short) {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    // create two links
    const originalLink = document.createElement("a");
    originalLink.href = original;
    originalLink.textContent = original;

    const shortLink = document.createElement("a");

    // redirect to the original url
    shortLink.href = originalUrls[short];
    shortLink.textContent = short;
    shortLink.target = "_blank";

    // append the links to the table
    cell1.appendChild(originalLink);
    cell2.appendChild(shortLink);
  }
  
});
