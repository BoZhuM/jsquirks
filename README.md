### Javascript Quirks with Operations

http://jsquirks.zhuboliu.me

#### Do What
The App combinate the special values and values you selected to simple expressions, run it with the function `eval`, and display the list of outputs in a table and logged it in the console. By using this, you can find some weired pattern in javascript value type converting. 

#### Special Values
```javascript
	var special_values       = [NaN, null, undefined, 0, 1, 2, true, false, Infinity, -Infinity, " ", "a"];
```

#### Operators
```javascript
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
```
You can add some other operations such as bitwise operaters to the list.

#### Why am I doing this?
As you know, Javascript will dynamically convert value type in different situations;

The type converting is very weird. I tried to find the inner-rule of dynamic type converting, but I found nothing, It seems that there is no hard and fast rule at all. Every time I found a rule in one place, I found it was wrong in another place later.

At last, I write this simple tool to help me find the rules, of cause it's useless. But with this tool I found some quirks I never found before. Hope this will help.

If You are preparing for some javascript quiz ,for example Elance skill test, this may help.
If you found something wrong in the output, please send me a email or open an issue.
If you found some hard and fast rule, please pull request.

#### Resources
+ CSS Framework: http://getbootstrap.com
+ View Template: http://getbootstrap.com/examples/dashboard/
+ JS Libary: 
  - angularjs: http://angularjs.org
  - checklist-model: http://vitalets.github.io/checklist-model/


