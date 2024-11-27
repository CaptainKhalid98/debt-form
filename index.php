<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle the form submission when the form is completed
    $step = $_POST['step'] ?? 1;
} else {
    $step = 1;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4-Step Form</title>
</head>
<body>

    <h1>4-Step Form</h1>

    <form action="" method="POST">
        <input type="hidden" name="step" value="<?php echo $step; ?>">

        <?php if ($step == 1): ?>
            <!-- Step 1: Personal Information -->
            <h2>Step 1: Personal Information</h2>
            <label for="name">Name:</label>
            <input type="text" name="name" required><br><br>
            <label for="email">Email:</label>
            <input type="email" name="email" required><br><br>
            <button type="submit" name="next" value="next">Next</button>

        <?php elseif ($step == 2): ?>
            <!-- Step 2: Address Information -->
            <h2>Step 2: Address Information</h2>
            <label for="address">Address:</label>
            <input type="text" name="address" required><br><br>
            <label for="city">City:</label>
            <input type="text" name="city" required><br><br>
            <button type="submit" name="next" value="next">Next</button>

        <?php elseif ($step == 3): ?>
            <!-- Step 3: Additional Information -->
            <h2>Step 3: Additional Information</h2>
            <label for="phone">Phone:</label>
            <input type="text" name="phone" required><br><br>
            <label for="dob">Date of Birth:</label>
            <input type="date" name="dob" required><br><br>
            <button type="submit" name="next" value="next">Next</button>

        <?php elseif ($step == 4): ?>
            <!-- Step 4: Review & Submit -->
            <h2>Step 4: Review & Submit</h2>
            <p><strong>Name:</strong> <?php echo $_POST['name'] ?? ''; ?></p>
            <p><strong>Email:</strong> <?php echo $_POST['email'] ?? ''; ?></p>
            <p><strong>Address:</strong> <?php echo $_POST['address'] ?? ''; ?></p>
            <p><strong>City:</strong> <?php echo $_POST['city'] ?? ''; ?></p>
            <p><strong>Phone:</strong> <?php echo $_POST['phone'] ?? ''; ?></p>
            <p><strong>Date of Birth:</strong> <?php echo $_POST['dob'] ?? ''; ?></p>
            
            <button type="submit" name="submit" value="submit">Submit</button>
        <?php endif; ?>
    </form>

    <?php
    // Handling step transitions
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (isset($_POST['next'])) {
            $step++;
        }
        if (isset($_POST['submit'])) {
            // Process and store the data
            // For example, save it to a database or email it
            echo '<h3>Form Submitted Successfully!</h3>';
            // Here you can process the form (save to DB or send an email, etc.)
        }
    }
    ?>
</body>
</html>
