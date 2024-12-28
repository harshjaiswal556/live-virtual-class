function validateInput(input) {
    input.value = input.value.replace(/^\s+/g, '');
    input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
}