def get_alpha_and_data(filename):
    alpha = []
    code_lines = []
    with open(filename) as f:
        alpha =list(map(str,f.readline()))
        for line in f:
            code_lines.append(line)
    return (alpha, code_lines)

def decode_file():
    alpha, code_lines = get_alpha_and_data("data.txt")
    decoded_lines = []
    for line in code_lines:
        temp_words = line.split(" ")
        temp_decode_line = []
        for word in temp_words:
            temp_word = word.split("-")
            temp_decoded_word = []
            for num in temp_word:
                temp_decoded_word.append(alpha[int(num)-1])
            temp_decode_line.append(''.join(temp_decoded_word))
        decoded_lines.append(' '.join(temp_decode_line))
    print('\n'.join(decoded_lines))

decode_file()