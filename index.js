const args = process.argv.slice(2);


let remove = function(data) {
    return [...new Set(data)].join(' ');
  };

console.log(args)