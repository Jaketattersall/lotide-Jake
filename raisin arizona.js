const raisinAlarm = function(cookie) {
    // Check if the array contains a raisin
    if (cookie.includes("🍇")) {
        return "Raisin alert!";
    } else {
        return "All good!";
    }
};

// Test
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"])); // Raisin alert!
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"])); // Raisin alert!
console.log(raisinAlarm(["🍫", "🍫", "🍫"])); // All good!
@Jaketattersall
Comment
