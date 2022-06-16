/**
 * 三項演算子
 */

//ある条件 ? 条件がtrueのとき : 条件がfalseのとき

// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;

// const formattednum = typeof num  === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattednum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }

// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう
 */

//  const flag1 = true;
//  const flag2 = false;

//  if (flag1 || flag2) {
//    console.log("1か2はtrueです");
//  }

//  if (flag1 && flag2) {
//   console.log("1も2もtrueです");
// }

// ||は左側がfalseなら右側を返す
// const num = 1;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);