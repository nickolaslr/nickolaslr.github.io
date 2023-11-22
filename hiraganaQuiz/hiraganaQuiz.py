import random

hiragana = [("あ", "a"), ("い", "i"), ("う", "u"), ("え", "e"), ("お", "o"), ("か", "ka"), ("き", "ki"), ("く", "ku"), ("け", "ke"), ("こ", "ko"), ("が", "ga"), ("ぎ", "gi"), ("ぐ", "gu"), ("げ", "ge"), ("ご", "go"), ("さ", "sa"), ("し", "shi"), ("す", "su"), ("せ", "se"), ("そ", "so"), ("ざ", "za"), ("じ", "ji"), ("ず", "zu"), ("ぜ", "ze"), ("ぞ", "zo"), ("た", "ta"), ("ち", "chi"), ("つ", "tsu"), ("て", "te"),	("と", "to"), ("だ", "da"),	("ぢ", "ji"), ("づ", "zu"), ("で", "de"), ("ど", "do"), ("な", "na"), ("に", "ni"),	("ぬ", "nu"), ("ね", "ne"),	("の", "no"), ("は", "ha"),	("ひ", "hi"), ("ふ", "fu"),	("へ", "he"), ("ほ", "ho"), ("ば", "ba"), ("び", "bi"),	("ぶ", "bu"), ("べ", "be"),	("ぼ", "bo"), ("ぱ", "pa"),	("ぴ", "pi"), ("ぷ", "pu"),	("ぺ", "pe"), ("ぽ", "po"), ("ま", "ma"), ("み", "mi"),	("む", "mu"), ("め", "me"), ("も", "mo"), ("や", "ya"),	("ゆ", "yu"), ("よ", "yo"), ("ら", "ra"), ("り", "ri"),	("る", "ru"), ("れ", "re"),	("ろ", "ro"), ("わ", "wa"),	("を", "wo"), ("ん", "n")]

random.shuffle(hiragana)

score = 0
count = 0

print("Welcome to the hiragana quiz and good luck. You can type EXIT anytime to give up.")

for i in hiragana:
    
    print("What hiragana character is this: ", i[0])
    count += 1
    romanji = input("In romanji this is: ")
    if romanji == "EXIT" or "exit":
        break
    if romanji == i[1]:
        print("Correct")
        print(" ")
        score += 1
    else:
        print("Wrong. The correct answer would be \"",i[1],"\"")
        print(" ")
    
print("You got", score, "right answers out of", count, "questions!")