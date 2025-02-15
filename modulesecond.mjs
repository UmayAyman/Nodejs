export function simple () {
    console.log("simple is complex")
    return 45
}
// module.exports = simple;         //CommonJS module

export default function simple2 () {
    console.log("simple2 is complex")       //we can export more than 1 function in this
}