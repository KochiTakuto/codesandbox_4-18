/**
 * const、let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数"
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き"
// console.log(val2);

// //letは再宣言不可
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
//val3 = "const変数を上書き";

// const変数は再宣言不可
//const val3 = "const変数再宣言";

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28,
// }
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// // constで定義した配列もプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "じゃけぇ";
// const age = 28;

// //「私の名前はじゃけぇです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// // 従来の関数
// // パターン１：functionで関数定義
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// パターン２：関数を変数で定義して使う
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// アロー関数
// アロー関数基本形
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

// アロー関数やや省略形(strの()を省略)
// const func2 = str => {
//   return str;
// }
// console.log(func2("func2です"));

// アロー関数ガチ省略形(返す値が一行ならreturnと{}も省略可能＋strの()省略)
// const func2 = (str) => str;
// console.log(func2("func2です"));

/**
 * 分割代入
 */
// オブジェクトの宣言
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };

//毎回「myProfile.〇〇」と書くので分かりにくい
//const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
//console.log(`message1：${message1}`);

//分割代入を行う(オブジェクトの場合、オブジェクトの名前と同じ名前で分割代入を行う)
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(`message2：${message2}`);

//配列の宣言
// const myProfile = ["じゃけぇ", 28];

// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(`message3：${message3}`);

// //分割代入を行う(配列の場合、オブジェクトと違い名前が決まっていないので、配列0,配列1の順番に名前をつけていく)
// const [ name, age ] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(`message4：${message4}`);

/**
 * デフォルト値
 */
//引数無い時に「Undefined」にならないように、nameにデフォルト値を設定している
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("じゃけぇ");

/**
 * スプレット構文...
 */
