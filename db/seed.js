var searchArr = [];
const genders = [`men's`, `women's`];
const brands = ['merrell', 'arcteryx', 'osprey', 'mountain hardwear', 'north face'];
const clothing = ['jackets', 'pants', 'shoes', 'socks', 'boots', 'outerwear']
const things = ['stoves', 'bottles', 'water bottles', 'backpacks']

const seed = (arr)=>{
  var results=[];
  for (var i = 0;i = arr.length; i++){
    var newObj ={name:arr[i]}
    results.push(newObj)
  }
  return results;
}