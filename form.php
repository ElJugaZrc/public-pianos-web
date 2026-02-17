<?php
header('Content-Type: application/json');

$webhook = ":)";
if (!$webhook) {
    echo json_encode([
        "success" => false,
        "error" => "WEBHOOK_URL no definida"
    ]);
    exit;
}

$place = $_POST["place"] ?? null;
$description = $_POST["description"] ?: "No description specified";
$state = $_POST["state"] ?? null;
$restricted_area = $_POST["restricted_area"] ?? null;
$temp = $_POST["temp"] ?? null;
$location = $_POST["location"] ?: "No link specified";
$email = $_POST["email"] ?: "No email specified";

if (!$place || !$state || !$restricted_area || !$temp) {
    echo json_encode([
        "success" => false,
        "error" => "Faltan datos obligatorios"
    ]);
    exit;
}

if (!isset($_FILES['image']) || $_FILES['image']['error'] !== 0) {
    echo json_encode([
        "success" => false,
        "error" => "Error al subir imagen"
    ]);
    exit;
}

$archivo = $_FILES['image'];

$permitidos = ['image/jpeg', 'image/png', 'image/gif'];

if (!in_array($archivo['type'], $permitidos)) {
    echo json_encode([
        "success" => false,
        "error" => "Tipo de archivo no permitido"
    ]);
    exit;
}


if ($archivo['size'] > 8 * 1024 * 1024) {
    echo json_encode([
        "success" => false,
        "error" => "Imagen supera límite de 8MB"
    ]);
    exit;
}

$extension = pathinfo($archivo['name'], PATHINFO_EXTENSION);
$imageName = "upload." . $extension;

$embed = [
    'title' => "New piano 🎹",
    'type' => "rich",
    'timestamp' => date(DATE_ATOM),
    'color' => hexdec("3366ff"),
    'fields' => [
        [
            'name' => "Place name",
            'value' => $place,
            'inline' => true
        ],
        [
            'name' => "Description",
            'value' => $description,
            'inline' => true
        ],
        [
            'name' => "Status",
            'value' => $state,
            'inline' => true
        ],
        [
            'name' => "Restricted area?",
            'value' => $restricted_area,
            'inline' => true
        ],
        [
            'name' => "Temporal piano?",
            'value' => $temp,
            'inline' => true
        ],
        [
            'name' => "Location URL",
            'value' => $location,
            'inline' => true
        ],
        [
            'name' => "Email",
            'value' => "||{$email}||",
            'inline' => true
        ]
    ],
    'image' => [
        'url' => "attachment://".$imageName
    ]
];

$message = [
    'embeds' => [$embed]
];

$ch = curl_init($webhook);

curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => [
        'payload_json' => json_encode($message),
        'file' => new CURLFile(
            $archivo['tmp_name'],
            $archivo['type'],
            $imageName
        )
    ]
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);

curl_close($ch);

if ($error) {
    echo json_encode([
        "success" => false,
        "error" => "cURL error: " . $error
    ]);
    exit;
}

if ($httpCode !== 200 && $httpCode !== 204) {
    echo json_encode([
        "success" => false,
        "error" => "Discord HTTP $httpCode",
        "response" => $response
    ]);
    exit;
}

echo json_encode([
    "success" => true
]);
?>