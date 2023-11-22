// admin.js

// Function to add notice from admin panel


function addNotice() {
    // Get the notice content from the textarea
    var noticeContent = document.getElementById('newNoticeContent').value;

    // Check if the textarea is not empty
    if (noticeContent.trim() === '') {
        alert('Please enter a notice before submitting.');
        return;
    }

    // Get the current date and time
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleString();

    // Get existing notices from local storage or initialize an empty array
    var existingNotices = JSON.parse(localStorage.getItem('notices')) || [];

    // Generate a new sequential serial number
    var newSerialNumber = existingNotices.length + 1;

    // Create a new notice object
    var newNotice = {
        sn: newSerialNumber,
        notice: noticeContent,
        date: formattedDate
    };

    // Check if the notice content already exists
    var isDuplicate = existingNotices.some(function (existingNotice) {
        return existingNotice.notice === noticeContent;
    });

    // Add the new notice only if it's not a duplicate
    if (!isDuplicate) {
        // Add the new notice to the array
        existingNotices.push(newNotice);

        // Save the updated notices array back to local storage
        localStorage.setItem('notices', JSON.stringify(existingNotices));

        // Call the function to update the notices table on the admin panel
        updateNoticesTable();

        // Clear the text area content
        document.getElementById('newNoticeContent').value = '';
    } else {
        alert('This notice already exists. Please enter a unique notice.');
    }
}

// Function to delete a notice by serial number
function deleteNoticeBySN() {
    // Get the serial number from the input box
    var snToDelete = document.getElementById('deleteNoticeSN').value;

    // Check if the input is a valid number
    if (isNaN(snToDelete)) {
        alert('Please enter a valid serial number.');
        return;
    }

    // Convert the input to a number
    snToDelete = parseInt(snToDelete);

    // Get existing notices from local storage
    var existingNotices = JSON.parse(localStorage.getItem('notices')) || [];

    // Check if a notice with the specified serial number exists
    var isNoticeFound = existingNotices.some(function (notice) {
        return notice.sn === snToDelete;
    });

    if (isNoticeFound) {
        // Filter out the notice with the specified serial number
        var updatedNotices = existingNotices.filter(function (notice) {
            return notice.sn !== snToDelete;
        });

        // Update serial numbers sequentially
        updatedNotices.forEach(function (notice, index) {
            notice.sn = index + 1;
        });

        // Save the updated notices array back to local storage
        localStorage.setItem('notices', JSON.stringify(updatedNotices));

        // Call the function to update the notices table on the admin panel
        updateNoticesTable();

        // Clear the input box
        document.getElementById('deleteNoticeSN').value = '';
    } else {
        alert('No notice found with the specified serial number.');
    }
}

// Function to update the notices table on the admin panel
function updateNoticesTable() {
    // Get notices from localStorage
    var newNoticesData = JSON.parse(localStorage.getItem('notices')) || [];

    var tbody = document.querySelector('#notices-table tbody');

    // Clear existing rows
    tbody.innerHTML = '';

    // Add new rows
    newNoticesData.forEach(function (notice) {
        var row = document.createElement('tr');
        row.innerHTML = `<td>${notice.sn}</td><td>${notice.notice}</td><td>${notice.date}</td>`;
        tbody.appendChild(row);
    });
}

// Call the function to update the notices table when the page loads
updateNoticesTable();

// Function to add a teacher
function addTeacher() {
    var teacherName = document.getElementById('teacherName').value;
    var teacherPost = document.getElementById('teacherPost').value;
    var teacherPhone = document.getElementById('teacherPhone').value;

    // Get existing teachers from local storage or initialize an empty array
    var existingTeachers = JSON.parse(localStorage.getItem('teachers')) || [];

    // Generate a new sequential serial number
    var newSerialNumber = existingTeachers.length + 1;

    // Create a new teacher object
    var newTeacher = {
        sn: newSerialNumber,
        name: teacherName,
        post: teacherPost,
        phone: teacherPhone
    };

    // Add the new teacher to the array
    existingTeachers.push(newTeacher);

    // Save the updated teachers array back to local storage
    localStorage.setItem('teachers', JSON.stringify(existingTeachers));

    // Call the function to update the teachers table on the admin panel
    updateTeachersTable();
}

// Function to delete a teacher by SN
function deleteTeacher() {
    var teacherSNToDelete = document.getElementById('deleteTeacherSN').value;

    // Check if the input is a valid number
    if (isNaN(teacherSNToDelete)) {
        alert('Please enter a valid teacher SN.');
        return;
    }

    // Convert the input to a number
    teacherSNToDelete = parseInt(teacherSNToDelete);

    // Get existing teachers from local storage
    var existingTeachers = JSON.parse(localStorage.getItem('teachers')) || [];

    // Check if a teacher with the specified SN exists
    var isTeacherFound = existingTeachers.some(function (teacher) {
        return teacher.sn === teacherSNToDelete;
    });

    if (isTeacherFound) {
        // Filter out the teacher with the specified SN
        var updatedTeachers = existingTeachers.filter(function (teacher) {
            return teacher.sn !== teacherSNToDelete;
        });

        // Update serial numbers sequentially
        updatedTeachers.forEach(function (teacher, index) {
            teacher.sn = index + 1;
        });

        // Save the updated teachers array back to local storage
        localStorage.setItem('teachers', JSON.stringify(updatedTeachers));

        // Call the function to update the teachers table on the admin panel
        updateTeachersTable();

        // Clear the input box
        document.getElementById('deleteTeacherSN').value = '';
    } else {
        alert('No teacher found with the specified SN.');
    }
}

// Function to update the teachers table on the admin panel
function updateTeachersTable() {
    // Get teachers from localStorage
    var newTeachersData = JSON.parse(localStorage.getItem('teachers')) || [];

    var tbody = document.querySelector('#teachersTable tbody');

    // Clear existing rows
    tbody.innerHTML = '';

    // Add new rows
    newTeachersData.forEach(function (teacher) {
        var row = document.createElement('tr');
        row.innerHTML = `<td>${teacher.sn}</td><td>${teacher.name}</td><td>${teacher.post}</td><td>${teacher.phone}</td>`;
        tbody.appendChild(row);
    });
}

// Call the function to update the teachers table when the page loads
updateTeachersTable();
