puts "Enter a number"

n = gets.chomp.to_i

for i in 1..n
    print "#{' ' * (n - i + 1)}#{'o ' * i}\n"
end