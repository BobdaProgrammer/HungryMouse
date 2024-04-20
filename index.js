document.body.childNodes.forEach((item) => {
  item.addEventListener("mouseover", function (event) {
    if (event.target.tagName != "DIV") {
      if (event.target.parentNode.children.length == 1) {
        event.target.parentNode.remove();
      } else {
        event.target.remove();
      }
    } else if (event.target.children.length == 0) {
      for (let i = 0; i < event.target.children.length; i++) {
        if (event.target.children[i].tagName == "BR") {
          event.target.children[i].remove();
        } else if (event.target.children[i].children.length == 0) {
          event.target.children[i].remove();
        }
      }
      if (event.target.parentNode.children.length == 1) {
        event.target.parentNode.remove();
      } else {
        event.target.remove();
      }
    } else {
      for (let i = 0; i < event.target.children.length; i++) {
        if (event.target.children[i].tagName == "BR") {
          event.target.children[i].remove();
        } else if (event.target.children[i].children.length == 0) {
          event.target.children[i].remove();
        }
      }
    }
  });
});
