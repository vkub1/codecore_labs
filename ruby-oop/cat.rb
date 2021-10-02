require './animal.rb'
require './helper_methods.rb'
require './bird.rb'

class Cat < Animal
    include HelperMethods
    def eat
        puts "Fish is yummy!"
    end

    def catch(bird)
        rand = random_number(101)
        if (rand < 50)
            puts "#{@name} caught and ate #{bird.name}"
        end
    end
end


cats = [];
bird = [];

for i in 1..100
    cat = Cat.new("cat#{i}", "black")
    bird = Bird.new("bird#{i}", "black")
    cat.catch(bird)
end
   



