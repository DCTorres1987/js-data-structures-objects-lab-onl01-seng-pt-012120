// Write your solution in this file!
const driver = {};
// updateDriverWithKeyAndValue()- this function should take in three arguments: a driver Object, a key and a value. This function should not mutate the driver and should return a new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = { ...driver };
    newDriver[key] = value;
    return newDriver;

};
// destructivelyUpdateDriverWithKeyAndValue() - this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;

};
// deleteFromDriverByKey() - this function should take in a driver Object and a key. It should delete the key/value pair for the key that was passed in from the driver Object. This should all not actually mutate the driver passed in.
function deleteFromDriverByKey(driver, key) {
    const newDriver = { ...driver };
    delete newDriver[key];
    return newDriver;
};
// destructivelyDeleteFromDriverByKey() - this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in. Be sure and consider whether dot-notation or bracket-notation might affect your solution.
// HINT: You might find deleteFromDriverByKey() to be a bit hard to write non-destructively. Think about how we learned to use Object.assign(). What happens if we do this:

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;

};