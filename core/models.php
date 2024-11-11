<?php  

require_once 'dbConfig.php';

function getAllDoctors($pdo) {
	$sql = "SELECT * FROM doctors";
	$stmt = $pdo->prepare($sql);
	$executeQuery = $stmt->execute();

	if ($executeQuery) {
		return $stmt->fetchAll();
	}
}

function getDoctorByID($pdo, $doctor_id) {
	$sql = "SELECT * FROM doctors WHERE doctor_id = ?";
	$stmt = $pdo->prepare($sql);
	$executeQuery = $stmt->execute([$doctor_id]);
	if ($executeQuery) {
        return $stmt->fetch();
	}
}

function searchDoctor($pdo, $searchQuery) {
	$sql = "SELECT * FROM doctors WHERE 
			CONCAT(first_name, last_name, years_of_experience, specialization, contact, email) 
			LIKE ?";

	$stmt = $pdo->prepare($sql);
	$executeQuery = $stmt->execute(["%".$searchQuery."%"]);
	if ($executeQuery) {
		return $stmt->fetchAll();
	}
}

function insertDoctor($pdo, $first_name, $last_name, $years_of_experience, $specialization, $contact, $email) {
    $checkUserSql = "SELECT * FROM doctors WHERE email = ?";
    $checkUserSqlStmt = $pdo->prepare($checkUserSql);
    $checkUserSqlStmt->execute([$email]);

    if ($checkUserSqlStmt->rowCount() == 0) {
        $sql = "INSERT INTO doctors (first_name, last_name, years_of_experience, specialization, contact, email) VALUES(?,?,?,?,?,?)";
        $stmt = $pdo->prepare($sql);
        $executeQuery = $stmt->execute([$first_name, $last_name, $years_of_experience, $specialization, $contact, $email]);

        if ($executeQuery) {
            return [
                "success" => 200, 
                "message" => "User successfully registered!" 
            ];
        }
        else {
            return [
                "success" => 400, 
                "message" => "An error occured from the query" 
            ];
        }
    }
    else {
        return [
            "success" => 400, 
            "message" => "User email already exists" 
        ];
    }
}

function updateDoctor($pdo, $doctor_id, $first_name, $last_name, $years_of_experience, $specialization, $contact, $email) {
    $sql = "UPDATE doctors SET first_name = ?, last_name = ?, years_of_experience = ?, specialization = ?, contact = ?, email = ? WHERE doctor_id = ?";
    $stmt = $pdo->prepare($sql);
    $executeQuery = $stmt->execute([$first_name, $last_name, $years_of_experience, $specialization, $contact, $email, $doctor_id]);

    if ($executeQuery) {
        return [
            "success" => 200, 
            "message" => "User ID #{$doctor_id} successfully updated!" 
        ];
    } else {
        return [
            "success" => 400, 
            "message" => "User ID #{$doctor_id} failed to update!" 
        ];
    }
}

function deleteDoctor($pdo, $doctor_id) {
    $sql = "DELETE FROM doctors WHERE doctor_id = ?";
    $stmt = $pdo->prepare($sql);
    $executeQuery = $stmt->execute([$doctor_id]);

    if ($executeQuery) {
        return [
            "success" => 200, 
            "message" => "Doctor ID #{$doctor_id} is successfully deleted!"
        ];
    } else {
        return [
            "success" => 400,
            "message" => "Failed to delete doctor with ID #{$doctor_id}. Please try again"
        ];
    }
}