require "./bone.rb"

class Dog 
    def initialize(color, type)
        @color, @type = color, type
        @bone_collection = [];
    end

    def give(bone)
        if @bone_collection.length == 3
            puts "I have too many bones"
        else 
            @bone_collection.push(bone)
        end
    end

    def eat_bone
        if @bone_collection.length == 0
            puts "No bones left to eat"
        else
            bone = @bone_collection.pop()
            puts "yummy! I ate a '#{bone.size}' bone"
        end
    end
end

small_bone = Bone.new("Small")
medium_bone = Bone.new("Medium")
big_bone = Bone.new("Big")

dog = Dog.new("Black", "poodle")
dog.give small_bone
dog.give medium_bone
dog.give big_bone
dog.give small_bone # Will print too many bones

dog.eat_bone
dog.eat_bone
dog.eat_bone
dog.eat_bone

