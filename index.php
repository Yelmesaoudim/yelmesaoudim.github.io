<?php
$json = file_get_contents('settings.json');
$settings = json_decode($json, true);
$allLanguages = $settings['pagesByLanguage'];

if (isset($_POST) && isset($_POST['language']) && key_exists($_POST['language'], $allLanguages)) {
    $language = $_POST['language'];
    $settings['currentLanguage'] = $language;
    $newJsonString = json_encode($settings);
    file_put_contents('settings.json', $newJsonString);
}
include($settings['pagesByLanguage'][$settings['currentLanguage']]);
