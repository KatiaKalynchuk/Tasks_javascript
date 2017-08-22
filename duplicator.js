Array.prototype.duplicator = function () {
    this.concat(this);
};
console.log([1,2,3].duplicator());
