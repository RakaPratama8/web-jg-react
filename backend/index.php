<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, PUT, DELETE, GET');
header('Access-Control-Allow-Headers: Content-Type');

include 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        getMembers();
        break;
    case 'POST':
        addMember();
        break;
    case 'PUT':
        updateMember();
        break;
    case 'DELETE':
        deleteMember();
        break;
    default:
        echo json_encode(array("message" => "Method not found"));
        break;
}

function getMembers() {
    global $conn;
    $sql = "SELECT * FROM anggota";
    $result = $conn->query($sql);
    $members = array();
    while($row = $result->fetch_assoc()) {
        $members[] = $row;
    }
    echo json_encode($members);
}

function addMember() {
    global $conn;
    $data = json_decode(file_get_contents("php://input"), true);

    $nama = $data['nama'];
    $npm = $data['npm'];
    $ttl = $data['ttl'];
    $domisili = $data['domisili'];
    $angkatan = $data['angkatan'];

    $sql = "INSERT INTO anggota (nama, npm, ttl, domisili, angkatan) VALUES ('$nama', '$npm', '$ttl', '$domisili', '$angkatan')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("message" => "Member added successfully"));
    } else {
        echo json_encode(array("message" => "Error: " . $sql . "<br>" . $conn->error));
    }
}

function updateMember() {
    global $conn;
    $data = json_decode(file_get_contents("php://input"), true);

    $npm = $data['npm'];
    $domisili = $data['domisili'];

    $sql = "UPDATE anggota SET domisili='$domisili' WHERE npm='$npm'";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("message" => "Member updated successfully"));
    } else {
        echo json_encode(array("message" => "Error: " . $sql . "<br>" . $conn->error));
    }
}

function deleteMember() {
    global $conn;
    $data = json_decode(file_get_contents("php://input"), true);

    $npm = $data['npm'];

    $sql = "DELETE FROM anggota WHERE npm='$npm'";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("message" => "Member deleted successfully"));
    } else {
        echo json_encode(array("message" => "Error: " . $sql . "<br>" . $conn->error));
    }
}

?>
