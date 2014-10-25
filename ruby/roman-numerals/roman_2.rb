require 'pry'
class Fixnum

  def to_roman
    base_10 = self.to_s.split('').reverse
    base_10.each_with_index do |num, index|
      numeral = ''
      num = num[index].to_i
      if index == 0
        if roman_n_1[num]
          numeral << roman_n_1[num]
        elsif num < 4
          numeral << (roman_n_1[1] * num)
        elsif num == 4
          numeral << (roman_n_1[1] + roman_n_1[5])
        elsif num > 5 && num < 9
          numeral << (roman_n_1[5] + roman_n_1[1] * (num - 5))
        elsif num == 9
          numeral << (roman_n_1[1] + roman_n_10[1])
        else num == 0
          next
        end

      elsif index == 1
        "Z"
      elsif index == 2
        "Z"
      elsif index == 3
        "Z"
      else
        return "number too big!"
      end
      numeral
    end
  end

  def roman_n_1
    { 1    => "I",
      5    => "V" }
  end

  def roman_n_10
    { 1   => "X",
      5   => "L" }
  end

  def roman_n_100
    { 1  => "C",
      5  => "D" }
  end

  def roman_n_1000
    { 1 => "M" }
  end
end
