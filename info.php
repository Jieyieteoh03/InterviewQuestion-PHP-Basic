<?php
if (isset($_POST['username'])) {
    $username = $_POST['username'];

    // Check if the username is "abc"
    if ($username === 'abc') {
        echo "Verified";
    } else {
        echo "Error";
    }
} else {
    echo "No username provided.";
}
?>