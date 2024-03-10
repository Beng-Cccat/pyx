  // 获取所有item元素
  var lis = document.getElementsByClassName('item');
  // var box = document.getElementById('box');

  //遍历所有的item,单击的是哪个item里的图片src 。
  for (var i = 0; i < lis.length; i++) {
      lis[i].onclick = function() {
          // 获取弹窗
          var modal = document.getElementById('myModal');
          // 弹窗位移回到0
          modal.style.transform = 'translateX(0)'
              // 弹窗阴影
          modal.style.boxShadow = '-100px 0px 400px rgba(0, 0, 0, 1)'
              // 获取图片插入到弹窗
          var modalImg = document.getElementById("img_content");

          modalImg.src = this.getElementsByTagName('img')[0].src;
          // 获取close元素，设置关闭按钮
          var close = document.getElementsByClassName("close")[0];
          var close1 = document.getElementsByClassName("close")[1];
          // 当点击 (关闭), 关闭弹窗
          close.onclick = function() {
              modal.style.transform = 'translateX(100%)'
              modal.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0)'

          };
          //   手机端关闭按钮
          close1.onclick = function() {
              modal.style.transform = 'translateX(100%)'
              modal.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0)'

          };
      }

  }