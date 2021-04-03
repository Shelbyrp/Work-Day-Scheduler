// Assign dictionary VALUES
var value1 = "1.Enter your data here...";
var value2 = "2.Enter your data here...";
var value3 = "3.Enter your data here...";
var value4 = "4.Enter your data here...";
var value5 = "5.Enter your data here...";
var value6 = "6.Enter your data here...";
var value7 = "7.Enter your data here...";
var value8 = "8.Enter your data here...";
var value9 = "9.Enter your data here...";

// Create dictionary OBJECT in JS but not local storage
var originalSchedule = {
    key1: value1,
    key2: value2,
    key3: value3,
    key4: value4,
    key5: value5,
    key6: value6,
    key7: value7,
    key8: value8,
    key9: value9
};
// setItem using a FOR LOOP
for (var key in originalSchedule) {
    localStorage.setItem(key, JSON.stringify(originalSchedule[key]));
}