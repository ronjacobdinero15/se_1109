CREATE TABLE Doctors (
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    years_of_experience INT,
    specialization VARCHAR(100),
    contact VARCHAR(15),
    email VARCHAR(100)
);

INSERT INTO Doctors (first_name, last_name, years_of_experience, specialization, contact, email)
VALUES
('John', 'Doe', 15, 'Cardiology', '09171234567', 'johndoe@example.com'),
('Alice', 'Smith', 10, 'Pediatrics', '09182345678', 'alicesmith@example.com'),
('Robert', 'Brown', 8, 'Dermatology', '09193456789', 'robertbrown@example.com'),
('Emily', 'Johnson', 12, 'Orthopedics', '09204567890', 'emilyjohnson@example.com'),
('Michael', 'Williams', 20, 'Neurology', '09215678901', 'michaelwilliams@example.com'),
('Jessica', 'Miller', 7, 'Gynecology', '09226789012', 'jessicamiller@example.com'),
('David', 'Taylor', 5, 'Oncology', '09237890123', 'davidtaylor@example.com'),
('Sarah', 'Anderson', 18, 'Endocrinology', '09248901234', 'sarahanderson@example.com'),
('Daniel', 'Lee', 3, 'Psychiatry', '09259012345', 'daniellee@example.com'),
('Laura', 'Martin', 11, 'Ophthalmology', '09260123456', 'lauramartin@example.com');
