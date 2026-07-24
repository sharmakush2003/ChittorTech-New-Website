<?php

$index_live_live = file_get_contents('index_live_live.php');
$lines = explode("\n", $index_live_live);

$services_sec = array_slice($lines, 1071, 76);
$solving_sec = array_slice($lines, 530, 330);

$index_content = file_get_contents('index.php');
$index_lines = explode("\n", $index_content);

$insert_idx_1 = 0;
foreach ($index_lines as $i => $line) {
    if (strpos($line, '<!-- 4. CORE AUTOMATIONS -->') !== false) {
        $insert_idx_1 = $i;
        break;
    }
}

$insert_idx_2 = 0;
foreach ($index_lines as $i => $line) {
    if (strpos($line, '<!-- 6. INTEGRATION PARTNERS -->') !== false) {
        $insert_idx_2 = $i;
        break;
    }
}

$new_index_lines = array_merge(
    array_slice($index_lines, 0, $insert_idx_1),
    ["\n    <!-- PREMIUM SERVICES RESTORED -->\n"],
    $services_sec,
    ["\n"],
    array_slice($index_lines, $insert_idx_1, $insert_idx_2 - $insert_idx_1),
    ["\n    <!-- SOLVING BUSINESS RESTORED -->\n"],
    $solving_sec,
    ["\n"],
    array_slice($index_lines, $insert_idx_2)
);

foreach ($new_index_lines as $i => $line) {
    if (strpos($line, '<h2>Our<span> Services</span> </h2>') !== false) {
        $new_index_lines[$i] = '                      <span class="text-primary fw-bold mb-2 d-block">What We Offer</span>' . "\n" . '                      <h2>Our Premium<span> Services</span> </h2>';
    }
}

file_put_contents('index.php', implode("\n", $new_index_lines));
echo "Updated index.php successfully.\n";

?>
