range = (n) => Array(n).fill(1).map((_, i) => i)
getXY = (block, x, y) => block[y][x]

layer_text = (lower_text, upper_text, x, y) =>
    /* Add text atop another array of lines of text */
    lower_text.map(
        (line, i) => [...line].map(
            (c, j) => upper_text[i-y]?.[j-x] || c
        ).join(""))

layer_texts = (lower_text, upper_texts) =>
    upper_texts.reduce(
        (acc, [text, x, y]) => layer_text(acc, text, x, y),
        lower_text
    )

make_mask = (upper, masks, y) => [[upper[y].map((c, i) => i in masks ? c : false)], 0, y]

/* EXAMPLE USE
print_block = (block) => console.log(block.join("\n"))

const block_a = Array(10).fill(Array(15).fill('X').join(""))
const block_b = Array(3).fill(Array(3).fill('.').join(""))

print_block(block_a)
print_block(block_b)
print_block(layer_text(block_a, block_b, 4, 2))
*/

center_line = (line, size) => {
    pad = (size - line.length) / 2
    pad_l = " ".repeat(Math.floor(pad))
    pad_r = " ".repeat(Math.ceil(pad))
    return pad_l + line + pad_r
}

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
        .map(line => center_line(line, size))
        .join("\n  ")

    return `"${center}"`
}

/* EXAMPLE USE
format_speech("Hello, I'm the candy merchant.", 20)
 */

const r_int = (n) => Math.floor(Math.random() * n)
const r_oneOutOf = (n) => r_int(n) <= 0
const r_coin = () => r_oneOutOf(2)
const r_interval = (from, to, step=1) =>
    from + r_int((to - from) / step) * step


const r_interval_or_number = (input) =>
      Array.isArray(input)
        ? r_interval(...input)
        : input

const r_choice = (arr) => arr[r_int(arr.length)]
const r_letter = () => r_choice([..."abcdefghijklmnopqrstuvwxyz"])

/* TODO LEGACY */
const random = {
    pure : () => Math.floor(Math.pow(10, r_int(1+100)) * Math.random()),
    pure2 : () => [random.pure(),-random.pure(), "bug"]
}
