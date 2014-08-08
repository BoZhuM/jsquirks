Quirks = function(){
  var special_values       = [NaN, null, undefined, 0, 1, 2, true, false, Infinity, -Infinity, " ", "a"];
  var arithmatic_operators = ["+", "-", "*", "/", '%'];
  var comparison_operators = [">", ">=", "<", "<="];
  var logical_operators    = ["&&", "||"];
  var equality_operators   = ["==", "!=", "===", "!=="];
  var bitwise_operators    = ["<<", "<<<", ">>", ">>>"];
  var unary_operators      = ['typeof', 'void', '+', '-', '~', '!', '!!'];
  var operators = {
    arithmatic: arithmatic_operators,
    comparison: comparison_operators,
    logical: logical_operators,
    equality: equality_operators
  }
  var string2literal = function (value){
    var maps = {
     "NaN": NaN,
     "null": null,
     "undefined": undefined,
     "0": 0,
     "1": 1,
     "2": 2,
     "true": true,
     "false": false,
     "Infinity": Infinity,
     "-Infinity": -Infinity
     }
    return ((value in maps) ? maps[value] : value);
  };

  function run_binary(special_values, operators, mode){
      var counter   = 0;
      var box = [];
      for(var i=0;i < operators.length;i++){
          for(var k=0; k < special_values.length;k++){
        var nvalues = mode ? special_values.slice(k) : special_values;
              for(var j=0; j < nvalues.length;j++){
                  //n^3, consider the problem that `a + b != b + a`
                  try{
                      counter++; //the prefix
                      var tmp = []
                      var vk = string2literal(special_values[k]), vj = string2literal(nvalues[j]), oi = operators[i];
                      var string_to_eval = vk + ' ' + oi + ' ' + vj;
                      //if not wrap string with single quto, run in eval function will raise a referenceError, the eval will treat the string as a variable;
                      box.push([special_values[k], oi, nvalues[j],("" + string_to_eval + ""), eval(string_to_eval)])
                      console.log(counter + ": " + string_to_eval + ": ");//prefix hint
                      console.log(eval(string_to_eval)); //run it
                      console.log('');//generate a new line.
                  }catch(e){
                      console.log(e);
                      continue;
                  }
              }// end the enum, special_values, deep 2
          }// end the enum, special_values, deep 1
      }// end the enum, arithmatic_operators
    console.log(box)
    return box;
  }//the end of run_binary

  function run_unary(special_values, unary_operators){
      var counter = 0;
      var box = [];
      for(var i=0; i < unary_operators.length; i++){
          for(var k=0; k < special_values.length; k++){
              try{
                  counter++;
                  var vk = string2literal(special_values[k]), oi = string2literal(unary_operators[i]), seperator = '';
                  //set the default seperator to empty string is just for reading habit.
                  if(oi.length > 2)//if the length of the operator greater than 2, for example `void`, `typeof`, there should be at least one space between the operator and operand.
                      seperator = ' ';
                  var string_to_eval = oi + seperator + vk; 
                  box.push([oi, special_values[k], ("" + string_to_eval + ""), eval(string_to_eval)])
                  console.log(counter + ": " + string_to_eval + ": ");//prefix hint
                  console.log(eval(string_to_eval)); //run it
                  console.log('');//generate a new line.
              }catch(e){
                  console.log(e);
                  continue;
              }
          }// end of enum, special_values
      }// end of enum, unary_operators
    console.log(box)
    return box
  }
  // the end of run unary;
  return {values: special_values, operators: operators, unary: unary_operators, run_unary: run_unary, run_binary: run_binary};
}()

var app = angular.module('app', ['checklist-model']);
app.filter('wrapstring', function(){
  return function(input){
     if (typeof input == 'string'){
       input = "\'" + input + "\'"
     }else{
       input = '' + input + ''
     } 
     return input;
  } 
})

app.controller('quirks', ['$scope', function($scope){
  $scope.filterStr = ''
  $scope.operators = Quirks.operators;
  $scope.values    = Quirks.values;
  $scope.unary_operators = Quirks.unary;
  $scope.selected_values    = ['NaN', 'undefined', 'true', '0', '1'];
  $scope.selected_operators = ['+', '&&'];
  $scope.selected_unary_operators    = ['typeof'];
  $scope.run = function(v, o, u, mode){
    $scope.output_binary = Quirks.run_binary(v, o, mode);
    $scope.output_unary  = Quirks.run_unary(v, u);
  }
  $scope.run($scope.selected_values, $scope.selected_operators, $scope.selected_unary_operators, true);
}])