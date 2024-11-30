CREATE TABLE Doctors (
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100),
    username VARCHAR(15),
    password TEXT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    years_of_experience INT,
    specialization VARCHAR(100),
    contact VARCHAR(15),
	date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE activity_logs (
	activity_log_id INT AUTO_INCREMENT PRIMARY KEY,
	operation VARCHAR(255) NOT NULL,
	activeUserId INT,
	activeUser VARCHAR(255),
	date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO Doctors (email, username, password, first_name, last_name, years_of_experience, specialization, contact) 
VALUES
('dr.smith@example.com', 'johnsmith@123', SHA1('1'), 'John', 'Smith', 10, 'Cardiology', '1234567890'),
('dr.jane@example.com', 'janedoe@123', SHA1('1'), 'Jane', 'Doe', 8, 'Dermatology', '0987654321'),
('dr.brown@example.com', 'emilybrown@123', SHA1('1'), 'Emily', 'Brown', 12, 'Neurology', '1234509876'),
('dr.white@example.com', 'michaelwhite@123', SHA1('1'), 'Michael', 'White', 5, 'Pediatrics', '9876543210'),
('dr.green@example.com', 'sarahgreen@123', SHA1('1'), 'Sarah', 'Green', 15, 'Orthopedics', '1122334455'),
('dr.johnson@example.com', 'davidjohnson@123', SHA1('1'), 'David', 'Johnson', 7, 'Ophthalmology', '5566778899'),
('dr.davis@example.com', 'lauradavis@123', SHA1('1'), 'Laura', 'Davis', 9, 'Oncology', '6677889900'),
('dr.martin@example.com', 'danielmartin@123', SHA1('1'), 'Daniel', 'Martin', 6, 'Psychiatry', '7788990011'),
('dr.thomas@example.com', 'sophiathomas@123', SHA1('1'), 'Sophia', 'Thomas', 11, 'Urology', '8899001122'),
('dr.moore@example.com', 'jamesmoore@123', SHA1('1'), 'James', 'Moore', 4, 'ENT', '9900112233');