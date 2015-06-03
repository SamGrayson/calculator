
/* ADD */
$('#addBtn').click(function(){
  var inputOne = Number($('#num_one').val());
  var inputTwo = Number($('#num_two').val());
  $('#answer').html(inputOne + inputTwo);
});

/* SUBTRACT */
$('#subtractBtn').click(function(){
  var inputOne = Number($('#num_one').val());
  var inputTwo = Number($('#num_two').val());
  $('#answer').html(inputOne - inputTwo);
});

/* MULTIPLY */
$('#multiplyBtn').click(function(){
  var inputOne = Number($('#num_one').val());
  var inputTwo = Number($('#num_two').val());
  $('#answer').html(inputOne * inputTwo);
});

/* DIVIDE */
$('#divideBtn').click(function(){
  var inputOne = Number($('#num_one').val());
  var inputTwo = Number($('#num_two').val());
  $('#answer').html(inputOne / inputTwo);
});


/*******************  Bottom Calculator *******************/

/* NUMBERS */

$('.number').click(function(){
  if ($(this).val() === ".") {
    $('#calcAns').append($(this).val());
  } else {
  $('#calcAns').append(Number($(this).val()));
  }
});

/* CLEAR BUTTON */

$('#clear').click(function(){
  $('#calcAns').html("");
});


/* READ FUNCTIONS */

$('.function').click(function(){
  $('#calcAns').append(" " + $(this).val() + " ");
});

/* EXECUTE FUNCTION */

$('#equals').click(function(){
  var answer = eval($('#calcAns').text());
  $('#calcAns').html(answer);
});
