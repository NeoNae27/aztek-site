import fs from "fs";
import path from "path";

// Function to convert folder name to camelCase key
function toCamelCase(str) {
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

// Function to scan a category directory and generate JSON structure
function scanCategoryDirectory(categoryPath, baseDir, categoryName) {
  const result = {};

  try {
    if (!fs.existsSync(categoryPath)) {
      console.warn(`Category directory ${categoryPath} does not exist`);
      return result;
    }

    // Read all subdirectories in the category
    const items = fs.readdirSync(categoryPath, { withFileTypes: true });
    const directories = items.filter((item) => item.isDirectory());

    directories.forEach((dir) => {
      const dirName = dir.name;
      const dirPath = path.join(categoryPath, dirName);

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
          result[key].doc = `${baseDir}/${categoryName}/${dirName}/${pdfFile}`;
        }

        // Find first image file (0.jpg or first available image)
        const imageFiles = files.filter((file) =>
          file.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/i)
        );

        if (imageFiles.length > 0) {
          // Prefer 0.jpg if it exists, otherwise use the first image
          const preferredImage =
            imageFiles.find((file) => file === "0.jpg") || imageFiles[0];
          result[
            key
          ].img = `${baseDir}/${categoryName}/${dirName}/${preferredImage}`;
        }
      } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error.message);
      }
    });
  } catch (error) {
    console.error(
      `Error reading category directory ${categoryPath}:`,
      error.message
    );
  }

  return result;
}

// Function to generate JSON structure for both letters and certificates
function generateAztekDocsJson(baseDir = "./AZTEK-DOCS") {
  const result = {
    letters: {},
    certificates: {},
  };

  try {
    // Check if base directory exists
    if (!fs.existsSync(baseDir)) {
      console.error(`Base directory ${baseDir} does not exist`);
      return result;
    }

    // Process letters directory
    const lettersPath = path.join(baseDir, "letters");
    result.letters = scanCategoryDirectory(lettersPath, baseDir, "letters");

    // Process certificates directory
    const certificatesPath = path.join(baseDir, "certificates");
    result.certificates = scanCategoryDirectory(
      certificatesPath,
      baseDir,
      "certificates"
    );
  } catch (error) {
    console.error(`Error processing base directory ${baseDir}:`, error.message);
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

  const totalDocs =
    Object.keys(aztekDocsData.letters).length +
    Object.keys(aztekDocsData.certificates).length;
  console.log(`\nTotal documents processed: ${totalDocs}`);
  console.log(`Letters: ${Object.keys(aztekDocsData.letters).length}`);
  console.log(
    `Certificates: ${Object.keys(aztekDocsData.certificates).length}`
  );
}

// Export functions for use in other modules
export {
  generateAztekDocsJson,
  saveJsonToFile,
  toCamelCase,
  scanCategoryDirectory,
};

main();
