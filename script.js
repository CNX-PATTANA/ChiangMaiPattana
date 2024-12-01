document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");

  menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
  });
});

  document.addEventListener("DOMContentLoaded", () => {
	  const menuItems = document.querySelectorAll(".menu-item");
	
	  menuItems.forEach((menuItem) => {
	    const submenu = menuItem.querySelector(".submenu");
	
	    // แสดง/ซ่อนเมนูย่อยเมื่อคลิกที่เมนูหลัก
	    menuItem.addEventListener("click", (e) => {
	      e.stopPropagation(); // หยุดการคลิกทะลุ
	      menuItem.classList.toggle("active");
	
	      // ซ่อนเมนูอื่นๆ
	      menuItems.forEach((otherItem) => {
	        if (otherItem !== menuItem) {
	          otherItem.classList.remove("active");
	        }
	      });
	    });
	
	    // ซ่อนเมนูย่อยเมื่อคลิกภายนอก
	    document.addEventListener("click", () => {
	      menuItem.classList.remove("active");
	    });
	
	    // ป้องกันเมนูปิดเมื่อคลิกใน submenu
	    submenu.addEventListener("click", (e) => {
	      e.stopPropagation();
	    });
	  });
	});
