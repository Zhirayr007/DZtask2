//Задание 1 ===============================================================================
function func(a) {
	let summa = a;
	function f(b) {
		summa += b;
		return f;
	} 
	f.toString = function() {
		return summa;
	};
	return f;
}
alert( func(2)(3)(5) ); 
console.log(func(2)(3)(5)==10);


///Задание 2 ============================================================================================
// let mass = [4, 2, 6, 5, 3, 9];
// let mass2 = [4, 2];
// let mass3 = [0, -2, 61, 25, 13, -9, 4,96,-11,37,45,2,3,4,5,6,7,-3];
// let mass4 = [2, 2, 6, 5, 3, 2];
// //Функция замены местами элементов
// function swap(mass, firstIndex, secondIndex){
// 	const a = mass[firstIndex];
// 	mass[firstIndex] = mass[secondIndex];
// 	mass[secondIndex] = a;
// }
// function partition(mass, left, right) {
// 	let S  = mass[Math.floor((right + left) / 2)];//Опорный элемент (в моем случае центральный элемент массива)
// 	let i= left, j = right; 
// 	while (i <= j) {
// 		while (mass[i] < S) {
// 			i++;
// 		}
// 		while (mass[j] > S) {
// 			j--;
// 		}
// 		if (i <= j) {
// 			swap(mass, i, j);
// 			i++;
// 			j--;
// 		}
// 	}
// 	return i;
// }
// //Функция сортировки
// function sort(mass, left, right) {
// 	let index;
// 	if (mass.length > 1) {
// 		index = partition(mass, left, right);
// 		if (left < index - 1) {
// 			sort(mass, left, index - 1);
// 		}
// 		if (index < right) {
// 			sort(mass, index, right);
// 		}
// 	}
// 	return mass;
// }
// console.log(sort(mass, 0, mass.length - 1));
// console.log(sort(mass2, 0, mass2.length - 1));
// console.log(sort(mass3, 0, mass3.length - 1));
// console.log(sort(mass4, 0, mass4.length - 1));




///Задание 3 ============================================================================================
// let block =document.querySelector('.block');
// function Tasks(){
// 	setTimeout(()=>{
// 		console.log("Задача 2");
// 		new Promise((resolve, reject) => {
// 			resolve('микрозадача 2');
// 		 }).then(res => console.log(res))
// 			.catch(err => console.log(err));
// 			new Promise((resolve, reject) => {
// 				resolve('микрозадача 3');
// 			 }).then(res => console.log(res))
// 				.catch(err => console.log(err));
				
// 	}, 1000)
// 	setTimeout(()=>{
// 		console.log("Задача 1");
// 		new Promise((resolve, reject) => {
// 			resolve('микрозадача 1');
// 		 }).then(res => console.log(res))
// 			.catch(err => console.log(err));
// 			block.style.backgroundColor = "red";
				
// 	}, 500)
// 	setTimeout(()=>{
// 		console.log("Задача 3");
// 		new Promise((resolve, reject) => {
// 			resolve('микрозадача 4');
// 		 }).then(res => console.log(res))
// 			.catch(err => console.log(err));
// 			block.style.borderRadius = '15px';
				
// 	}, 2000)
// }
// Tasks();