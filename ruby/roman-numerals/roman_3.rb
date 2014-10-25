class Fixnum

  ROMAN = { 1    => "I",
            4    => "IV",
            5    => "V",
            9    => "IX",
            10   => "X",
            40   => "XL",
            50   => "L",
            90   => "XC",
            100  => "C",
            400  => "CD",
            500  => "D",
            900  => "DM",
            1000 => "M"
          }

  def to_roman_x
    if ROMAN[self]
      ROMAN[self]
    else
      roman_numeral = ''
      num = self
      ROMAN.each do |base_10, roman|
        while num >= base_10
          num -= base_10
          roman_numeral << roman
        end
      end
      roman_numeral
    end
  end
end
