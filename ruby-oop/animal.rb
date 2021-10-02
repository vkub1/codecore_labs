class Animal
    def initialize(name, color)
        @name, @color = name, color
    end

    attr_accessor :name, :color 

    def eat
        puts "I'm eating"
    end

    def walk
        puts "I'm walking"
    end
end

animal = Animal.new("spot", "black")

