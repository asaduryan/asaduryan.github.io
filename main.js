window.onload = (event) => {
  var paths = document.querySelectorAll('.st0');
  [].forEach.call(paths, function (path) {
    var length = path.getTotalLength();
    path.style.transition = path.style.WebkitTransition = 'none';
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
  })

  let namepath = document.querySelector(".title");
  let length = namepath.getTotalLength();
  namepath.style.transition = namepath.style.WebkitTransition = 'none';
  namepath.style.strokeDasharray = length + ' ' + length;
  namepath.style.strokeDashoffset = length;
};