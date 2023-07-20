range = (n) => Array(n).fill(1).map((_, i) => i)

layer_text = (lower_text, upper_text, x, y) =>
    /* Add text atop another array of lines of text */
    lower_text.map(
        (line, i) => [...line].map(
            (c, j) => upper_text[i-y]?.[j-x] || c
        ).join(""))

layer_texts = (texts) => upper_texts
    .reduce((acc, [text, x, y]) => layer_text(acc, text, x, y))

/* EXAMPLE USE
print_block = (block) => console.log(block.join("\n"))

const block_a = Array(10).fill(Array(15).fill('X').join(""))
const block_b = Array(3).fill(Array(3).fill('.').join(""))

print_block(block_a)
print_block(block_b)
print_block(layer_text(block_a, block_b, 4, 2))
*/

format_speech = (text, size) => {
    // split chunk center join
    center = text
        .split(" ")
        .reduce(([fst, ...rst], cur) => {
            candidate = fst + " " + cur
            if (candidate.length > size)
                return [cur, fst, ...rst]
            return [candidate, ...rst]
        }, [""])
        .reverse()
        .map(line => {
            pad = (size - line.length) / 2
            pad_l = " ".repeat(Math.floor(pad))
            pad_r = " ".repeat(Math.ceil(pad))
            return pad_l + line + pad_r
        })
        .join("\n  ")

    return `"${center}"`
}

/* EXAMPLE USE
format_speech("Hello, I'm the candy merchant.", 20)
 */

const r_int = (n) => Math.floor(Math.random() * n)
const r_oneOutOf = (n) => r_int(n) == 0
const r_coin = () => r_oneOutOf(2)
const r_interval = (from, to, step=1) =>
    from + r_int((to - from) / step) * step

const r_interval_or_number = (input) =>
      Array.isArray(input)
        ? r_interval(...input)
        : input
