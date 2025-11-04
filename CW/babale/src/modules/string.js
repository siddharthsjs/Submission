
export function capitalize(string) {
    try {
        if (typeof string !== "string") {
            throw new Error("Input must be a string");
        }
        const result = string.charAt(0).toUpperCase() + string.slice(1);
        console.log(result);
        return result;
    } catch (err) {
        console.error("Error in capitalize():", err.message);
        return null;
    } finally {
        console.log("hello");
    }
}