<?php

require_once 'dbConfig.php';
require_once 'models.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    handleGet($pdo);
} elseif ($method === 'POST') {
    handlePost($pdo);
} elseif ($method === 'PUT') {
    handlePut($pdo);
} elseif ($method === 'DELETE') {
    handleDelete($pdo);
}

function handleGet($pdo) {
    switch ($_GET['action']) {
        case 'getAllDoctors':
            echo json_encode(getAllDoctors($pdo));
            break;
        case 'getDoctorByID':
            echo json_encode(getDoctorByID($pdo, $_GET['doctor_id']));
            break;
        case 'searchDoctor':
            echo json_encode(searchDoctor($pdo, $_GET['searchQuery']));
            break;
        default:
            echo json_encode(['error' => 'Invalid action']);
    }
}

function handlePost($pdo) {
    $data = json_decode(file_get_contents('php://input'), true);

    switch ($_GET['action']) {
        case 'insertDoctor':
            echo json_encode(insertDoctor($pdo, $data['first_name'], $data['last_name'], $data['years_of_experience'], $data['specialization'], $data['contact'], $data['email']));
            break;
        default:
            echo json_encode(['error' => 'Invalid action']);
    }
}

function handlePut($pdo) {
    $data = json_decode(file_get_contents("php://input"), true);

    switch ($_GET['action']) {
        case 'updateDoctor':
            echo json_encode(updateDoctor($pdo, $_GET['doctor_id'], $data['first_name'], $data['last_name'], $data['years_of_experience'], $data['specialization'], $data['contact'], $data['email']));
            break;
        default:
            echo json_encode(['error' => 'Invalid action']);
    }
}

function handleDelete($pdo) {
    switch($_GET['action']) {
        case 'deleteDoctor':
            echo json_encode(deleteDoctor($pdo, $_GET['doctor_id']));
            break;
        default:
            echo json_encode(['error' => 'Invalid action']);
    }
}