const fs = require("fs");

// Define file path
const filePath = "file.txt";

//create file
fs.writeFile(filePath, "I am File", (err) => {
    if(err != null){
        console.log("err: ", err);
    }else{
        console.log(`File ${filePath} Create Succeddfully.`)
    }
});

// Read file content
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File Content:", data);
});

// Append text to file
const newText = "\nNew line appended.";
fs.appendFile(filePath, newText, "utf8", (err) => {
  if (err) {
    console.error("Error appending text to file:", err);
    return;
  }
  console.log("Text appended to file successfully.");
});

// Update file content
const updatedContent = "Updated file";
fs.writeFile(filePath, updatedContent, "utf8", (err) => {
  if (err) {
    console.error("Error updating file content:", err);
    return;
  }
  console.log("File content updated successfully.");
});