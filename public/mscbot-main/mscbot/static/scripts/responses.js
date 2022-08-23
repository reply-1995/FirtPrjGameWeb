function getBotResponse(input) {
    //rock paper scissors
    if (input == "안녕") {
        return "안녕하세요 이용자님";
    } else if (input == "문의하기") {
        return "어떤것을 도와드릴까요";
    } else if (input == "버그 해결해줘") {
        return "안녕하세요, 이용자님. 저희 게임을 이용해주셔서 감사합니다.<br> 빠른해결을 원하시면 FAQ 게시판을 참고해주세요. <br>더많은 도움이 필요하시면 1995-1995로 연락부탁드립니다.<br> 감사합니다.";
    }

    // Simple responses
    if (input == "게임시작하는법 알려줘") {
        return "안녕하세요, 이용자님. 저희 게임을 이용해주셔서 감사합니다. 로그인해주시면 게임시작 버튼이 보입니다. 아직 회원이 아니시라면 회원가입 부탁드립니다. <br>즐거운플레이하세요!";
    } else if (input == "반가워") {
        return "저도 반갑습니다";
    } else {
        return "잘 이해하지 못했어요. 다른 이야기를 써주시겠어요?";
    }
}