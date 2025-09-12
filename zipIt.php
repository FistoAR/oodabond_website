<?php
// Define the name of the zip file
$zipFile = 'archive.zip';

// Get current directory
$rootPath = realpath(dirname(__FILE__));

// Initialize archive object
$zip = new ZipArchive();
$zip->open($zipFile, ZipArchive::CREATE | ZipArchive::OVERWRITE);

// Create recursive directory iterator
$files = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($rootPath, RecursiveDirectoryIterator::SKIP_DOTS),
    RecursiveIteratorIterator::LEAVES_ONLY
);

foreach ($files as $name => $file) {
    // Get real and relative path
    $filePath = $file->getRealPath();
    $relativePath = substr($filePath, strlen($rootPath) + 1);

    // Skip the zip file itself
    if ($relativePath === $zipFile) {
        continue;
    }

    // Add file to zip
    $zip->addFile($filePath, $relativePath);
}

// Finalize the zip file
$zip->close();

echo "Archive created successfully: $zipFile";
?>
