  function setActive(element) {
      document.querySelectorAll('nav li').forEach(function(li) {
        li.classList.remove('active');
      });

      element.closest('li').classList.add('active');
    }

    