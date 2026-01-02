<?php
/**
 * @Author: William Berge Groensberg
 * @Date:   2025-07-15 00:33:20
 * @Last Modified by:   William Berge Groensberg
 * @Last Modified time: 2025-07-15 01:10:28
 */

ini_set('display_errors', 1);
error_reporting(E_ALL);


// Les rå POST-data (JSON)
$data = json_decode(file_get_contents("php://input"), true);

$project = $data['project'] ?? '';
$code = $data['code'] ?? '';

// Valider prosjekt-navn (kun bokstaver, tall, _ og -)
if (!preg_match('/^[a-zA-Z0-9_-]+$/', $project)) {
    http_response_code(400);
    echo "Ugyldig prosjektnavn!";
    exit;
}

// Sjekk at kode finnes
if (!$code) {
    http_response_code(400);
    echo "Ingen kode mottatt!";
    exit;
}

// Mappe-sti til prosjektet (relativt til denne filen)
$baseDir = __DIR__ . "/sites";
$projectDir = $baseDir . "/" . $project;

// Lag mappe hvis den ikke finnes
if (!file_exists($projectDir)) {
    if (!mkdir($projectDir, 0777, true)) {
        http_response_code(500);
        echo "Klarte ikke å lage prosjektmappe.";
        exit;
    }
}

// Lagre koden som index.html
$filePath = $projectDir . "/index.html";

if (file_put_contents($filePath, $code) === false) {
    http_response_code(500);
    echo "Klarte ikke å lagre fil.";
    exit;
}

echo "✅ Publisert! Besøk: /testingsmappe/publisher/sites/$project/";
