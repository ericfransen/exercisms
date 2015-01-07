function compute (strand1, strand2) {
  var strand_1_length = strand1.length;
  var strand_2_length = strand2.length;
  var errorMessage = 'DNA strands must be of equal length.';

  if (strand_1_length != strand_2_length) { throw errorMessage };

  var strand_1 = strand1.split('');
  var strand_2 = strand2.split('');
  var hammingDistance = 0;

  for(i=0;i<strand_1_length;i++) {
    if (strand_1[i] != strand_2[i]) { hammingDistance++ };
  };
  return hammingDistance;
};


exports.compute = compute;
