puts "Enter a word"
input = gets.chomp
if input == input.reverse
    puts "Palindrome"
else
    puts "Not a palindrome"
end
