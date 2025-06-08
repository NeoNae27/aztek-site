import fs from "fs";
import path from "path";

// Function to convert folder name to camelCase key
function toCamelCase(str) {
  console.log(`Converting "${str}" to camelCase...`);
  return str
    .replace(/[^a-zA-Z0-9\s]/g, "") // Remove special characters
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .trim()
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

// Function to scan directory and generate JSON structure
function generateAztekDocsJson(baseDir = "./AZTEK-DOCS") {
  console.log(`Generating JSON from directory: ${baseDir}`);
  const result = {};

  try {
    // Check if directory exists
    if (!fs.existsSync(baseDir)) {
      console.error(`Directory ${baseDir} does not exist`);
      return result;
    }

    // Read all subdirectories
    const items = fs.readdirSync(baseDir, { withFileTypes: true });
    const directories = items.filter((item) => item.isDirectory());

    directories.forEach((dir) => {
      const dirName = dir.name;
      const dirPath = path.join(baseDir, dirName);

      // Generate camelCase key from directory name
      const key = toCamelCase(dirName);

      // Initialize the object for this directory
      result[key] = {
        doc: "",
        img: "",
      };

      try {
        // Read files in the subdirectory
        const files = fs.readdirSync(dirPath);

        // Find PDF file
        const pdfFile = files.find((file) =>
          file.toLowerCase().endsWith(".pdf")
        );
        if (pdfFile) {
          result[key].doc = `${baseDir}/${dirName}/${pdfFile}`;
        }

        // Find first image file (0.jpg or first available image)
        const imageFiles = files.filter((file) =>
          file.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/i)
        );

        if (imageFiles.length > 0) {
          // Prefer 0.jpg if it exists, otherwise use the first image
          const preferredImage =
            imageFiles.find((file) => file === "0.jpg") || imageFiles[0];
          result[key].img = `${baseDir}/${dirName}/${preferredImage}`;
        }
      } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error.message);
      }
    });
  } catch (error) {
    console.error(`Error reading base directory ${baseDir}:`, error.message);
  }

  return result;
}

// Function to save JSON to file
function saveJsonToFile(data, filename = "aztek-docs.json") {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(filename, jsonString, "utf8");
    console.log(`JSON saved to ${filename}`);
    return true;
  } catch (error) {
    console.error(`Error saving JSON to file:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log("Generating AZTEK documents JSON...");

  // You can modify the base directory path here
  const baseDirectory = "./AZTEK-DOCS";

  const aztekDocsData = generateAztekDocsJson(baseDirectory);

  console.log("\nGenerated JSON structure:");
  console.log(JSON.stringify(aztekDocsData, null, 2));

  // Save to file
  saveJsonToFile(aztekDocsData);

  console.log(
    `\nTotal documents processed: ${Object.keys(aztekDocsData).length}`
  );
}

// Export functions for use in other modules
export { generateAztekDocsJson, saveJsonToFile, toCamelCase };

// Run the script if called directly (ESM equivalent)
main();
