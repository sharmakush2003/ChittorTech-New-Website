<?php

include __DIR__ . '/db.php';

function getPageMeta($slug) {
    global $conn;

    // If no database connection, return default meta tags
    if (!isset($conn) || !$conn) {
        return [
            'page_title' => 'Digify Soft Solutions | Innovative Software',
            'page_description' => 'Transforming businesses through innovative, cloud-based software solutions.',
            'page_keywords' => 'ERP, CRM, Software, Digify, Business Solutions'
        ];
    }

    // Escape the slug to prevent SQL injection
    $slug = mysqli_real_escape_string($conn, $slug);

    $sql = "SELECT page_title, page_description, page_keywords 
            FROM website_meta_pages 
            WHERE page_slug = '$slug'";

    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        return mysqli_fetch_assoc($result);
    } else {
        return [
            'page_title' => 'Digify Soft Solutions',
            'page_description' => 'Business software solutions.',
            'page_keywords' => 'ERP, CRM'
        ];
    }
}
?>
