puts "Which coffee shop will you go to?"
input = gets.chomp
case input
when "Starbucks"
    puts "Grande Latte"
when "Tim Hortons"
    puts "Double Double"
when "Blenz"
    puts "Medium Coffee"
else
    puts "I don't know this shop"
end