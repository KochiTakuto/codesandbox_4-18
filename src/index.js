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
//配列の展開(配列の要素が先頭から展開される)
//const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる(配列の要素をまとめて受け取れる)
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合(同じ配列名を指定して同じ値をコピー、参照渡ししない！！)
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// =でやると参照渡しになり、arr4まで変わってしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);

/**
 * mapやfilterを使った配列の処理
 */
//const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// map(配列の値をreturnで返す)
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr);

//第一引数だけでなく、第二引数も取れる
//nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// filter(returnの後に条件を記入する。記入した条件だけ返す)
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子(ES2015ではない、基本なので紹介)
 */
// ある条件 ? で条件指定し、trueの時「：」falseの時
// const val1 = 1 < 0 ? `trueです` : `falseです`;
// console.log(val1);

// const num = `1300`;
//○○.toLocaleString()とは、金額表示のように3桁ごとに,で区切る関数(JavaScript)
//console.log(num.toLocaleString());

//typeofはその変数の型が何なのかを判定する
// const formattedNum = typeof num === `number` ? num.toLocaleString() : `数値を設定してください`;
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています!!` : `許容範囲内です`;
// }
// console.log(checkSum(50, 51));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2はtrueになります");
// }

// || は左側がfalseなら、右側を返す という処理
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);

/**
 * セクションまとめ
 */

/**
 * const、let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// varは上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// varは再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは再宣言不可
// let val2 = "let変数は再宣言不可";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// constは上書き不可
// val3 = "const変数は上書き不可";
// console.log(val3);

// constは再宣言不可
// const val3 = "const変数は再宣言不可";
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// }
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
//「私の名前はじゃけぇです。年齢は28歳です。」

//従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

//テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// const func1 = function (str) {
//   return str;
// }
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(100, 50));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28,
// };

//const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
//console.log(message1);

// const {name, age} = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['じゃけぇ', 28];

// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;

// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("じゃけぇ");

/**
 * スプレット構文...
 */
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1)  //配列の展開

// const sumFunc = (num1, num2) => console.log(num1 + num2);
//sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// 参照渡しになり、arr4の値も変わってしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(`${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時:条件がfalseの時
// const val1 = 1 < 0 ? `trueです` : `falseです`;
// console.log(val1);

// const num = 1300;

// const formattedNum = typeof num === `number` ? num.toLocaleString() : `数値を設定してください`;
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています!!` : `許容範囲内です`;
// }
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
const flag1 = true;
const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// || は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
// const num2 = true;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
