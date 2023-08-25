function lagChg(element) {
    var selectedValue = element.value;
    var chg = element.value;

    // 선택된 값에 따라 리다이렉션 처리
    if (chg === "한국어") {
        window.location.href = "/netflex/login.html";
    }
  }

  window.redirect = redirect;